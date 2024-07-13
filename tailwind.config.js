/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "red-hat-text": '"Red Hat Text", sans-serif',
      },
      colors: {
        "custom-red": "hsl(14, 86%, 42%)",
        "dark-red": "#952c0c",
        "custom-green": "hsl(159, 69%, 38%)",
        "custom-rose": {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          500: "hsl(12, 20%, 44%)",
        },
      },
    },
  },
  plugins: [],
};
