/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
      fontSize: {
        para: "18px",
        header: "36px", // Custom font size for headings
      },
      fontFamily: {
        mulish: ["Mulish", "sans"],
        poppins: ["Poppins", "sans"],
        slabo: ["Slabo"],
        acorn: ["acorn", "sans"],
        para: ["Pathway Extreme", "sans"],
      },
    },
  },
  plugins: [],
};
