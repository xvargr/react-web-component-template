/** @type {import('tailwindcss').Config} */
import containerPlugin from "@tailwindcss/container-queries";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        retro: {
          text: "#0e1a20",
          light: "#f7f7f7",
          dark: "#264653",
          // navy: "#264653",
          teal: "#2A9D8F",
          sea: "#E9C46A",
          orange: "#F4A261",
          fire: "#E76F51",

          grey: {
            100: "#F8F9FA",
            200: "#E9ECEF",
            300: "#DEE2E6",
            400: "#CED4DA",
            500: "#ADB5BD",
            600: "#6C757D",
            700: "#495057",
            800: "#343A40",
            900: "#212529",
          },
        },
      },
    },
  },
  plugins: [containerPlugin],
};
