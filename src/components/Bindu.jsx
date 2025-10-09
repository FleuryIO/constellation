import { motion } from 'framer-motion'

/**
 * Bindu (बिंदु) - Point central lumineux
 * Représente le centre absolu, la conscience pure
 */
export default function Bindu() {
  return (
    <div className="relative w-32 h-32 mx-auto my-12">
      {/* Cercles concentriques respirants */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-bindu-rouge opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute inset-4 rounded-full border-2 border-bindu-or opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.15, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <motion.div
        className="absolute inset-8 rounded-full border-2 border-bindu-indigo opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Point central pulsant */}
      <motion.div
        className="absolute inset-12 rounded-full bg-bindu-rouge shadow-lg"
        animate={{
          scale: [1, 1.15, 1],
          boxShadow: [
            '0 0 20px rgba(139, 0, 0, 0.4)',
            '0 0 40px rgba(139, 0, 0, 0.6)',
            '0 0 20px rgba(139, 0, 0, 0.4)',
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
