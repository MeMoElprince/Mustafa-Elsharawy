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
          '100' : '#171717',
          '200' : '#242424',
          '300' : '#4a4a4a',
          '400' : '#F6B17A',
          '500' : '#fff',
          '600' : '#0e1a30',
          '700' : '#16a34a'


        }
      },
      screens: {
        'mxs': {'max': '630px'}
      },
      spacing: {
        '50' : '300px',
        '75' : '440px',
        '100': '540px',
        '200': '700px',
        '300': '1000px'
      }
    },
  },
  plugins: [],
}
