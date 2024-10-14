/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(23deg, rgba(2,0,36,1) 0%, rgba(5,3,56,1) 26%, rgba(21,48,128,1) 100%)',
      },
    },
  },
  plugins: [],
};
