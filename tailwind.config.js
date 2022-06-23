module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        // 'gray-rgba': 'rgba(96, 96, 96, 1)',
        // 'contact-box': '#7e22ce',
        // 'light-blue-gradient': 'rgba(54, 153, 255, 1)',
        // 'dark-blue-gradient': 'rgba(0, 86, 174, 1)',
        // 'purple-button': '#7e22ce',
        'beige': '#eed9c4'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'manrope': ['Manrope']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
