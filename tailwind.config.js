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
        tertiaryBg: "#363636",
        primaryText: "#ff6392",
        secondaryText: "#af9c70",
        tertiaryText: "#feb33a",
      },
      fontSize: {
        40: "2.5rem",
        80: "5rem",
        90: "5.625rem",
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
