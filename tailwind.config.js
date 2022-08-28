/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '750px'},
      'md': {'max': '950px'},
      'lg': {'max': '1260px'},

    },
  },
  plugins: [],
}
