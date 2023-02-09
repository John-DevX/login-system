/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      spacing:{
        18: '3.1rem',
        34: '8.5rem',
        25: '6.5rem',
        19: '4.3rem',
      }
    }
  },
  plugins: [],
}
