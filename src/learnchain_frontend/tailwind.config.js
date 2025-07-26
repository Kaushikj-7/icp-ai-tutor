/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'learnchain-blue': '#2563eb',
        'learnchain-purple': '#7c3aed',
      }
    },
  },
  plugins: [],
}
