module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-img' : "url('../public/bluepaint.jpg')",
        'smoke-img' : "url('../public/background2.jpg')",
        'flower-img' : "url('../public/background1.jpg')",
        'paint-img' : "url('../public/background3.jpg')",
        'cloud-img' : "url('../public/background4.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
