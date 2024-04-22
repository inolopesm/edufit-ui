import edufit from "./src/main.js";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.html"],
  theme: { extend: {} },
  plugins: [edufit()],
};
