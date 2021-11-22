module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-img' : "url('/bluepaint.jpg')",
        'smoke-img' : "url('/background2.jpg')",
        'flower-img' : "url('/background1.jpg')",
        'paint-img' : "url('/background3.jpg')",
        'cloud-img' : "url('/background4.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
