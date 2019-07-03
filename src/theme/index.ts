import { MyTheme } from 'styled-components';

export const theme: MyTheme = {
  colors: {
    primary: ['#4286f4'],
    dark: ['#222222', '#333333'],
    light: ['#eeeeee'],
  },
  breakpoints: {
    smallest: '31.25em', // 500px
    small: '37.5em', // 600px
    medium: '56.25em', // 900px
    large: '75em', // 1200px
  },
};
