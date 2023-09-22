/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#58436c",
        gold: "#fed577",
      },
      spacing: {},
      fontFamily: {
        americancheese: "AmericanCheese",
        inter: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      xl: "20px",
      "31xl": "50px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
