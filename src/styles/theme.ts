import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  borderRadius: '14px',
  gradient: 'linear-gradient(90deg, #FFA67A 0%, #FF6065 100%)',
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000',
      lightRed: '#C65252',
      darkGray: '#333333',
      lightGray: '#DBDEFF',
      lightPink: '#FFDBDB',
      lightOrange: '#F7A491',
    },
    primary: {
      main: '#424A9E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF7878',
      contrastText: '#FFFFFF',
    },
  },
};
