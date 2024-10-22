/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: "#0057FF",
        blueblack: "#0B0C3A"
      }
    },
  },
  plugins: [],

}
