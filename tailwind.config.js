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
        95: "95vh",
        90: "90vh",
        85: "85vh",
        75: "75vh",
      },
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
    },
    keyframes: {
      transyBawah: {
        "0%": { transform: "translateY(-120px);" },
        "100%": { opacity: 1, transform: "translateY(0);" },
      },
      transyAtas: {
        "0%": { transform: "translateY(520px);" },
        "100%": { opacity: 1, transform: "translateY(0);" },
      },
      transyKanan: {
        "0%": { transform: "translateX(-520px);" },
        "100%": { opacity: 1, transform: "translateX(0);" },
      },
      transyKiri: {
        "0%": { transform: "translateX(520px);" },
        "100%": { opacity: 1, transform: "translateX(0);" },
      },
      zoom: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { opacity: 1, transform: "rotate(360deg)" },
      },
    },
    animation: {
      "trans-y-bawah": "transyBawah 0.6s linear 0.4s forwards",
      "trans-y-atas": "transyAtas 0.6s ease 1.2s forwards",
      "trans-x-kanan": "transyKanan 0.6s ease 1.8s forwards",
      "trans-x-kiri": "transyKiri 1s ease 2.4s forwards",
      "trans-zoom": "zoom 0.6s ease 1.2s forwards",
    },
  },
  plugins: [],
};
