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
        "blue-gradient-radial":
          "radial-gradient(circle,#2838D1 0,rgba(161,252,70,0) 71%)",
        "green-gradient-radial":
          "radial-gradient(circle,#E402FF 0,rgba(161,252,70,0) 71%)",
        "yellow-gradient-radial":
          "radial-gradient(circle,#FDFF02 0,rgba(161,252,70,0) 71%)",
      },
    },
  },
  plugins: [],
};
