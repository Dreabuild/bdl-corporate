/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gray-gradient":
          "linear-gradient(90deg, rgba(217, 217, 217, 0.00) 0%, rgba(0, 0, 0, 0.6) 70%)",
      },
    },
  },
  plugins: [],
};
