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
        quaternaryBg: "#5aa9e6",
        quinaryBg: "#7fc8f8",
        senaryBg: "#feeb8b",
        septenaryBg: "#c7c8c8",
        primaryText: "#ff6392",
        secondaryText: "#af9c70",
        tertiaryText: "#feb33a",
        quaternaryText: "#3d5a80",
        quinaryText: "#242124",
        senaryText: "#a5f057",
        septenaryText: "#cbc093",
        octonaryText: "#323332",
        nonaryText: "#484848",
        denaryText: "#e6d166",
        eleventhTest: "#212121",
        primaryBorder: "#a3ee54",
      },
      fontSize: {
        21: "1.3125rem",
        40: "2.5rem",
        80: "5rem",
        90: "5.625rem",
      },
      lineHeight: {
        30: "1.875rem",
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
