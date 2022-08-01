import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: string;
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
        lightRed: string;
        darkGray: string;
        lightGray: string;
        lightPink: string;
        lightOrange: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
