/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        main: '#ff428e',
        darkC: '#191b32',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        kolker: "'Kolker Brush', cursive",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
