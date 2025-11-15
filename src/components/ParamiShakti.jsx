import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ParamiShakti - Contemplation des 10 Pāramī et 10 Śakti du Service
 *
 * Voie du savoir-être pour servir
 * Ouvre l'accès à la musique contemplative après réflexion
 */

const paramiShaktiMap = [
  {
    numero: 1,
    parami: { nom: "Dāna", signification: "Générosité" },
    shakti: { nom: "Kriyā-Śakti", nature: "Puissance d'action juste" },
    savoirEtre: "Être disponible, non possessif",
    service: "Donner, partager, accueillir"
  },
  {
    numero: 2,
    parami: { nom: "Sīla", signification: "Harmonie éthique" },
    shakti: { nom: "Dharma-Śakti", nature: "Force d'ordre cosmique" },
    savoirEtre: "Être juste, transparent",
    service: "Inspirer confiance, pacifier"
  },
  {
    numero: 3,
    parami: { nom: "Nekkhamma", signification: "Renoncement" },
    shakti: { nom: "Vairāgya-Śakti", nature: "Puissance de détachement" },
    savoirEtre: "Être libre du résultat",
    service: "Servir sans attente"
  },
  {
    numero: 4,
    parami: { nom: "Paññā", signification: "Sagesse" },
    shakti: { nom: "Jñāna-Śakti", nature: "Conscience de connaissance" },
    savoirEtre: "Voir les causes et effets",
    service: "Conseiller, guider, comprendre"
  },
  {
    numero: 5,
    parami: { nom: "Viriya", signification: "Énergie juste" },
    shakti: { nom: "Tejas-Śakti", nature: "Feu intérieur" },
    savoirEtre: "Être constant dans l'effort aimant",
    service: "Soutenir, porter les autres"
  },
  {
    numero: 6,
    parami: { nom: "Khanti", signification: "Patience" },
    shakti: { nom: "Śānti-Śakti", nature: "Paix intérieure" },
    savoirEtre: "Être stable dans la tempête",
    service: "Apaiser, contenir, écouter"
  },
  {
    numero: 7,
    parami: { nom: "Sacca", signification: "Vérité" },
    shakti: { nom: "Satya-Śakti", nature: "Puissance de vérité" },
    savoirEtre: "Être vrai, aligné",
    service: "Témoigner avec justesse"
  },
  {
    numero: 8,
    parami: { nom: "Adhiṭṭhāna", signification: "Détermination" },
    shakti: { nom: "Icchā-Śakti", nature: "Volonté divine" },
    savoirEtre: "Être ferme dans le bien",
    service: "Tenir la direction, incarner"
  },
  {
    numero: 9,
    parami: { nom: "Mettā", signification: "Amour bienveillant" },
    shakti: { nom: "Karuṇā-Śakti", nature: "Compassion agissante" },
    savoirEtre: "Être bonté agissante",
    service: "Rayonner, réconforter"
  },
  {
    numero: 10,
    parami: { nom: "Upekkhā", signification: "Équanimité" },
    shakti: { nom: "Ānanda-Śakti", nature: "Béatitude silencieuse" },
    savoirEtre: "Être calme et vaste",
    service: "Rester témoin, équilibrer"
  }
]

