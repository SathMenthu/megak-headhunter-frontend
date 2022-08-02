/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        HRwhite: '#F7F7F7',
        HRblack: {
          DEFAULT: '#1E1E1F',
          100: '#292A2B',
          200: '#222224',
        },
        HRred: {
          DEFAULT: '#E02735',
        },
        HRgrey: {
          DEFAULT: '#CFCFCF'},
          light: '#CFCFCF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
