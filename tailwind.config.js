module.exports = {
  purge: { content: ["./src/**/*.js"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#136207",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};