export default function ParamiShakti({ isVisible, onClose, onOpenMusic }) {
  const [selectedParami, setSelectedParami] = useState(null)
  const [hasContemplated, setHasContemplated] = useState(false)

  const handleParamiClick = (parami) => {
    setSelectedParami(parami)
    if (!hasContemplated) {
      setHasContemplated(true)
    }
  }

  const handleOpenMusic = () => {
    onOpenMusic()
    onClose()
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-gray-900/95 border border-bindu-or/30 rounded-lg p-8 max-w-5xl w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Titre */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-light text-bindu-or mb-3">
              10 Pāramī ↔ 10 Śakti du Service
            </h2>
            <p className="text-sm text-gray-400 italic mb-2">
              Voie du savoir-être pour servir
            </p>
            <p className="text-xs text-gray-500">
              Vipassanā purifie • Śaktipāt révèle • Le service rayonne
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8 p-4 bg-gray-800/40 border border-bindu-or/20 rounded-lg">
            <p className="text-sm text-gray-300 leading-relaxed">
              Les <span className="text-bindu-or">Pāramī</span> ne sont ni des règles, ni des techniques :
              ce sont des <strong>qualités intérieures</strong> qui mûrissent le cœur.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mt-2">
              Les <span className="text-bindu-or">10 flux de Śakti</span> ne sont pas toutes les Śakti —
              ce sont les <strong>10 formes de la conscience</strong> lorsqu'elle se met au service du Vivant.
            </p>
            <p className="text-sm text-bindu-or/80 mt-3 italic text-center">
              "Le vrai service ne vient pas d'une volonté de faire le bien,<br/>
              mais d'un cœur dans lequel il n'y a plus d'obstacle à la lumière."
            </p>
          </div>

          {/* Grille des 10 Pāramī-Śakti */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {paramiShaktiMap.map((item) => (
              <motion.button
                key={item.numero}
                onClick={() => handleParamiClick(item)}
                whileHover={{ scale: 1.02 }}
                className={`text-left p-4 rounded-lg border transition-all ${
                  selectedParami?.numero === item.numero
                    ? 'bg-bindu-or/10 border-bindu-or/50'
                    : 'bg-gray-800/30 border-gray-700/40 hover:border-bindu-or/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bindu-or/20 border border-bindu-or/40 flex items-center justify-center">
                    <span className="text-bindu-or text-sm font-light">{item.numero}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-bindu-or/90 font-light text-base">{item.parami.nom}</h3>
                      <span className="text-xs text-gray-500">({item.parami.signification})</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-1">
                      → <span className="text-bindu-or/70">{item.shakti.nom}</span>
                    </p>
                    <p className="text-[11px] text-gray-500 italic">
                      {item.shakti.nature}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Détail du Pāramī sélectionné */}
          <AnimatePresence mode="wait">
            {selectedParami && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 p-5 bg-bindu-or/5 border border-bindu-or/30 rounded-lg overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-bindu-or/20 border-2 border-bindu-or/50 flex items-center justify-center">
                      <span className="text-bindu-or text-lg font-light">{selectedParami.numero}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-bindu-or mb-1">
                      {selectedParami.parami.nom} ↔ {selectedParami.shakti.nom}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Savoir-être</p>
                        <p className="text-sm text-gray-300">{selectedParami.savoirEtre}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Forme de service</p>
                        <p className="text-sm text-gray-300">{selectedParami.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Synthèse contemplative */}
          <div className="mb-6 p-4 bg-gray-800/30 border border-gray-700/40 rounded-lg">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-bindu-or/80">Vipassanā</strong> : Observer et comprendre (vision directe, silence intérieur)
              <br/>
              <strong className="text-bindu-or/80">Śaktipāt</strong> : Transmission et intégration énergétique (descente de conscience)
              <br/>
              <strong className="text-bindu-or/80">Sevā</strong> : Service comme fruit naturel du cœur purifié
            </p>
            <p className="text-xs text-bindu-or/60 mt-3 text-center italic">
              "Les Pāramī préparent le canal • Le Śaktipāt allume la flamme • Les 10 Śakti la font rayonner"
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-700/30">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-800/50 border border-gray-700/50 text-gray-400 text-sm rounded-lg hover:border-bindu-or/40 hover:text-bindu-or transition-all"
            >
              Revenir à la Constellation
            </button>

            {hasContemplated && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={handleOpenMusic}
                className="px-6 py-2 bg-bindu-or/10 border border-bindu-or/40 text-bindu-or text-sm rounded-lg hover:bg-bindu-or/20 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                Musique pour Sādhana
              </motion.button>
            )}
          </div>

          <p className="text-[10px] text-gray-600 text-center mt-4">
            Chaque victoire technique → sagesse capitalisable
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
