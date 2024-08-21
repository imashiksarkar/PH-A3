/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'gray-custom-600': '#737373',
        'gray-custom-800': '#494949',
        'gray-custom-100': '#E9E9E9',
        'lime-custom-300': '#ABEF5F',
        'gray-custom-900': '#212121',
        'lime-custom-100': '#D4F7AE',
      },
    },
  },
  // plugins: [],
}
