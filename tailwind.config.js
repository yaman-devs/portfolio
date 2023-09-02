/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // text: "#ffffff",
        // background: "#272640",
        // "primary-button": "#073149",
        // "secondary-button": "#f3f4f6",
        // accent: "#a9a9bc",
        text: "#ecf5fe",
        background: "#01162d",
        primary: "#e1bf9d",
        secondary: "#12263b",
        accent: "#1b81ee",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
