/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        luxury: ['"Cinzel Decorative"', 'serif'], // Premium luxury font
      },
      colors: {
        gold: '#D4AF37', // Elegant gold color
        dark: '#1A1A1A', // Deep black for contrast
      },
    },
  },
  plugins: [],
};
