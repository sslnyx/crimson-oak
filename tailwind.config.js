/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: '100%',
        "2xl": '1200px',
      },
    },
    extend: {
      colors: {
        primary: "#ac3336",
        "primary-dark": "#321616",
        gray: "#f1f1f1",
        brown: "#ded6ca"
      }
    },
  },
  plugins: [],
}

