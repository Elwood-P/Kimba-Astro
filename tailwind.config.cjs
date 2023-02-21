module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  safelist: [
    // bg-colors used for tags are set with variables in templates.
    'bg-green',
    'bg-orange',
    'bg-blue',
    'button--green',
    'button--light-green',
    'button--blue',
    'button--light-blue',
    'button--orange',
    'button--light-orange',
    'rounded-[16px]',
    'rounded-[10px]',
  ],
  theme: {
    colors: {
      'gray': {
        DEFAULT: '#3E4251',
        '50': '#f5f6f7',
        '100': '#c6c7cc',
        '200': '#9799a0',
        '300': '#676a75',
        '400': '#3E4251',
        '500': '#323542',
        '600': '#2d2f3a',
        '700': '#272933',
        '800': '#22232b',
        '900': '#1c1d24',
    },
    'chalk': {
      DEFAULT: '#faf9f7',
      '50': '#fffefe',
      '100': '#fefdfc',
      '200': '#fdfcfb',
      '300': '#fbfaf9',
      '400': '#faf9f7',
      '500': '#f0eee9',
      '600': '#e4e2dc',
      '700': '#d9d5cf',
      '800': '#cbc9c4',
      '900': '#bdbcba',
    },
      green: '#b8e1c4',
      orange: '#FCE098',
      blue: '#D2E9EE',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ["europa", "sans-serif"],
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1320px', //1256
      xxl: '1400px', //1256px
    },
    lineHeight: {
      none: '1',
      400: '1.6',
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};

