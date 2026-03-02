/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        'primary-dark': '#0f0f0f',
        secondary: '#2d2d2d',
        accent: '#D4A574',
        'accent-light': '#e8c49f',
        background: '#faf9f7',
        text: '#1f2937',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
