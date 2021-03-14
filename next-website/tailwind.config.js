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

    },
    backgroundColor: {
      'primary': '#3490dc',
      'data': '#0CAEE8',
      'texty': '#0D80FF',
      'box': '#00FFFF',
     }
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
