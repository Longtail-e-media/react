/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      fontPopins: ["Poppins, sans-serif"],
    },
    extend: {
      colors: {
        defaultcolor: "#FFA920",
        defaultgrey: "#D9D9D9",
        defaultyellow: "#FFF5E0",
      },
    },
  },
  plugins: [],
};
