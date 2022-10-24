/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{jsx,tsx}",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5840ec',
        'background-slate': {
          DEFAULT: '#f9f9fb',
          'dark': '#EEEDF2'
        }
      }
    },
  },
  plugins: [],
}
