/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#1C1F18",
        "custom-beige": "#3D3729",
      },
      backgroundImage: {
        "home-backgroung": "url('/src/assets/teclado-fondo.jpg')",
      },
    },
  },
  plugins: [],
};
