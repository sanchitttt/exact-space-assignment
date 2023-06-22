/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FBFBFD',
        'lightGrey': '#F2F2F2'
      },
      screens: {
        'mobile': '0px',
        'desktop': '768px'
      }
    },
  },
  plugins: [],
}