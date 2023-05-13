/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundSize: {
      visible3: "100% 3px",
      invisible0: "0% 3px"
    },
    colors: {
      primary: "#5DB7DE",
      secondary: "#EAC435"
    }
  },
};
export const plugins = [];

