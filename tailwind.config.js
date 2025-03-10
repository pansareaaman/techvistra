/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0D021F",
        cardBg: "#16122B",
        textPrimary: "#FFFFFF",
        borderPrimary: "#BCB4FF",
        overlayDark: "#1E162E",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}