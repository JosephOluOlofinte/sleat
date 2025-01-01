/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'titleFont': ['Be Vietnam Pro'],
        'bodyFont': ['Figtree'],
      },
      colors: {
        'bgBlue': '#12283A',
        'titleBlue': '#008BC2',
        'buttonGreen': '#33A653',
        'textBlue': '#9DD3FF',
        'boxBG': '#01041D'
      },

      backgroundImage: {
        'heroBg': "url('/src/assets/images/calculatey.jpg')"
      }
    },
  },
  plugins: [],
}