/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".src/**/*.{html, css, js, jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#00adee",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        "dark-blue": "#003d77",
        "dark-grey": "#757575",
        "opaque": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainblue": "linear-gradient(70 deg, #00adee 13%, #003d77 85%)",
      }),
      fontFamily: {
        OpenSans: ["OpenSans", "sans-serif"],
        PlayFair: ["PlayFair", "serif"]
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px"
      }
    }
  },
  plugins: [],
}
