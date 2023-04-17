const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.html', './src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        'purple': {
          100: '#F3F1FE',
          200: '#C3C1D7',
          400: '#745CF1',
          500: '#3F25C8',
          800: '#35344C',
        }
      },
      spacing: {
        '48.5': '194px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
