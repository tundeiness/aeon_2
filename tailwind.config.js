module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0,0%, 98%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        brown: 'hsl(33, 78%, 29%)',
      },
    },
  },
  plugins: [],
};
