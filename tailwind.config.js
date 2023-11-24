/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#364253",
            secondary: "#6A7BF0",
         },
      },
   },
   plugins: [],
};
