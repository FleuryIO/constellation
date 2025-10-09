import { motion } from 'framer-motion'

/**
 * Om (ॐ) - Son primordial, origine de toute création
 * Big Bang cosmique : expansion puis contraction respirante
 */
export default function OmSymbol({ className = "" }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 8, 1],
        opacity: [0, 1, 1]
      }}
      transition={{
        duration: 6,
        times: [0, 0.5, 1],
        ease: "easeInOut"
      }}
      className={`relative ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
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

        {/* Dégradé */}
        <defs>
          <linearGradient id="omGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B0000" /> {/* Bindu rouge */}
            <stop offset="50%" stopColor="#D4AF37" /> {/* Or */}
            <stop offset="100%" stopColor="#4B0082" /> {/* Indigo */}
          </linearGradient>
        </defs>

        {/* Symbole Om en texte Devanagari stylisé */}
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
      </svg>

    </motion.div>
  )
}
