module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'primary': '#EBFFF5',
      'secondary': '#05DBF2',
      'third': '#05F283',
      'data': '#023E73',
      'texty': '#AEDFF2',
      'white': '#FFFFFF',
      'black': '#000000',
      'red': '#CD0000',
      'upcoming': '#FFCC00',
      'done': '#006400',

    },
    backgroundColor: {
      'primary': '#3490dc',
      'data': '#0CAEE8',
      'texty': '#0D80FF',
      'box': '#00FFFF',
      'third': '#05F283',
      'button': '#00b75b',
      'white': '#FFFFFF',
      'black': '#000000',
      'red': '#CD0000',
      'upcoming': '#FFCC00',
      'done': '#006400',

     },
     filter: {
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow'),
    require('tailwindcss-filters'),
    require('tailwindcss-no-scrollbar'),
  ],
}
