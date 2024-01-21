/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1140px'
    },
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
      }
    },
  },
  plugins: [],
}

