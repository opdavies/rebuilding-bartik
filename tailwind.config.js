module.exports = {
  theme: {
    colors: {
      black: {
        default: '#22292f',
        60: 'rgba(0,0,0,.6)',
      },
      blue: {
        100: '#bcdefa',
        200: '#3490dc',
        300: '#2779bd',
      },
      green: {
        100: '#f3faee',
        200: '#cde2c2',
        300: '#77b159',
        400: '#325e1c',
      },
      grey: {
        100: '#f6f6f2',
        200: '#f0f0f0',
        300: '#dae1e7',
        400: '#b8c2cc',
        500: '#8795a1',
        600: '#3d4852',
      },
      transparent: 'transparent',
      white: '#fff',
    },
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
      },
      fontSize: {
        '3xl': '1.75rem',
      },
      maxWidth: {
        '6xl': '80rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-skip-link')(),
  ]
}
