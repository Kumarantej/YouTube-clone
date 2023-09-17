/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "aliceblue",
          200: "#f1f1f1",
          300: "#717171;",
          400: "#aaa",
          500: "#9e9e9e",
          600: "rgba(255, 255, 255, 0.1)",
          700: "#303030",
          800: "#0f0f0f",
          900: "#212121",
        },
      },
      fontFamily: {
        sans: [
          "Inter var, sans-serif",
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },
    },
  },
  plugins: [],
};
