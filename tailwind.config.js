/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'gray-c-100': '#1C1C1C',
        'gray-c-200': '#737373',
        'gray-c-300': '#494949',
        'gray-c-400': '#E9E9E9',
        'gray-c-500': '#212121',
        'lime-c-200': '#D4F7AE',
        'lime-c-400': '#ABEF5F',
        'pink-c-200': '#E7C1D3',
        'yellow-c-300': '#EFDA6E',
        'teal-c-200': '#A4DAC3',
        'blue-c-400': '#77AAEA',
        'green-c-100': '#EEFCDF',
      },
    },
  },
  // plugins: [],
}
