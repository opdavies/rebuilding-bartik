module.exports = {
  theme: {
    colors: {
      black: {
        default: '#22292f',
        '60': 'rgba(0, 0, 0, .6)',
      },
      blue: {
        default: '#3490dc',
        dark: '#2779bd',
        light: '#bcdefa',
      },
      'green': {
        default: '#77B159',
        dark: '#325E1C',
        light: '#CDE2C2',
        lighter: '#F3FAEE',
      },
      'grey': {
        default: '#b8c2cc',
        dark: '#8795a1',
        darkest: '#3d4852',
        light: '#dae1e7',
        lighter: '#f0f0f0',
        lightest: '#F6F6F2',
      },
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
