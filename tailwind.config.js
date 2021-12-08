module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'teko': ['Teko', 'sans'],
    },    
    extend: {
      backgroundImage: {
        'gradient-prime': 'linear-gradient(to right, #8e0e00, #1f1c18)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
