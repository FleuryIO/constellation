import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import VitruvianGeometry from './components/VitruvianGeometry'
import OmSymbol from './components/OmSymbol'
import Bindu from './components/Bindu'
import MusicPlayer from './components/MusicPlayer'
import ParamiShakti from './components/ParamiShakti'

// Citations spirituelles
const citations = [
  "La sādhana est le pont entre ce que tu crois être et ce que tu es vraiment.",
  "Sans pratique, les progrès sont impossibles.",
  "Organise ta vie en fonction de ta sādhana.",
  "Ce n'est pas la sādhana qui est compliquée, c'est le petit 'moi'.",
  "Servir avec amour, attention et humilité est déjà une forme d'union avec le Divin.",
  "Quand l'action devient offrande, chaque geste devient prière.",
  "Chaque victoire technique → sagesse capitalisable.",
]

// Date en Sanskrit (chiffres Devanagari)
const toSanskritNumber = (num) => {
  const map = ['०','१','२','३','४','५','६','७','८','९']
  return String(num).split('').map(d => map[parseInt(d)]).join('')
}

const getSanskritDate = () => {
  const now = new Date()
  const jours = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार']
  const mois = ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर']

  return `${jours[now.getDay()]} ${toSanskritNumber(now.getDate())} ${mois[now.getMonth()]} ${toSanskritNumber(now.getFullYear())}`
}

