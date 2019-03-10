module.exports = {
  theme: {
    colors: {
      black: {
        default: '#22292f',
        '60': 'rgba(0, 0, 0, .6)',
      },
      blue: {
        '10': '#bcdefa',
        '20': '#3490dc',
        '30': '#2779bd',
      },
      green: {
        '10': '#F3FAEE',
        '20': '#CDE2C2',
        '30': '#77B159',
        '40': '#325E1C',
      },
      grey: {
        '10': '#F6F6F2',
        '20': '#f0f0f0',
        '30': '#dae1e7',
        '40': '#b8c2cc',
        '50': '#8795a1',
        '60': '#3d4852',
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
