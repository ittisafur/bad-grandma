module.exports = {
  mode: "jit",
  purge: ["./src/**/*.css", "./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#040404",
        secondary: "#2b2b2b",
        tertiary: "#1c1c1c",
        mintDot: "#dbb9c3",
        rantPara: "#fefefe",
        rantGasFees: "#95d0f7",
        rantLastPara: "#b4bff1",
        bgColor: "#323e72",
        bgColorSecondary: "#6a2861",
        borderBot: "#a7a6a6",
      },
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('/assets/images/cover.png')",
        collection: "url('/assets/images/collection.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
