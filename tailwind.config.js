/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hri: {
          green: {
            DEFAULT: '#132E27', // Deep forest green
            light: '#224d42',
            dark: '#0a1d19',
          },
          gold: {
            DEFAULT: '#B38F4D', // Gold
            light: '#d2af71',
            dark: '#8e6c34',
          },
          cream: {
            DEFAULT: '#FBF9F4', // Cream background
            light: '#FFFFFF',
            dark: '#f1ebd9',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      }
    },
  },
  plugins: [],
}
