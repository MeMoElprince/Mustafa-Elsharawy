/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'pallete': {
          '100': '#0f0f0f',
          '200': '#1a1a1a',
          '300': '#2d2d2d',
          '400': '#F6B17A',
          '500': '#e0e0e0',
          '600': '#888888',
        },
        'pallete2': {
          '100': '#f5f5f5',
          '200': '#ffffff',
          '300': '#e0e0e0',
          '400': '#c05c0a',
          '500': '#1a1a1a',
          '600': '#6b7280',
        }
      },
      screens: {
        'mxs': { 'max': '630px' }
      },
      spacing: {
        '50': '300px',
        '75': '440px',
        '100': '540px',
        '200': '700px',
        '300': '1000px'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
