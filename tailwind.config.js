/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors:{
        'pallete': {
          '100' : '#2D3250',
          '200' : '#424769',
          '300' : '#7077A1',
          '400' : '#F6B17A',
        }
      },
      screens: {
        'mxs': {'max': '630px'}
      },
      spacing: {
        '50' : '300px',
        '100': '540px',
        '200': '700px',
        '300': '1000px'
      }
    },
  },
  plugins: [],
}
