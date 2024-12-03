/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Note the addition of the tsx extension
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',   // Custom extra small breakpoint
        'sm': '640px',   // Default small breakpoint (you can override it if needed)
        'md': '768px',   // Default medium breakpoint
        'lg': '1024px',  // Default large breakpoint
        'xl': '1280px',  // Default extra large breakpoint
        '2xl': '1440px',
        '3xl': '1920px', // Custom 3x large breakpoint
      },
      gradientColorStops: {
        'light-blue': '#B8C7F9', // light blue similar to the top of the image
        'mid-blue': '#1F45AB',   // medium blue
        'dark-blue': '#010101',  // very dark at the bottom, close to black
      },
      colors: {
        'custom-blue': '#486DD3',
      },
      backgroundImage: {
        'how-works': "url('/public/how-works-back.png')",
      },
      fontFamily: {
        borna: ['Borna'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      animation: {
        'rotate-in': 'rotate-in .2s ease-in-out forwards',
        'rotate-out': 'rotate-out .2s ease-in-out forwards',
      },
      keyframes: {
        'rotate-in': {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'rotate-out': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
      },
    },
  },
  plugins: [],
}