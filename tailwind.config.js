/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'white-main': '#ededed',
        'red-main': '#ff2323',
        'black-main': '#111111',
        'blue-tidal': '#0ff',
        'green-spotify': '#1db954',
        'red-apple': '#fc3c44'
      }
    },
  },
  plugins: [],
}

