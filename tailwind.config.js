module.exports = {
  content: ['./src/pages/**/*.{html,js,jsx,ts,tsx}', './src/components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif'],
    },
    extend: {
      colors: {
        'main-green': '#AAFF00',
        'main-blue': '#111827',
      },
      backgroundImage: {
        'carousel-circle': "url('/assets/home/carousel-circle.svg')",
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
