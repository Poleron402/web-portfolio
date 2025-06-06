/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        monoton: ['Monoton', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        ultra: ['Ultra', 'sans-serif']
      }
    },
  },
  plugins: [],
}

