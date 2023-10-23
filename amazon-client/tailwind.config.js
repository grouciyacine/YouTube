/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mini':'150px',
        'mini1':'379px'
      }
    },
  },
  plugins: [],
}