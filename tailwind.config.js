/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0693f0',
        lightBgColor: '#f4f5ff',
      },
    },
  },
  plugins: [],
};
