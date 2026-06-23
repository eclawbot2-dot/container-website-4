import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tomorrowland-style jewel + gold palette
        night: '#160a25', // deep royal night
        night2: '#0e0518', // darkest
        plum: '#2a1342',
        royal: '#3a1d56', // royal purple
        magenta: '#a3246b', // jewel magenta
        emerald: '#0f6b5c', // jewel emerald/teal
        teal: '#1b8a8a',
        ember: '#e2622b', // ember orange
        gold: {
          DEFAULT: '#e0a64b',
          light: '#f7d774',
          deep: '#b9772a',
        },
        cream: '#f6ecd8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        ar: ['var(--font-ar)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      boxShadow: {
        gold: '0 0 28px rgba(224,166,75,0.35)',
        'gold-lg': '0 10px 50px rgba(224,166,75,0.4)',
        ember: '0 0 40px rgba(226,98,43,0.45)',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        emberRise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-90vh) scale(0.4)', opacity: '0' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.55', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.25)' },
        },
        shimmer: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(26px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.18)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        glowPulse: 'glowPulse 4s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
        fadeUp: 'fadeUp 0.9s ease both',
        kenburns: 'kenburns 22s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
