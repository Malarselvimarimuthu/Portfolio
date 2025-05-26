/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bubble: 'bubble 1s ease-out forwards',
      },
      keyframes: {
        bubble: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(0)',
            opacity: '0.7',
          },
          '50%': {
            opacity: '0.5',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(2)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}