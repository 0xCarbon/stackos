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
        'main-grey': '#F3F4F6',
        'dark-grey': '#1F2937',
        'light-grey': '#374151',
        'dark-white': '#F3F4F6',
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
