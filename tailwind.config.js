/** @type {import('tailwindcss').Config} \*/
export default {
  content: [
  "./index.html",
  "./src/**/\*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      "c-1": "var(--c-1)",
      "c-2": "var(--c-2)",
      "c-3": "var(--c-3)",
      "c-4": "var(--c-4)",
      "c-5": "var(--c-5)",
      "c-7": "var(--c-7)",
    },
    fontFamily: {
      "menu-item-default": "var(--menu-item-default-font-family)",
      "menu-item-underline": "var(--menu-item-underline-font-family)",
      "button-small-default": "var(--button-small-default-font-family)",
      "heading-1-type-1-default": "var(--heading-1-default-font-family)",
      "heading-3-type-1-default": "var(--heading-3-default-font-family)",
      "heading-4-type-1-default": "var(--heading-4-default-font-family)",
      "heading-6-type-1-default": "var(--heading-6-type-1-default-font-family)",
      "paragraph-1-body-1-underline": "var(--paragraph-1-body-1-underline-font-family)",
      "paragraph-1-body-1-default": "var(--paragraph-1-body-1-default-font-family)",
      "paragraph-1-small-1-default": "var(--paragraph-1-small-1-default-font-family)",
      "paragraph-1-small-1-underline": "var(--paragraph-1-small-1-underline-font-family)",
    },
  },
  },
  plugins: [],
  };