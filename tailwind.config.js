/** @type {import('tailwindcss').Config} */
const customTheme = require('./theme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
      extend: {
        fontFamily: customTheme.fontFamily,
        colors: customTheme.colors,
      },
  },
  plugins: [],
}
