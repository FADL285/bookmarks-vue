/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {},
    plugins: [require("@tailwindcss/forms")]
  }
}
