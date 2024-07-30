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
        nav_divider: '#EDEDED',
        diag_card1: '#E0F3FA',
        diag_card2: '#FFE6E9',
        diag_card3: '#FFE6F1',
        chart: '#F4F0FE',
        chart_line1: '#C26EB4',
        chart_line2: '#7E6CAB',
        chart_pt1: '#E66FD2',
        chart_pt2: '#E66FD2',
        chart_strip: '#CBC8D4',
        scroll: '#E3E4E6'
      },
      textColor: {
        primary: '#072635',
        secondary: '#707070',
      },
    },
  },
  plugins: [],
};
