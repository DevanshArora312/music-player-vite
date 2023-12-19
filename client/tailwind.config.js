/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,js}",
    "./src/*.{html,jsx,js}",
  ],
  theme: {
    extend: {
      screens: {
        'lmd': '767px',
        'nh' : '900px',
        'lphone' : '425px'
      },
    },
  },
  plugins: [],
};
