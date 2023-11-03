/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background:'#303746',
          text: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}

