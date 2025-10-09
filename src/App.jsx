import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import VitruvianGeometry from './components/VitruvianGeometry'
import OmSymbol from './components/OmSymbol'
import Bindu from './components/Bindu'

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

            {/* Om Symbol - Centre */}
            <OmSymbol className="w-48 h-48 mx-auto" />
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

          {/* Cœur embryonnaire (💓) - Premier bindu vivant - Métaphore Kali Yuga */}
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
            {/* Cœur embryonnaire - Kali Yuga : fade-out progressif 7-8s, réapparaît au survol */}
            <motion.div
              className="relative w-8 h-8 rounded-full bg-[#DC143C] shadow-md"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHoveringHeart ? 1 : [0, 1, 1, 1, 1, 0.7, 0.4, 0],
                scale: isHoveringHeart ? [1, 1.15, 1] : [1, 1.15, 1],
                boxShadow: isHoveringHeart ? [
                  '0 0 8px rgba(220, 20, 60, 0.4)',
                  '0 0 18px rgba(220, 20, 60, 0.6)',
                  '0 0 8px rgba(220, 20, 60, 0.4)',
                ] : [
                  '0 0 8px rgba(220, 20, 60, 0.4)',
                  '0 0 18px rgba(220, 20, 60, 0.6)',
                  '0 0 8px rgba(220, 20, 60, 0.4)',
                ]
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
                },
                scale: {
                  duration: isHoveringHeart ? 2 : 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 6.5
                },
                boxShadow: {
                  duration: isHoveringHeart ? 2 : 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 6.5
                }
              }}
            />
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
