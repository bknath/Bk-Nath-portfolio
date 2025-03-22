/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Enables class-based dark mode
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
            oleo: ["Oleo Script", "cursive"],
            montserrat: ["Montserrat"],
            viga: ["Viga"],
        },
      },
    },
    plugins: [],
  };
  