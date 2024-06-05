/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-bone-toCard": "#F7F3ED",
        "custom-bone-toDetail": "#F2EDE6",
      },
      backgroundImage: {
        "home-backgroung": "url('/src/assets/fondo1.png')",
        "home-backgroung-movil": "url('/src/assets/fondo2.png')",
      },
    },
  },
  plugins: [],
};
