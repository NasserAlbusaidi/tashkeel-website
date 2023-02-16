/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      left: {
        '13' : '4rem',
    },
    },
    colors: {
      'brown': '#9e7639',
      'dark-brown': '#5c3e1e',
      'black': '#615b51',
      'white': '#ffffff',
      'bborder': '#d5e3e3',

    },
  },
  
  
}
