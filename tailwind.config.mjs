/** @type {import('tailwindcss').Config} */
const {colors : defaultColors} = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Make sure this includes the src folder
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        'primary' : '#071D2C',
        'main' : '#031322',
        'accent' : '#446171',
        'accent-secondary' : '#0A2737',
      },
      backgroundImage : {
        "accent-gradient" : 'linear-gradient(0deg, rgba(254, 137, 31 , 1 ) 0%, rgba(254, 182, 35 ,1 ) 100% )'
      },
      fontFamily: {
        display : 'var(--heading-font)',
      }
    },
  },
  plugins: [],
};
