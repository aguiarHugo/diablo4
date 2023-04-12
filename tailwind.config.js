/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#d0d0d0",
          200: "#a0a0a1",
          300: "#717172",
          400: "#414143",
          500: "#121214",
          600: "#0e0e10",
          700: "#0b0b0c",
          800: "#070708",
          900: "#040404"
        },
        purple: {
          100: "#e6ddfa",
          200: "#cdbcf5",
          300: "#b49aef",
          400: "#9b79ea",
          500: "#8257e5",
          600: "#6846b7",
          700: "#4e3489",
          800: "#34235c",
          900: "#1a112e"
        },
        red: {
          100: "#ebd2d1",
          200: "#d6a5a3",
          300: "#c27876",
          400: "#ad4b48",
          500: "#991e1a",
          600: "#7a1815",
          700: "#5c1210",
          800: "#3d0c0a",
          900: "#1f0605"
        },
        yellow: "#FDCC49"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/home-bg.png')",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

