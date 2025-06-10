/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#4e2a84', // Dark purple from Medicaps University
          'light': '#6c3cb3',
        },
        'secondary': '#e31b6d', // Pink accent color
        'gradient-start': '#6a11cb', // Gradient start color
        'gradient-end': '#e31b6d', // Gradient end color
        'red-map': '#d9534f', // Red color used in the map
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 