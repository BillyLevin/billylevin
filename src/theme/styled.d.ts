import 'styled-components';

declare module 'styled-components' {
  export interface MyTheme {
    colors: {
      primary: string[];
      dark: string[];
      light: string[];
    };

    breakpoints: {
      smallest: string;
      small: string;
      medium: string;
      large: string;
    };
  }
}
