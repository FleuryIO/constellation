import { motion } from 'framer-motion'

/**
 * Géométrie de Vitruve - Cercle et Carré sacrés
 * Structure divine : Om (tête) → Bindu (nombril) → Mantra (racine)
 */
export default function VitruvianGeometry({ children, isHoveringHeart }) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Sri Yantra - Géométrie sacrée de fond - VERSION ESSENTIELLE (très discret) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: isHoveringHeart ? 0.35 : [0, 0.1, 0.15, 0.2, 0.25, 0.2, 0.15, 0.1]
        }}
        transition={{
          duration: isHoveringHeart ? 0.5 : 16,
          ease: "easeInOut",
          delay: 10,
          repeat: isHoveringHeart ? 0 : Infinity,
          times: isHoveringHeart ? undefined : [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875]
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Carré extérieur (Bhupura) */}
          <rect
            x="50"
            y="50"
            width="700"
            height="700"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2.5"
            opacity="0.6"
          />

          {/* 4 portes (T) - Nord, Sud, Est, Ouest */}
          <line x1="400" y1="50" x2="400" y2="20" stroke="#D4AF37" strokeWidth="3" opacity="0.6" />
          <line x1="400" y1="750" x2="400" y2="780" stroke="#D4AF37" strokeWidth="3" opacity="0.6" />
          <line x1="50" y1="400" x2="20" y2="400" stroke="#D4AF37" strokeWidth="3" opacity="0.6" />
          <line x1="750" y1="400" x2="780" y2="400" stroke="#D4AF37" strokeWidth="3" opacity="0.6" />

          {/* Cercle extérieur (Lotus 16 pétales) */}
          <circle cx="400" cy="400" r="320" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.5" />

          {/* Cercle intérieur (Lotus 8 pétales) */}
          <circle cx="400" cy="400" r="240" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.5" />

          {/* 9 Triangles entrelacés - Géométrie traditionnelle : 5 Shakti ↓ + 4 Shiva ↑ */}
          <g stroke="#8B0000" strokeWidth="1.8" fill="none" opacity="0.65">
            {/* 5 Triangles descendants (Shakti - Énergie féminine, manifestation) */}
            <polygon points="400,180 200,550 600,550" />
            <polygon points="400,200 250,520 550,520" />
            <polygon points="400,240 280,480 520,480" />
            <polygon points="400,280 310,440 490,440" />
            <polygon points="400,320 340,400 460,400" />

            {/* 4 Triangles ascendants (Shiva - Conscience masculine, transcendance) */}
            <polygon points="400,620 150,280 650,280" />
            <polygon points="400,600 180,300 620,300" />
            <polygon points="400,560 220,340 580,340" />
            <polygon points="400,500 260,380 540,380" />
          </g>

          {/* Croix centrale - Axes cosmiques */}
          <line x1="400" y1="100" x2="400" y2="700" stroke="#D4AF37" strokeWidth="1.5" opacity="0.45" />
          <line x1="100" y1="400" x2="700" y2="400" stroke="#D4AF37" strokeWidth="1.5" opacity="0.45" />

          {/* Bindu central (Point de création) */}
          <circle cx="400" cy="400" r="8" fill="#D4AF37" opacity="0.8">
            <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </motion.div>

      {/* Contenu (Om, Date, Bindu, Mantra) */}
      <div className="relative z-10 py-16">
        {children}
      </div>

      {/* Annotations subtiles - MASQUÉ pour expérience pure */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 9 }}
        className="absolute top-4 right-4 text-sm font-contemplative text-bindu-or/70 italic"
      >
        Géométrie sacrée
      </motion.div> */}
    </div>
  )
}