function App() {
  const [intention, setIntention] = useState('')
  const [citationDuJour, setCitationDuJour] = useState('')
  const [isHoveringHeart, setIsHoveringHeart] = useState(false)
  const [debugTime, setDebugTime] = useState(0)
  const [showMusicPlayer, setShowMusicPlayer] = useState(false)
  const [showParamiShakti, setShowParamiShakti] = useState(false)
  const [hoveredPetal, setHoveredPetal] = useState(null)

  // Charger intention depuis localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem('ma-sadhana-intention')
    if (saved) setIntention(saved)

    // Citation du jour (basée sur la date)
    const today = new Date().toDateString()
    const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    setCitationDuJour(citations[hash % citations.length])
  }, [])

  // Sauvegarder intention dans localStorage
  useEffect(() => {
    localStorage.setItem('ma-sadhana-intention', intention)
  }, [intention])

  const dateFR = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const [isHoveringPanel, setIsHoveringPanel] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      {/* Pāramī-Śakti Modal - Contemplation avant musique */}
      <ParamiShakti
        isVisible={showParamiShakti}
        onClose={() => setShowParamiShakti(false)}
        onOpenMusic={() => setShowMusicPlayer(true)}
      />

      {/* Music Player Modal - Accessible après contemplation */}
      <MusicPlayer
        isVisible={showMusicPlayer}
        onClose={() => setShowMusicPlayer(false)}
      />
      {/* VERSION ESSENTIELLE : Axes 3D debug retirés pour silence contemplatif */}
      {/* <div className="fixed top-4 left-4 z-50 bg-black/80 text-white p-4 rounded font-mono text-xs">
        <div className="mb-2 font-bold">Axes 3D (Debug)</div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-12 h-0.5 bg-red-500"></div>
          <span>X (horizontal)</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-0.5 h-12 bg-green-500"></div>
          <span>Y (vertical)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-12 h-0.5 bg-blue-500 opacity-50"></div>
          <span>Z (profondeur)</span>
        </div>
        <div className="mt-3 pt-3 border-t border-white/30">
          <div>rotateX = pitch (haut/bas)</div>
          <div>rotateY = yaw (gauche/droite)</div>
          <div>rotateZ = roll (rotation plane)</div>
        </div>
      </div> */}

      <VitruvianGeometry isHoveringHeart={isHoveringHeart}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-2xl w-full text-center"
        >
          {/* Axe vertical cosmique - Ligne de résonance */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.15, scaleY: 1 }}
            transition={{ duration: 2, delay: 9 }}
            className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[500px] bg-gradient-to-b from-bindu-or via-gray-300 via-bindu-rouge to-bindu-indigo"
            style={{ top: '15%' }}
          />

          <div className="relative">
            {/* Bindu Cosmique (Om) - Haut */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [0, 8, 1]
              }}
              transition={{
                duration: 6,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative w-32 h-32">
                {/* Cercle 1 - Bindu Cosmique (☀︎ Silence infini) */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-bindu-or/20"
                  initial={{ opacity: 0 }}
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.2, 0.05, 0.2],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 6.5
                  }}
                />

                {/* Point central - Om originel */}
                <motion.div
                  className="absolute inset-14 rounded-full bg-bindu-or shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 10px rgba(212, 175, 55, 0.4)',
                      '0 0 30px rgba(212, 175, 55, 0.8)',
                      '0 0 10px rgba(212, 175, 55, 0.4)',
                    ]
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 6.5
                  }}
                />
              </div>
            </motion.div>

            {/* Om Symbol - Centre avec 12 pétales d'Ashaya */}
            <div className="relative">
              {/* 12 Pétales d'Ashaya - Cercle subtil autour du Om */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHoveringHeart ? 0.3 : 0,
                  scale: isHoveringHeart ? 1 : 0.95
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {/* Cercle de base pour les pétales */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-64 h-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="petalGradient">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05"/>
                    </radialGradient>
                  </defs>

                  {/* 12 pétales positionnés en cercle */}
                  {[
                    { angle: 0, name: "Clarté" },      // Est
                    { angle: 30, name: "Connaissance" },
                    { angle: 60, name: "Silence" },    // Nord-Est
                    { angle: 90, name: "Foi" },        // Nord
                    { angle: 120, name: "Vérité" },    // Nord-Ouest
                    { angle: 150, name: "Compassion" },
                    { angle: 180, name: "Douceur" },   // Ouest
                    { angle: 210, name: "Humilité" },
                    { angle: 240, name: "Présence" },  // Sud-Ouest
                    { angle: 270, name: "Gratitude" }, // Sud
                    { angle: 300, name: "Service" },   // Sud-Est
                    { angle: 330, name: "Joie" }
                  ].map((petal, i) => {
                    const radius = 70;
                    const x = 100 + radius * Math.cos((petal.angle - 90) * Math.PI / 180);
                    const y = 100 + radius * Math.sin((petal.angle - 90) * Math.PI / 180);
                    const isService = petal.name === "Service";
                    const isHovered = hoveredPetal === petal.name;

                    return (
                      <g
                        key={i}
                        style={{ cursor: isService ? 'pointer' : 'default' }}
                        onClick={isService ? () => setShowParamiShakti(true) : undefined}
                        onMouseEnter={isService ? () => setHoveredPetal(petal.name) : undefined}
                        onMouseLeave={isService ? () => setHoveredPetal(null) : undefined}
                      >
                        {/* Pétale (forme de feuille) */}
                        <ellipse
                          cx={x}
                          cy={y}
                          rx="8"
                          ry="15"
                          fill="url(#petalGradient)"
                          stroke="#D4AF37"
                          strokeWidth={isHovered ? "0.8" : "0.3"}
                          opacity={isHovered ? "0.8" : "0.4"}
                          transform={`rotate(${petal.angle} ${x} ${y})`}
                          style={{ transition: 'all 0.3s ease' }}
                        />

                        {/* Nom de la qualité (très subtil) */}
                        <text
                          x={x}
                          y={y + 25}
                          fontSize={isHovered ? "5" : "4"}
                          fill="#D4AF37"
                          opacity={isHovered ? "0.9" : "0.5"}
                          textAnchor="middle"
                          fontFamily="serif"
                          fontWeight={isHovered ? "400" : "300"}
                          style={{ transition: 'all 0.3s ease' }}
                        >
                          {petal.name}
                        </text>
                      </g>
                    );
                  })}

                  {/* Cercle central subtil reliant les pétales */}
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="0.2"
                    opacity="0.15"
                  />
                </svg>
              </motion.div>

              <OmSymbol className="w-48 h-48 mx-auto relative z-10" />
            </div>
          </div>

          {/* Bindu Mūlādhāra (🔥) - Racine, premier ancrage */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 7 }}
            className="absolute top-[58%] left-1/2 -translate-x-1/2"
          >
            <div className="relative w-6 h-6">
              {/* Cercle de feu */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#B22222]/40"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              {/* Point central rouge-feu */}
              <motion.div
                className="absolute inset-2 rounded-full bg-[#B22222] shadow-md"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 5px rgba(178, 34, 34, 0.4)',
                    '0 0 12px rgba(178, 34, 34, 0.7)',
                    '0 0 5px rgba(178, 34, 34, 0.4)',
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* VERSION ULTRA-ESSENTIELLE : Corps mature Vitruve retiré (non essentiel pour Om Namah Shivaya) */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.15, 0.35, 0.5],
              scale: [0, 0.8, 1, 1]
            }}
            transition={{
              duration: 8,
              delay: 7.5,
              times: [0, 0.2, 0.5, 1],
              ease: "easeOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <svg
              viewBox="0 0 200 300"
              className="w-48 h-72"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#D2B48C" strokeWidth="1.5" fill="none" opacity="0.4">
                <circle cx="100" cy="40" r="20" />
                <line x1="100" y1="60" x2="100" y2="75" />
                <line x1="70" y1="85" x2="130" y2="85" />
                <line x1="70" y1="85" x2="50" y2="140" />
                <line x1="50" y1="140" x2="45" y2="170" />
                <line x1="130" y1="85" x2="150" y2="140" />
                <line x1="150" y1="140" x2="155" y2="170" />
                <line x1="100" y1="75" x2="100" y2="180" />
                <line x1="80" y1="180" x2="120" y2="180" />
                <line x1="85" y1="180" x2="75" y2="240" />
                <line x1="75" y1="240" x2="70" y2="280" />
                <line x1="115" y1="180" x2="125" y2="240" />
                <line x1="125" y1="240" x2="130" y2="280" />
              </g>
              <circle cx="100" cy="130" r="2" fill="#DC143C" opacity="0.6" />
            </svg>
          </motion.div> */}

          {/* VERSION ULTRA-ESSENTIELLE : Bindu Visarga retiré (non essentiel pour Om Namah Shivaya) */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 7.8 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative w-6 h-6">
              <motion.div
                className="absolute inset-0 rounded-full border border-gray-300/40"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              <motion.div
                className="absolute inset-2 rounded-full bg-gray-300 shadow-md"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 5px rgba(192, 192, 192, 0.3)',
                    '0 0 12px rgba(192, 192, 192, 0.6)',
                    '0 0 5px rgba(192, 192, 192, 0.3)',
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div> */}

          {/* Dīpa Pātra (🪔) - Flamme sacrée Śaktipāt - Hṛidaya */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [0, 8, 1]
            }}
            transition={{
              duration: 6,
              times: [0, 0.5, 1],
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-[42%] left-1/2 -translate-x-1/2"
          >
            {/* Dīpa Pātra - Coupe au ghee avec flamme */}
            <motion.div
              className="relative w-16 h-20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHoveringHeart ? 1 : [0, 1, 1, 1, 1, 0.9, 0.7, 0.5]
              }}
              transition={{
                opacity: isHoveringHeart ? {
                  duration: 0.8,
                  ease: "easeOut"
                } : {
                  duration: 8,
                  times: [0, 0.1, 0.6, 0.7, 0.8, 0.85, 0.9, 1],
                  ease: "easeInOut",
                  delay: 6.5
                }
              }}
            >
              {/* Flamme */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-12"
                animate={{
                  scale: isHoveringHeart ? [1, 1.2, 1.1, 1.15, 1] : [1, 1.08, 1.05, 1.08, 1],
                  y: isHoveringHeart ? [0, -2, 0, -1, 0] : [0, -1, 0, -0.5, 0]
                }}
                transition={{
                  duration: isHoveringHeart ? 2 : 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Flamme intérieure (jaune-or) */}
                <div className="absolute inset-x-2 top-2 bottom-3">
                  <div className="w-full h-full bg-gradient-to-t from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-t-full"
                       style={{ filter: 'blur(2px)' }} />
                </div>

                {/* Flamme extérieure (orange-rouge) */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: [0.6, 0.8, 0.7, 0.75, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-[#FF6347] via-[#FF4500] to-transparent rounded-t-full opacity-80"
                       style={{ filter: 'blur(3px)' }} />
                </motion.div>

                {/* Pointe de flamme (blanche lumineuse) */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-3 bg-white rounded-full"
                  animate={{
                    opacity: isHoveringHeart ? [0.9, 1, 0.9] : [0.6, 0.8, 0.6],
                    scale: isHoveringHeart ? [1, 1.3, 1] : [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ filter: 'blur(1px)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)' }}
                />
              </motion.div>

              {/* Coupe (Pātra) */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-8"
                animate={{
                  boxShadow: isHoveringHeart ? [
                    '0 2px 6px rgba(184, 134, 11, 0.3)',
                    '0 4px 12px rgba(184, 134, 11, 0.5)',
                    '0 2px 6px rgba(184, 134, 11, 0.3)',
                  ] : [
                    '0 2px 4px rgba(184, 134, 11, 0.2)',
                    '0 2px 6px rgba(184, 134, 11, 0.3)',
                    '0 2px 4px rgba(184, 134, 11, 0.2)',
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Corps de la coupe (laiton/bronze) */}
                <div className="w-full h-full rounded-b-full bg-gradient-to-b from-[#B8860B] via-[#CD853F] to-[#8B4513]"
                     style={{ clipPath: 'ellipse(50% 40% at 50% 60%)' }} />

                {/* Bord supérieur de la coupe */}
                <div className="absolute top-0 w-full h-2 rounded-full bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#DAA520]" />

                {/* Reflet sur la coupe */}
                <div className="absolute top-1 left-2 w-4 h-2 bg-white/30 rounded-full blur-sm" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bindu Terrestre (🌍) - Bas */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 3 }}
            className="mt-32"
          >
            <div className="relative w-32 h-32 mx-auto">
              {/* Cercle 1 - Terre vivante */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-bindu-indigo/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.15, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Cercle 2 - Pulsation magnétique */}
              <motion.div
                className="absolute inset-6 rounded-full border-2 border-bindu-indigo/40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
              />

              {/* Point central - Cœur de la Terre */}
              <motion.div
                className="absolute inset-12 rounded-full bg-bindu-indigo shadow-lg"
                animate={{
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    '0 0 10px rgba(75, 0, 130, 0.4)',
                    '0 0 25px rgba(75, 0, 130, 0.7)',
                    '0 0 10px rgba(75, 0, 130, 0.4)',
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

          </motion.div>

          {/* Hṛidaya-bindu (💗) - Cœur mature, pont cosmique */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-8"
            onMouseEnter={() => setIsHoveringHeart(true)}
            onMouseLeave={() => setIsHoveringHeart(false)}
          >

            {/* Bindu du cœur - Centre vivant avec 3 régions (Hṛidaya) + Anahata */}
            <div className="relative w-12 h-12">
              {/* Cercle pulsant Rouge (Feu - centre) */}
              <motion.div
                className="absolute inset-0 rounded-full bg-bindu-rouge z-30"
                animate={{
                  scale: isHoveringHeart ? [1, 1.2, 1] : [1, 1.05, 1],
                }}
                transition={{
                  duration: isHoveringHeart ? 4 : 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5]
                }}
              />

              {/* Aura Argent (Lune - 2e région) - VERSION ESSENTIELLE */}
              <motion.div
                className="absolute inset-0 rounded-full bg-bindu-argent z-20"
                style={{ filter: 'blur(3px)' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0, 0.35, 0]
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4,
                  times: [0, 0.5, 1]
                }}
              />

              {/* Aura Vermillon (Soleil - 3e région) - VERSION ESSENTIELLE */}
              <motion.div
                className="absolute inset-0 rounded-full bg-bindu-vermillon z-10"
                style={{ filter: 'blur(4px)' }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 8,
                  times: [0, 0.5, 1]
                }}
              />

              {/* Aura VERTE Anahata (4e région - pont cosmique) - VERSION ESSENTIELLE */}
              <motion.div
                className="absolute inset-0 rounded-full bg-bindu-anahata z-0"
                style={{ filter: 'blur(5px)' }}
                animate={{
                  scale: [1, 1.7, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 10,
                  times: [0, 0.5, 1]
                }}
              />
            </div>

            {/* VERSION ULTRA-ESSENTIELLE : Méditant symbolique retiré (trop peu réel) */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isHoveringHeart ? 0.6 : 0,
                scale: isHoveringHeart ? 1 : 0.9
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="fixed inset-0 flex items-center justify-center pointer-events-none z-40"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#8B0000" strokeWidth="1.5" fill="none" opacity="0.7">
                  <circle cx="50" cy="30" r="12" />
                  <line x1="50" y1="42" x2="50" y2="60" />
                  <path d="M 50 55 Q 35 50 30 58" />
                  <path d="M 50 55 Q 65 50 70 58" />
                  <path d="M 50 60 Q 35 65 30 70" />
                  <path d="M 50 60 Q 65 65 70 70" />
                  <path d="M 30 70 Q 40 72 50 70" />
                  <path d="M 70 70 Q 60 72 50 70" />
                </g>
                <circle cx="50" cy="52" r="2.5" fill="#8B0000" opacity="0.8">
                  <animate attributeName="r" values="2.5;3.5;2.5" dur="4s" repeatCount="indefinite" />
                </circle>
              </svg>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </VitruvianGeometry>
    </div>
  )
}

export default App
