const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.html', './src/**/*{.svelte,.svg}'],
  theme: {
    extend: {
      boxShadow: {
        'md': '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        'md': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'gray': {
          50: '#FAFAFA',
          100: '#E5E5E4',
        },
        'purple': {
          100: '#F3F1FE',
          200: '#C3C1D7',
          400: '#745CF1',
          500: '#3F25C8',
          700: '#474374',
          800: '#35344C',
        }
      },
      spacing: {
        '10.5': '2.625rem',
        '18': '4.25rem',
        '48.5': '12.125rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'amplitude': ['Amplitude Wide'],
        'amplitude-book': ['Amplitude Wide Book']
      },
    },
  },
  plugins: [],
}
