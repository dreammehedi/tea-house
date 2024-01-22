/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1140px'
    // },
    container:{
      center: 'true',
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem'
      }
    },
    extend: {
      colors:{
        black: '#1C1C1C',
        gray: '#777',
        'btn-start': '#F00',
        'btn-end': '#FF8938 '
      },
      fontFamily:{
        primary: 'Manrope',
        secondary: 'Poppins',
      }, 
      boxShadow:{
        ratings: '0px 7px 50px 0px rgba(0, 0, 0, 0.06)'
      },
      backgroundColor:{
        'great-tea-2': 'rgba(230, 166, 35, 0.10)',
        'great-tea-3': 'rgba(87, 118, 57, 0.10)',
      },
      backgroundImage:{
        'btn-bg': 'linear-gradient(270deg, #F00 0%, #FF8938 100%)',
        'feature-product': 'linear-gradient(180deg, #F4F4F4 0%, rgba(244, 244, 244, 0.00) 100%)',
        'great-tea-1': 'linear-gradient(90deg, #e1b96f94 50%, rgba(255, 255, 255, 0.00) 100%)',
        'great-tea-4': 'linear-gradient(90deg, #D9D9D9 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
    },
  },
  plugins: [],
}

