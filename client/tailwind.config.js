module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        omega: {
          light: "#88C9EC",
          DEFAULT: "#2291CD",
          dark: "#186691"
        }
      },
      dropShadow: {
        dark: '0 35px 35px rgba(0, 0, 0, 0.25)'
      },
      minHeight: {
        hero: '12rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
