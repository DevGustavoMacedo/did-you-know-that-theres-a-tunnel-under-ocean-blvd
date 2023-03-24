/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#e6b450',
          gray: '#22242d',
          rose: '#ecd8bd',
        },
      },
      fontFamily: {
        primary: 'TuristaGordaNFW01-Regular, sans',
      },
      keyframes: {
        shake: {
          '0%': { 'margin-left': '0' },
          '25%': { 'margin-left': '0.75rem' },
          '50%': { 'margin-left': '0' },
          '75%': { 'margin-left': '-0.75rem' },
          '100%': { 'margin-left': '0' },
        },
      },
      animation: {
        shake: 'shake 0.75s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
