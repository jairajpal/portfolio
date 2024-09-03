/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust the path according to your project structure
    "./public/**/*.html", // Include HTML files in the public folder
  ],
  theme: {
    extend: {
      // Custom theme extensions (colors, spacing, etc.)
    },
  },
  plugins: [
    // Add any Tailwind plugins here
  ],
};
