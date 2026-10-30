/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F8FAFC',
          dark: '#0B0F19',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#111827',
          glassDark: 'rgba(17, 24, 39, 0.75)',
          glassLight: 'rgba(255, 255, 255, 0.85)',
        },
        primary: {
          DEFAULT: '#38BDF8',
          light: '#0284C7',
          dark: '#38BDF8',
        },
        secondary: {
          DEFAULT: '#818CF8',
          light: '#6366F1',
          dark: '#818CF8',
        },
        accent: {
          cyan: '#22D3EE',
          amber: '#F59E0B',
          emerald: '#10B981',
          violet: '#A855F7',
        },
        borderGlass: {
          dark: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(15, 23, 42, 0.08)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Roboto Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

