module.exports = {
  content: ['./src/pages/**/*.{html,js,jsx,ts,tsx}', './src/components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1535px' },
      '2xl': { min: '1536px' },
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
        'hero-bg': 'url(/assets/hero-background.svg)',
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
