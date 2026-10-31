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
        // Terminal-dark layered canvas system
        'bg-base': '#0A0B0D',
        'bg-surface': '#101216',
        'bg-elevated': '#16181D',
        'border-subtle': '#1E2127',
        'border-strong': '#2A2E37',
        'text-primary': '#E6E8EB',
        'text-secondary': '#9BA1AC',
        'text-tertiary': '#7B818B',
        'text-disabled': '#454B54',

        // Syntax palette (the only accents)
        'syntax-func': '#82AAFF',
        'syntax-keyword': '#C792EA',
        'syntax-string': '#C3E88D',
        'syntax-number': '#F78C6C',
        'syntax-const': '#FFCB6B',
        'syntax-error': '#F07178',
        'syntax-comment': '#7C8494',

        // Semantic & compatibility mappings
        background: {
          light: '#F7F8FA',
          dark: '#0A0B0D',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#101216',
          glassDark: 'rgba(16, 18, 22, 0.85)',
          glassLight: 'rgba(255, 255, 255, 0.9)',
        },
        primary: {
          DEFAULT: '#82AAFF',
          light: '#0284C7',
          dark: '#82AAFF',
        },
        secondary: {
          DEFAULT: '#C792EA',
          light: '#6366F1',
          dark: '#C792EA',
        },
        borderGlass: {
          dark: '#1E2127',
          light: 'rgba(15, 23, 42, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Roboto Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
