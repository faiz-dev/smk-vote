/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#027314',
        secondary: '#c9d7cb',
        surface: '#f8f8f8',
        surface2: '#ffffff',
        textgray: '#575757',
        textblack: '#001403',
        error: '#b00020',
      },
      borderRadius: {
        DEFAULT: '0.35rem'
      },
      fontSize: {
        sm: '12.8pt'
      }
    },
  },
  plugins: [],
}
