/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LeagueSpartan: ['League Spartan', 'sans-serif'],
      },
      colors: {
        'primary': "#135091",
        "secondary": "#FF6452",
      },
    },
  },
  plugins: [require("daisyui")],
}
