/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FCF8F8",
          100: "#F5E6E6",
          200: "#E8CDCD",
          300: "#D4A8A3",
          400: "#C08E89",
          500: "#b16267",
          600: "#7A424B",
          700: "#693941",
          800: "#583037",
          900: "#47272D",
          950: "#361E23"
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', "sans-serif"],
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
