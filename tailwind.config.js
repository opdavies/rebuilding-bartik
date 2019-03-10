module.exports = {
  theme: {
    colors: {
      black: {
        default: '#22292F',
        '60': 'rgba(0, 0, 0, .6)',
      },
      blue: {
        '10': '#BCDEFA',
        '20': '#3490DC',
        '30': '#2779BD',
      },
      green: {
        '10': '#F3FAEE',
        '20': '#CDE2C2',
        '30': '#77B159',
        '40': '#325E1C',
      },
      grey: {
        '10': '#F6F6F2',
        '20': '#F0F0F0',
        '30': '#DAE1E7',
        '40': '#B8C2CC',
        '50': '#8795A1',
        '60': '#3D4852',
      },
      'transparent': 'transparent',
      'white': '#FFF',
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
