const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      FirstColor: "#F9F4EC",
      SecondColor: "#201F1F",
      ThirdColor: "#ECEDEE",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      darker: ["Darker Grotesque", "sans-serif"],
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
