import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans:    ['var(--font-sans)',    'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      colors: {
        black:    '#030305',
        deep:     '#07080f',
        dark:     '#0d0e18',
        surface:  '#111220',
        surface2: '#161828',
        gold:     '#c8a761',
        'gold-light': '#e8c87c',
        navy:     '#1a2d5a',
        'navy-mid': '#1e3a7a',
        cyan:     '#3a7bd5',
        silver:   '#a8aab8',
        muted:    '#606270',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold':   'linear-gradient(135deg, #c8a761 0%, #e8c87c 50%, #c8a761 100%)',
      },
      animation: {
        'spin-slow':   'spin 20s linear infinite',
        'pulse-slow':  'pulse 4s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'scroll-line': 'scroll-line 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        shimmer: {
          from: { backgroundPosition: '0% center' },
          to:   { backgroundPosition: '200% center' },
        },
        'scroll-line': {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%':  { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      boxShadow: {
        'gold':   '0 0 40px rgba(200,167,97,0.2)',
        'navy':   '0 0 40px rgba(30,58,122,0.3)',
        'glass':  '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,167,97,0.1)',
      },
    },
  },
  plugins: [],
}

export default config
