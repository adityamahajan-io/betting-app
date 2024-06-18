/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      dropShadow: {
        betCardGlow: [
          "0 0px 10px rgba(255, 255, 255, 0)",
          "0 5px 15px rgba(255, 255, 255, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
