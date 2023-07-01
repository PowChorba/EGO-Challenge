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
        high: '350px'
      },
      height: {
        200: '200px',
        intro: '340px',
        footer: '50px',
        menu: '858px'
      },
      minHeight: {
        carImg: '225px',
      },
      backgroundColor: {
        personalGrey: '#F7F7F7',
        arrowDiv: 'rgba(255, 255, 255, 0.56)'
      },
      colors: {
        whiteGrey: '#373737',
        navText: '#191919',
        arrow: 'rgba(71, 71, 71, 1)'
      },
      fontSize: {
        carH: '28px'
      }
    },
  },
  plugins: [],
}
