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
      },
    },
  },
  plugins: [],
};
