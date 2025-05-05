/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'shine-purple': '#DBD9F0', // Add shine color
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      keyframes: {
        shine: {
          '0%': { boxShadow: '0 0 10px #475FA9' }, // Soft start
          '50%': { boxShadow: '0 0 40px #93D7E8' }, // Strong glow
          '100%': { boxShadow: '0 0 10px #93D7E8' }, // Fade out
        },
      },
      animation: {
        'shine': 'shine 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
