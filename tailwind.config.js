/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "zenith-orange": "var(--color-primary)",
        "zenith-dark": "var(--color-dark)",
      },
    },
  },
  plugins: [],
};
