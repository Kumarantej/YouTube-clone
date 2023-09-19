/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "aliceblue",
          200: "#FFF",
          300: "#AAAAAA;",
          400: "#ffffff33",
          500: "#383838",
          600: "#323232",
          700: "#212121",
          800: "#181818",
          900: "#121212",
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
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
