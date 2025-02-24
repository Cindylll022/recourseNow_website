/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: {
          100: "#e6faff",
          200:"#d1f6ff",
          300: "#26a9e0",
          400:"#2c3c84",
          500: "#061b37",
          600: "#061324"
        }
      },
      backgroundImage:{
        'herobg':"url(/public/assets/images/headerbg.svg)"
      }
    },
  },
  plugins: [],
}

