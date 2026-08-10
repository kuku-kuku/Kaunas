/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
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
