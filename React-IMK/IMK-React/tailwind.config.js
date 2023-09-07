/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif'],
        Figtree: ['Figtree', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
});

