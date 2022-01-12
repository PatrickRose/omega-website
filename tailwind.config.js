const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  safelist: ['__next'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        omega: {
          light: "#88C9EC",
          DEFAULT: "#2291CD",
          dark: "#124E6E"
        }
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      minHeight: {
        hero: '12rem'
      },
      animation: {
        placeholder: 'placeholder 2s ease-in-out infinite'
      },
      keyframes: {
        placeholder: {
          '0%, 100%': { opacity: 0.25},
          '50%': { opacity: 0.5}
        }
      },
      transitionProperty: {
        'link': 'opacity, color, background-color, border-color, text-decoration-color'
      }
    },
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
  ],
}
