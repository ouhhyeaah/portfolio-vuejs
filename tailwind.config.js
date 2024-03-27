/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-mode': '#16181c',
        'brown-color': '#743308' ,
      }
    },
  },
  plugins: [],
}

