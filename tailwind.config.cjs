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
        21: '5.7rem',
        13: '2.8rem',
        16.5: '4.5rem',
        81: '530px',
      }
    }
  },
  plugins: [],
}
