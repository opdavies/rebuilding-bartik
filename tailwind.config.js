module.exports = {
  theme: {
    colors: {
      black: {
        default: '#22292f',
        60: 'rgba(0,0,0,.6)',
      },
      blue: {
        1: '#bcdefa',
        2: '#3490dc',
        3: '#2779bd',
      },
      green: {
        1: '#f3faee',
        2: '#cde2c2',
        3: '#77b159',
        4: '#325e1c',
      },
      grey: {
        1: '#f6f6f2',
        2: '#f0f0f0',
        3: '#dae1e7',
        4: '#b8c2cc',
        5: '#8795a1',
        6: '#3d4852',
      },
      transparent: 'transparent',
      white: '#fff',
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
