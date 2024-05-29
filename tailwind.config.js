/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#246be8",
          100: "#e6f2fe",
          500: "#246be8",
          600: "#1d4dab",
          900: "#2b2b4f",
        },
        secondary: {
          DEFAULT: "#FFD43B",
        },
        accent: {
          DEFAULT: "#FFD43B",
        },
      },
    },
  },

  plugins: [],
};
