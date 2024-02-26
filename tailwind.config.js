/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      screens: {
        'mxs': {'max': '550px'}
      },
      spacing: {
        '100': '540px'
      }
    },
  },
  plugins: [],
}

