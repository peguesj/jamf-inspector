/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      "@custom-variant": {
        "dark": {
          "&:is(.dark *)": {
            // Your dark variant styles here
          },
        },
      },
    },
  },
  plugins: [require('./hero.ts')],
};
