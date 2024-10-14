/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpDown: {
          '0%, 100%': { transform: 'translateY(100%) scale(0.9)', opacity: '0' },
          '50%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
      },
      animation: {
        slideUpDown: 'slideUpDown 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
