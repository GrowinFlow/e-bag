/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      keyframes: {
        load: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        flash: {
          '0%, 100%': { boxShadow: 'purple 0px 0px 10px, purple 0px 0px 5px' },
          '50%': { boxShadow: 'purple 0px 0px 20px, purple 0px 0px 10px' },
        }
      },
      animation: {
        load: 'load 3s linear infinite',
        flash: 'flash 1.5s linear infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

