import defaultTheme from "tailwindcss/defaultTheme.js";
import edufit from "./src/main.js";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.html"],
  plugins: [edufit()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
