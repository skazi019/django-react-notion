/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '168': '42rem',
      }
    },
  },
  plugins: [],
}
