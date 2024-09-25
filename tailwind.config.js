/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
  
      'xl': {'max': '1030px'},
      // => @media (max-width: 1279px) { ... }
  
      '2lg': {'max': '990px'},
      // => @media (max-width: 1023px) { ... }

      'lg': {'max': '930px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '800px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],

}