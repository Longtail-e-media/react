/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Work Sans", "sans-serif"],
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.125rem",
        sm: "2.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
