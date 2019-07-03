interface Theme {
  colors: {
    primary: string[];
    dark: string[];
    light: string[];
  };
}

export const theme: Theme = {
  colors: {
    primary: ['#4286f4'],
    dark: ['#222222', '#333333'],
    light: ['#eeeeee'],
  },
};
