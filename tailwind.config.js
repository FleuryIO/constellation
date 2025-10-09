/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bindu: {
          rouge: '#8B0000',
          or: '#D4AF37',
          indigo: '#4B0082',
          cyan: '#00CED1',
          argent: '#C0C0C0',
          feu: '#B22222',
          vermillon: '#E34234',
          anahata: '#4CAF50', // Vert chakra cœur
        },
        vide: '#F5F5DC',
      },
      fontFamily: {
        sanskrit: ['"Noto Sans Devanagari"', 'serif'],
        contemplative: ['"Crimson Text"', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
