/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Make sure to add this
    theme: {
      extend: {
        fontFamily: {
          boldonse: ['Boldonse', 'sans-serif'], // Quotation marks are optional
        },
      },
    },
    plugins: [],
  };
  