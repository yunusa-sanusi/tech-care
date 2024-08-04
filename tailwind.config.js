/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#ffffff',
        secondary1: '#01F0D0',
        secondary2: '#D8FCF7',
        secondary3: '#F6F7F8',
        navDivider: '#EDEDED',
        diagCard1: '#E0F3FA',
        diagCard2: '#FFE6E9',
        diagCard3: '#FFE6F1',
        chart: '#F4F0FE',
        chartLine1: '#C26EB4',
        chartLine2: '#7E6CAB',
        chartPt1: '#E66FD2',
        chartPt2: '#8C6FE6',
        chartGrid: '#CBC8D4',
        scroll: '#E3E4E6',
      },
      textColor: {
        primary: '#072635',
        secondary: '#707070',
      },
    },
  },
  plugins: [],
};
