import { motion } from 'framer-motion'
import { useState } from 'react'

/**
 * Om (ॐ) - Son primordial, origine de toute création
 * Big Bang cosmique : expansion puis contraction respirante
 *
 * Mode contemplatif (clic long 2s) révèle les 5 plans de conscience :
 * - Courbe inférieure : Jāgrat (veille)
 * - Courbe médiane : Svapna (rêve)
 * - Courbe supérieure : Suṣupti (sommeil profond)
 * - Croissant : Māyā (voile de l'illusion)
 * - Point (Bindu) : Turiya (conscience pure)
 */
export default function OmSymbol({ className = "" }) {
  const [contemplativeMode, setContemplativeMode] = useState(false)
  const [pressTimer, setPressTimer] = useState(null)

  const handlePressStart = () => {
    const timer = setTimeout(() => {
      setContemplativeMode(true)
    }, 2000) // Clic long 2 secondes
    setPressTimer(timer)
  }

  const handlePressEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer)
      setPressTimer(null)
    }
  }

  const handleClick = () => {
    if (contemplativeMode) {
      setContemplativeMode(false)
    }
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: contemplativeMode ? [1, 2.2] : [0, 8, 1],
        opacity: [0, 1, 1]
      }}
      transition={
        contemplativeMode
          ? { duration: 1.5, ease: "easeOut" }
          : { duration: 6, times: [0, 0.5, 1], ease: "easeInOut" }
      }
      className={`relative ${className} cursor-pointer transition-all duration-1000`}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dégradés */}
        <defs>
          <linearGradient id="omGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B0000" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#4B0082" />
          </linearGradient>

          {/* Dégradés pour A-U-M en mode contemplatif */}
          <linearGradient id="gradientA" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" opacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" opacity="0.1" />
          </linearGradient>
          <linearGradient id="gradientU" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C0C0C0" opacity="0.5" />
            <stop offset="100%" stopColor="#C0C0C0" opacity="0.1" />
          </linearGradient>
          <linearGradient id="gradientM" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#4B0082" opacity="0.4" />
            <stop offset="100%" stopColor="#4B0082" opacity="0.1" />
          </linearGradient>
        </defs>

        {/* Cercle lumineux de fond */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#omGradient)"
          strokeWidth="0.5"
          opacity="0.2"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Symbole Om en texte Devanagari */}
        <text
          x="100"
          y="140"
          fontSize="120"
          fill="url(#omGradient)"
          fontFamily="Noto Sans Devanagari, serif"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ transformOrigin: 'center', transform: 'translateY(-10px)' }}
        >
          ॐ
        </text>

        {/* Mode contemplatif : Révéler A-U-M par overlay subtil */}
        {contemplativeMode && (
          <g opacity="0.3">
            {/* A - Grande courbe inférieure (le "3") */}
            <motion.text
              x="68"
              y="155"
              fontSize="48"
              fill="#D4AF37"
              fontFamily="serif"
              fontWeight="300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              A
            </motion.text>

            {/* U - Boucle médiane/droite */}
            <motion.text
              x="122"
              y="125"
              fontSize="36"
              fill="#C0C0C0"
              fontFamily="serif"
              fontWeight="300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              U
            </motion.text>

            {/* M - Petite boucle supérieure */}
            <motion.text
              x="70"
              y="95"
              fontSize="28"
              fill="#4B0082"
              fontFamily="serif"
              fontWeight="300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              M
            </motion.text>
          </g>
        )}
      </svg>

      {/* Mode contemplatif - Les 5 plans de conscience */}
      {contemplativeMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-full h-full">
            {/* Annotations des 5 plans - apparition progressive */}

            {/* 1. A = Jāgrat - Grande courbe inférieure "3" (état de veille) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              className="absolute left-[-220px] bottom-[18%] text-left"
            >
              <div className="text-2xl font-light text-bindu-or mb-1">A</div>
              <div className="text-base font-light text-gray-700 dark:text-gray-200">Jāgrat</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 italic">Grande courbe inférieure</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">État de veille</div>
            </motion.div>

            {/* 2. U = Svapna - Boucle médiane/droite (état de rêve) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              className="absolute right-[-220px] bottom-[28%] text-right"
            >
              <div className="text-xl font-light text-gray-400 mb-1">U</div>
              <div className="text-base font-light text-gray-700 dark:text-gray-200">Svapna</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 italic">Boucle médiane</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">État de rêve</div>
            </motion.div>

            {/* 3. M = Suṣupti - Petite boucle supérieure gauche (sommeil profond) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ delay: 1.1, duration: 1.2, ease: "easeOut" }}
              className="absolute left-[-220px] top-[24%] text-left"
            >
              <div className="text-lg font-light text-bindu-indigo mb-1">M</div>
              <div className="text-base font-light text-gray-700 dark:text-gray-200">Suṣupti</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 italic">Petite boucle supérieure</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Sommeil profond</div>
            </motion.div>

            {/* 4. Māyā - Le croissant horizontal au sommet (voile de l'illusion) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 0.85, x: 0 }}
              transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
              className="absolute right-[-220px] top-[14%] text-right"
            >
              <div className="text-base font-light text-gray-700 dark:text-gray-200 mb-1">Māyā</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 italic">Croissant (voile)</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Séparation illusoire</div>
            </motion.div>

            {/* 5. Bindu / Turiya - Le point au-dessus du croissant (conscience pure) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 1.5, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 top-[-15%] text-center"
            >
              <div className="text-2xl font-light text-bindu-or mb-1">• Bindu •</div>
              <div className="text-base font-light text-bindu-or">Turiya</div>
              <div className="text-xs text-bindu-or/70 italic">Point suprême</div>
              <div className="text-xs text-bindu-or/70">Conscience pure (silence)</div>
            </motion.div>

            {/* Méditation guidée - Apparaît en dernier */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 2.2, duration: 2, ease: "easeOut" }}
              className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[600px] text-center"
            >
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 italic font-light">
                "Je suis le témoin de l'état de veille,<br />
                le témoin du rêve, le témoin du sommeil,<br />
                et au-delà, le témoin du témoin —<br />
                <span className="text-bindu-or">la conscience silencieuse, le Bindu du Tout.</span>"
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}

    </motion.div>
  )
}
