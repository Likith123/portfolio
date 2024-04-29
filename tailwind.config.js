/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f4f5ff",
          400: "#f4f5ff",
          700: "#0693f0",
        },
      },
    },
  },
  plugins: [],
};
