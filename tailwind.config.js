/** @type {import('tailwindcss').Config} */
//
// Design tokens. This file is the single source for color, type, spacing and motion.
// Spacing tokens that need to be fluid (gutter, section rhythm) are CSS variables in
// src/index.css and exposed here so they work as Tailwind utilities (px-gutter, py-section).
//
// Contrast on the #0a0a0a base (WCAG AA needs 4.5:1 for body text):
//   fg 18.1:1 · fg-muted 9.4:1 · fg-subtle 5.9:1 · accent-bright 6.3:1 · accent 3.8:1 (large text / fills only)
//   White text on an accent fill: 5.2:1
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Legacy palette, still used across existing pages
        academy: {
          black: '#0a0a0a',
          dark: '#111111',
          navy: '#0c1a2e',
          blue: '#1a5cff',
          'blue-light': '#3b7aff',
          white: '#f5f5f5',
          gray: '#888888',
          'gray-dark': '#333333',
          'gray-mid': '#555555',
          line: '#222222',
        },
        // Semantic tokens: prefer these in new code
        surface: {
          DEFAULT: '#0a0a0a',
          raised: '#111111',
          sunken: '#060606',
          navy: '#0c1a2e',
        },
        fg: {
          DEFAULT: '#f5f5f5',
          muted: '#b3b3b3',
          subtle: '#8c8c8c',
        },
        accent: {
          DEFAULT: '#1a5cff',
          hover: '#3b7aff',
          bright: '#5b8cff',
        },
        line: {
          DEFAULT: '#222222',
          strong: '#333333',
        },
        success: '#4ade80',
        danger: '#f87171',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid display scale for condensed uppercase headlines
        'display-2xl': ['clamp(3.75rem, 13vw, 11rem)', { lineHeight: '0.85', letterSpacing: '-0.01em' }],
        'display-xl': ['clamp(3rem, 9vw, 7.5rem)', { lineHeight: '0.88', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 5.5rem)', { lineHeight: '0.9', letterSpacing: '-0.005em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '0.95' }],
        'display-sm': ['clamp(1.5rem, 2.8vw, 2.25rem)', { lineHeight: '1' }],
        'stat': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.85', letterSpacing: '-0.01em' }],
        'lead': ['clamp(1.0625rem, 1.6vw, 1.3125rem)', { lineHeight: '1.6' }],
        'eyebrow': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.25em' }],
      },
      spacing: {
        gutter: 'var(--gutter)',
        section: 'var(--section-y)',
        'section-sm': 'var(--section-y-sm)',
        header: 'var(--header-h)',
      },
      maxWidth: {
        content: '80rem',
        prose: '42rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      animation: {
        'line-grow': 'lineGrow 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
