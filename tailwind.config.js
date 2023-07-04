/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.js','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {fontFamily: {
      'im-fell-dw-pica': ['"IM Fell DW Pica"', 'serif'],
    },},
  },
  plugins: [],
}

