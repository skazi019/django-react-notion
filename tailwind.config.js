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
        'xs': '16rem',
        'sm': '32rem',
        'md': '48rem',
        'lg': '64rem',
        'xl': '80rem',
      }
    },
  },
  plugins: [],
}
