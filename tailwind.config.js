/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				nav: ["Poppins", "sans"],
				header: ["Slabo"],
				acorn: ["acorn", "sans"],
				para: ["Pathway Extreme", "sans"],
			},
		},
	},

	plugins: [],
};
