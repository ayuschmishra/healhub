/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#e6fffa',
          // Add more teal shades as needed
        },
        lavender: {
          100: '#f3e8ff',
          // Add more lavender shades as needed
        },
      },
    },
  },
  plugins: [],
}