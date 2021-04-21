module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lora: ["Lora", "serif"],
      roboto: ["Roboto", "sans-serif"],
      roboMono: ["Roboto Mono", "monospace"],
    },
    screens: {
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { min: "1280px" },
      "2xl": { max: "1536px" },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
