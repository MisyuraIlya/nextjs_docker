/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black: twColors.black,
  white: twColors.white,
  primary:'#FF9902',
  secondary:'#161D25',
  'bg-color':'#F2F2F5',
  red: twColors.red[400]
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    extend: {
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5xl': '1.5rem',
        '2xl': '1.725rem',
        '3xl': '2.155rem',
        '4x1': '2.58rem',
        '5x1': '3.45rem',
        '6x1': '4.3rem',
        '7x1': '5.17rem',
        '8x1': '6.9rem',
        '9x1': '9.2rem'
      },
      keyFrames: {
        animationOpacitty: {
          from: { opacity: 0.2 },
          to: { opacity: 1}
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity:0.3
          },
          '100%': {
            opacity:1,
            transform: 'sacle(1)'
          }
        }
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out'
      }
    },
  },
  plugins: [],
}
