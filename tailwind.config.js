/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16ABF8",
        indicator: {
          high: "#F8A541",
          medium: "#00A790",
          low: "#428BC1",
          very: {
            high: "#ED4C5C",
            low: "#8942C1",
          },
        },
      },
    },
  },
  plugins: [],
};
