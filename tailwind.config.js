/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        900: withOpacity("--color-primary-900"),
        800: withOpacity("--color-primary-800"),
        700: withOpacity("--color-primary-700"),
        600: withOpacity("--color-primary-600"),
        500: withOpacity("--color-primary-500"),
        400: withOpacity("--color-primary-400"),
        300: withOpacity("--color-primary-300"),
        200: withOpacity("--color-primary-200"),
        100: withOpacity("--color-primary-100"),
      },
      secondary: {
        900: withOpacity("--color-secondary-900"),
        800: withOpacity("--color-secondary-800"),
        700: withOpacity("--color-secondary-700"),
        600: withOpacity("--color-secondary-600"),
        500: withOpacity("--color-secondary-500"),
        400: withOpacity("--color-secondary-400"),
        300: withOpacity("--color-secondary-300"),
        200: withOpacity("--color-secondary-200"),
        100: withOpacity("--color-secondary-100"),
      },
      orange: {
        950: 'rgb(249, 181, 0)'
      },
      backgroundapp: withOpacity("--background-app-rgb"),
      red: {
        300: withOpacity("--color-red-300"),
        500: withOpacity("--color-red-500"),
      },
      white: withOpacity("--color-white")
    }
  },
  plugins: [],
}