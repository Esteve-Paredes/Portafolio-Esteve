/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-bone-main": "#EFEBE3",
        "custom-bone-toCard": "#E2DBCE",
        "custom-bone-toDetail": "#E0D6C5",
      },
      backgroundImage: {
        "home-backgroung": "url('/src/assets/fondo1.png')",
        "home-backgroung-movil": "url('/src/assets/fondo2.png')",
      },
    },
  },
  plugins: [],
};
