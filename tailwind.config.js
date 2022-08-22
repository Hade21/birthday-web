/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lovers-quarrel": ["Lovers Quarrel", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        arrow: "url('./assets/arrow-down-solid.svg')",
      },
      animation: {
        spin: "spin 1s ease-in-out infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
