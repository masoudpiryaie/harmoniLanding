/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#02161d",
          light: "#6cb2eb",
          dark: "#2779bd",
        },
        yellow: "#FFD62F",
        red: "#F50148",
        lightBlack: "#010F14",
      },
      fontFamily: {
        custom: ["iranyekan"],
      },
    },
  },
  plugins: [],
};
