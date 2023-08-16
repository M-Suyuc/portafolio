/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        modeDarkTitle: "#E2E8F0",
        modeDarkParrafo: "#94A3B8",
        modeDarkBg: "#0F172A",
      },
      backgroundImage: {
        "green-gradient-radial":
          "radial-gradient(circle, #ccc 0,rgba(161,252,70,0) 71%)",
        "blue-gradient-radial":
          "radial-gradient(circle,#0141ff 0,rgba(161,252,70,0) 71%)",
      },
    },
  },
  plugins: [],
};
// #DB2777
