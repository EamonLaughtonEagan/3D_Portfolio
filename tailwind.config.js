/** @type {import('tailwindcss').Config} */
const defaultTheme = {
  primary: "#050816",
  secondary: "#aaa6c3",
  tertiary: "#151030",
  "black-100": "#100d25",
  "black-200": "#090325",
  "white-100": "#f3f3f3",
}
const alternativeTheme = {
  primary: "#1e2124",
  secondary: "#7289da",
  tertiary: "#424549",
  "black-100": "#100d25",
  "black-200": "#090325",
  "white-100": "#f3f3f3",
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1A081C",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        quaternary: "#000000",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg3.png')",
      },
    },
  },
  plugins: [],
};