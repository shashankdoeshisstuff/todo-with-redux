/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloud': '#CECBC8',
        'zeus': '#28221E',
        'kabul': '#614E41',
        'shadow': '#7F6951',
      },
    },
  },
  plugins: [],
}

