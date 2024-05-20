/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-dark": "#1C1F18",
        "custom-beige": "#3D3729",
        "custom-vanilla": "#E2E3E5",
      },
      backgroundImage: {
        "home-backgroung": "url('/src/assets/escritorio2.jpg')",
      },
    },
  },
  plugins: [],
};
