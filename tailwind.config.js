/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'IBM Plex Sans Arabic', 'sans-serif'],
        display: ['Tajawal', 'sans-serif'],
        mono: ['IBM Plex Sans Arabic', 'monospace'],
      },
      colors: {
        cyber: {
          50: '#e8f7ff',
          100: '#c5eeff',
          200: '#8ae0ff',
          300: '#46ccff',
          400: '#12b5ff',
          500: '#0099f0',
          600: '#0078c2',
          700: '#005e9c',
          800: '#004d7e',
          900: '#003e66',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        success: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        dark: {
          50: '#aeb8c4',
          100: '#8a96a6',
          200: '#5c6878',
          300: '#3a4452',
          400: '#222a36',
          500: '#161c26',
          600: '#0f141c',
          700: '#0a0e14',
          800: '#070b11',
          900: '#04070b',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'cyber-gradient': 'linear-gradient(135deg, #0099f0 0%, #06b6d4 100%)',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(18,181,255,0.18), transparent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(18, 181, 255, 0.3)',
        'glow-cyan-lg': '0 0 60px rgba(18, 181, 255, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
