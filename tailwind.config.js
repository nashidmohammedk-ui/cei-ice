/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cei: {
          dark: '#064E42',        // Deep Forest Green (#064E42)
          forest: '#064E42',      // Deep Forest Green
          charcoal: '#242321',    // Charcoal Black (#242321)
          surface: '#0A3B33',     // Elevated Forest Surface
          card: '#1B1A18',        // Charcoal Card
          gold: '#C5A46D',        // Champagne Gold (#C5A46D)
          'gold-light': '#E2CA9E', // Light Champagne
          'gold-dark': '#8F6F33',  // Aged Japanese Gold
          cream: '#F3EDE3',       // Warm Cream (#F3EDE3)
          'cream-light': '#FAF7F2',
          'cream-muted': '#D8C8B4',// Soft Beige (#D8C8B4)
          beige: '#D8C8B4',       // Soft Beige
          burgundy: '#8A3038',    // Deep Burgundy (#8A3038)
          vermilion: '#E83B26',   // Selective Vermilion Red Seal
          moss: '#0A5E50',
          border: 'rgba(197, 164, 109, 0.25)',
          'border-strong': 'rgba(197, 164, 109, 0.5)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'Playfair Display', 'serif'],
        sans: ['"Outfit"', '"Plus Jakarta Sans"', 'Montserrat', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #07140E 0%, #171916 50%, #07140E 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #B89753 0%, #E8D5A7 50%, #B89753 100%)',
        'radial-glow': 'radial-gradient(circle at center, rgba(213, 183, 122, 0.12) 0%, transparent 70%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1.5deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
