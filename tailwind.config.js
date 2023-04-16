/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./src/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "1fr auto",
      },
      fontFamily: {
        oxgen: ["Oxygen", "sans-serif"],
      },
    },
  },
  plugins: [],
};
