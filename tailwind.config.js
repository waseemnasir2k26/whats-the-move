/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#00273d',
          50:  '#e6edf2',
          100: '#ccdae5',
          200: '#99b4ca',
          300: '#668fb0',
          400: '#336a95',
          500: '#00456b',
          600: '#003855',
          700: '#002b42',
          800: '#00273d',
          900: '#001a2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
}
