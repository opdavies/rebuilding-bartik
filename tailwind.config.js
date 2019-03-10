module.exports = {
  theme: {
    colors: {
      'black': '#22292f',
      'black-60': 'rgba(0, 0, 0, .6)',
      'blue': '#3490dc',
      'blue-dark': '#2779bd',
      'blue-light': '#bcdefa',
      'green': '#77B159',
      'green-dark': '#325E1C',
      'green-light': '#CDE2C2',
      'green-lighter': '#F3FAEE',
      'grey': '#b8c2cc',
      'grey-dark': '#8795a1',
      'grey-darkest': '#3d4852',
      'grey-light': '#dae1e7',
      'grey-lighter': '#f0f0f0',
      'grey-lightest': '#F6F6F2',
      'transparent': 'transparent',
      'white': '#ffffff',
    },
    extend: {
      fontSize: {
        '3xl': '1.75rem',
      },
      maxWidth: {
        '6xl': '80rem',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugins/container')({
      center: true,
      padding: '1rem',
    }),
    require('tailwindcss-skip-link')(),
  ]
}
