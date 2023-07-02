/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        10:'10%',
        75: '75%',
        80: '80%',
        90: '90%',
        high: '350px',
        menuW: '390px'
      },
      height: {
        navH: '70px',
        200: '200px',
        intro: '340px',
        footer: '50px',
        menu: '858px',
        featureDiv: '410px',
        carDiv: '292px',
      },
      minHeight: {
        carImg: '225px',
        sectionCar: '850px'
      },
      backgroundColor: {
        personalGrey: '#F7F7F7',
        arrowDiv: 'rgba(255, 255, 255, 0.56)',
        menu: 'rgba(239, 238, 239, 1)'
      },
      colors: {
        whiteGrey: '#373737',
        navText: '#191919',
        arrow: 'rgba(71, 71, 71, 1)',
        tituloResponsive: 'rgba(25, 25, 25, 1)',
        titleHover: 'rgba(235, 10, 30, 1)'
      },
      fontSize: {
        carH: '28px'
      },
      margin: {
        carHigh: '125px'
      },
      maxWidth: {
        carDivW: '268px'
      },
      
    },
  },
  plugins: [],
}
