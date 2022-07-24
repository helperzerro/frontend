/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        300: "300px",
      },
      colors: {
        greenz: "#008000",
        greenwa: "#25D366",
        tema_6: "#FC1267",
        tema_5: "#272e0c",
        tema_4: "#210b32",
        tema_3: "#4a1d78",
        tema_2: "#b4a6ca",
        tema_1: "#c0bbc2",
      },
      height: {
        100: "100vh",
      },
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
