const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
    ],
  darkMode: false, // or 'media' or 'class'
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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
  ],
}
