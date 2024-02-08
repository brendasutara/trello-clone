/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-p': '#505F79',
        'green-apple': '#5AAC44',
        'green-apple-light': '#61BD4F',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

