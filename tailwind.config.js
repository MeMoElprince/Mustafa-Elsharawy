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
          '500' : '#ffffff',
          '600' : '#0e1a30',
          '700' : '#16a34a',
          '800' : '#000000',
        },
        'pallete2': {
          '100' : '#06141B',
          '200' : '#253745',
          '300' : '#4A5C6A',
          '400' : '#CCD0CF',
          '500' : '#ffffff',
          '600' : '#11212D',
          '700' : '#06141B',
          '800' : '#000000',
        }
        // CCD0CF
        // 9BABAB
        // 4A5C6A
        // 253745
        // 11212D
        // 06141B
        // 100 -> 
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
  darkMode: 'class',
}
