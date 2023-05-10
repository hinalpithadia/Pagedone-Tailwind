/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
    './dist/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('postcss-import'),
  ],
}

