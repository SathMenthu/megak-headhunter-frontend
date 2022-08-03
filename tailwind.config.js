/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        HRwhite: {
          DEFAULT: '#F7F7F7',
        },
        HRblue: {
          DEFAULT: '#0b8bd4',
        },
        HRblack: {
          DEFAULT: '#1E1E1F',
          100: '#202122',
          200: '#222224',
          300: '#222324',
          400: '#292A2B',
        },
        HRred: {
          DEFAULT: '#E02735',
          100: '#C92929',
        },
        HRgrey: {
          DEFAULT: '#CFCFCF',
          100: '#9e9e9e',
          200: '#7E7E7E',
          300: '#666666',
          400: '#4D4D4D',
          500: '#333333',
        },
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  }
}
