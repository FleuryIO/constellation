import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * MusicPlayer - Interface contemplative pour playlists sādhana
 *
 * Connexion avec ingenieur-spirituel-api sur VPS
 */

const API_BASE_URL = 'http://51.38.185.190:3000'

export default function MusicPlayer({ isVisible, onClose }) {
  const [playlists, setPlaylists] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedTag, setSelectedTag] = useState(null)

  // Charger les playlists depuis l'API
  useEffect(() => {
    if (!isVisible) return

    const fetchPlaylists = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${API_BASE_URL}/api/music/playlists`)

        if (!response.ok) {
          throw new Error('API non accessible')
        }

        const result = await response.json()

        if (result.success) {
          setPlaylists(result.data)
        } else {
          throw new Error(result.error || 'Erreur API')
        }
      } catch (err) {
        setError(err.message)
        console.error('Erreur chargement playlists:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlaylists()
  }, [isVisible])

  // Extraire tous les tags uniques
  const allTags = [...new Set(playlists.flatMap(p => p.tags))]

  // Filtrer playlists par tag
  const filteredPlaylists = selectedTag
    ? playlists.filter(p => p.tags.includes(selectedTag))
    : playlists

  // Ouvrir playlist dans nouvel onglet
  const handlePlaylistClick = (playlist) => {
    window.open(playlist.url, '_blank')
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-gray-900/90 border border-bindu-or/30 rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Titre */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-light text-bindu-or mb-2">
              🪔 Musique pour Sādhana
            </h2>
            <p className="text-sm text-gray-400">
              Playlists depuis <span className="text-bindu-or/60">service@VPS</span>
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block w-8 h-8 border-2 border-bindu-or/30 border-t-bindu-or rounded-full"
              />
              <p className="text-gray-400 mt-4 text-sm">Chargement...</p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="text-center py-12">
              <p className="text-red-400/80 mb-2">⚠️ {error}</p>
              <p className="text-xs text-gray-500">
                Vérifier que l'API est accessible sur {API_BASE_URL}
              </p>
            </div>
          )}

          {/* Tags Filter */}
          {!loading && !error && allTags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-xs transition-all ${
                  selectedTag === null
                    ? 'bg-bindu-or/20 text-bindu-or border border-bindu-or/40'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-bindu-or/30'
                }`}
              >
                Tout
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs transition-all ${
                    selectedTag === tag
                      ? 'bg-bindu-or/20 text-bindu-or border border-bindu-or/40'
                      : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-bindu-or/30'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Playlists */}
          {!loading && !error && (
            <div className="space-y-3">
              {filteredPlaylists.length === 0 && (
                <p className="text-center text-gray-500 py-8 text-sm">
                  Aucune playlist trouvée
                </p>
              )}

              {filteredPlaylists.map((playlist, i) => (
                <motion.button
                  key={playlist.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handlePlaylistClick(playlist)}
                  className="w-full bg-gray-800/40 border border-gray-700/50 rounded-lg p-4 text-left hover:bg-gray-800/60 hover:border-bindu-or/40 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-bindu-or/90 font-light mb-1 group-hover:text-bindu-or transition-colors">
                        {playlist.name}
                      </h3>

                      {playlist.intention && (
                        <p className="text-xs text-gray-400 mb-2 italic">
                          "{playlist.intention}"
                        </p>
                      )}

                      <div className="flex flex-wrap gap-1">
                        {playlist.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-bindu-or/10 text-bindu-or/60 text-[10px] rounded-full border border-bindu-or/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-bindu-or/70 transition-colors">
                      <span className="text-xs uppercase tracking-wider">
                        {playlist.service}
                      </span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-700/30 text-center">
            <p className="text-xs text-gray-500">
              Chaque victoire technique → sagesse capitalisable
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-gray-800/50 border border-gray-700/50 text-gray-400 text-sm rounded-lg hover:border-bindu-or/40 hover:text-bindu-or transition-all"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
