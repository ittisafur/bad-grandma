module.exports = {
  // mode: "jit",
  // purge: ["./src/**/*.css", "./**/*.html"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBg: "#505050",
        secondaryBg: "#ffe45e",
        primaryText: "#ff6392",
        secondaryText: "#af9c70",
      },
      fontSize: {
        40: "2.5rem",
        80: "5rem",
      },
      backgroundImage: {
        banner: "url('/assets/images/banner.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
