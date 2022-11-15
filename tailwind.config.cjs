/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#81A9B8',
        secondary: '#4E707C',
        surface: '#f8f8f8',
        surface2: '#ffffff',
        textgray: '#575757',
        textblack: '#001403',
        error: '#b00020',
        button: '#7BA9AC'
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
