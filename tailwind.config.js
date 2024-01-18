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
      screens: {
        '3xl': '1740px',
      },
    },
  },
  plugins: [
    
    require('postcss-import'),
    require('textify.js')
  ],
  // safelist: [
  //   '!duration-[0ms]',
  //   '!delay-[0ms]',
  //   'html.js :where([class*="taos:"]:not(.taos-init))'
  // ]
}

