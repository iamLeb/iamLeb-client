/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#631fee',
          dark: '#500bdd'
        }
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, // Adjust to match the width of one full set of images
        },
      },
      animation: {
        scroll: 'scroll 60s linear infinite', // Increase duration to slow down the scroll
      },
    },
  },
  variants: {},
  plugins: [],
}