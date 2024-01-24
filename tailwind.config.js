/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        para: "18px",
        header: "36px", // Custom font size for headings
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        header: ["Slabo"],
        acorn: ["acorn", "sans"],
        para: ["Pathway Extreme", "sans"],
      },
    },
  },
  plugins: [],
};
