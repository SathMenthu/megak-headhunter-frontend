/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
