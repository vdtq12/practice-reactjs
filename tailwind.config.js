/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'primary': '#216CE3',
      'secondary': '#DDDDDD',
      'background': '#1E1E1E',
      'lightblue': '#ADC9F5',
      'secondbg': '#232F43',
      'thirdbg': '#1C2636',
      'fourthbg': '#EFEFEF',
      'fifthbg': '#31425E',
      'firsttext': '#93A7C8',
      'secondtext': '#FF0A0A',
      'thirdtext': '#FFC60A',
      'accentblue': '#77A5EE',
    },
  },
  plugins: [],
});

