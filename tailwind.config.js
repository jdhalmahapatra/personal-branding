/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#F0F9FF',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          900: '#0C4A6E',
        },
        slate: {
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020817',
        },
        cyan: {
          500: '#06B6D4',
        },
        indigo: {
          600: '#4F46E5',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'blob': 'blob 7s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounceSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}