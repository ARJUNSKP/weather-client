/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      filter: {
        "grayscale-30": "grayscale(30%)",
      },
      colors: {
        "custom-yellow": "rgba(215, 199, 82, 0.72)",
      },
    },
  },
  plugins: [],
};
