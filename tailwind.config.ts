import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // Enable dark mode via class strategy
  darkMode: 'class',

  theme: {
    extend: {
      // ─── Brand Colors ──────────────────────────────────────────────
      colors: {
        // Deep warm blacks for backgrounds
        obsidian: {
          950: '#070503',
          900: '#0A0804',
          800: '#110E07',
          700: '#1A160A',
          600: '#241F0F',
        },
        // Signature gold palette
        gold: {
          50: '#FDFAEF',
          100: '#FAF3D8',
          200: '#F5E6C3',
          300: '#EDD394',
          400: '#E4BB5C',
          500: '#D4AF37', // Primary brand gold
          600: '#B8860B', // Deep gold
          700: '#9A6E09',
          800: '#7B5607',
          900: '#5C3F04',
        },
        // Warm cream tones for text
        cream: {
          50: '#FEFDFB',
          100: '#FDF9F3',
          200: '#F8F0E3',
          300: '#F0E6D3',
          400: '#E5D4B8',
          500: '#D4BC96',
          600: '#B89A72',
        },
        // Copper/bronze accents
        copper: {
          400: '#C87941',
          500: '#B5682E',
          600: '#9E5520',
        },
        // Sage for subtle accents
        sage: {
          400: '#7A8C6E',
          500: '#637558',
        },
      },

      // ─── Typography ────────────────────────────────────────────────
      fontFamily: {
        // Arabic display + body
        amiri: ['var(--font-amiri)', 'serif'],
        noto: ['var(--font-noto-arabic)', 'sans-serif'],
        // English display
        cormorant: ['var(--font-cormorant)', 'serif'],
        // English body / UI
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },

      fontSize: {
        'display-2xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05' }],
        'display-xl': ['clamp(2.25rem, 6vw, 4.5rem)', { lineHeight: '1.1' }],
        'display-lg': ['clamp(1.875rem, 4vw, 3rem)', { lineHeight: '1.15' }],
      },

      // ─── Spacing ───────────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '128': '32rem',
        '144': '36rem',
      },

      // ─── Animations ────────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-up-delay-1': 'fade-up 0.7s 0.15s ease forwards',
        'fade-up-delay-2': 'fade-up 0.7s 0.3s ease forwards',
        'fade-up-delay-3': 'fade-up 0.7s 0.45s ease forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'scale-in': 'scale-in 0.5s ease forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        marquee: 'marquee 30s linear infinite',
      },

      // ─── Background Images ─────────────────────────────────────────
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #D4AF37 0%, #B8860B 50%, #D4AF37 100%)',
        'gold-shimmer':
          'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
        'dark-gradient':
          'linear-gradient(180deg, #0A0804 0%, #110E07 50%, #0A0804 100%)',
        'radial-gold':
          'radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)',
      },

      // ─── Box Shadows ───────────────────────────────────────────────
      boxShadow: {
        gold: '0 0 40px rgba(212, 175, 55, 0.2)',
        'gold-sm': '0 0 20px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 0 80px rgba(212, 175, 55, 0.25)',
        'inner-gold': 'inset 0 0 40px rgba(212, 175, 55, 0.05)',
      },

      // ─── Border Radius ─────────────────────────────────────────────
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ─── Screens ───────────────────────────────────────────────────
      screens: {
        xs: '475px',
      },

      // ─── Z-Index ───────────────────────────────────────────────────
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // ─── Transition ────────────────────────────────────────────────
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },

  plugins: [],
};

export default config;
