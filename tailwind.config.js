/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom, #f5f5f5, #d2d2d2 40%, #d2d2d2 60%, #b4b4b4 80%, #f5f5f5 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #000000, #551545 40%, #551545 60%, #20081a 80%, #000000 100%)',
      },
    },
  },
  plugins: [],
}

