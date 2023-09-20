/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/*"],
  theme: {
    extend: {},
  },
  plugins: [require("kutty")],
}

