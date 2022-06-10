import { createTheme } from '@mui/material/styles';

export const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00779c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#001e3c',
      contrastText: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#000',
    },
    background: {
      default: '#e0e0e0',
      paper: '#e6e6e6',
    },
    typography: {
      "fontFamily": "sans-serif",
      "fontSize": 15,
      "lineHeight": 1,
      "letterSpacing": 0.32,
      useNextVariants: true,
      suppressDeprecationWarnings: true,
      button: {
        "fontWeight": 200,
      },
    },
  }
});

export const themeDark = createTheme({
  mode: 'dark',
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
    secondary: {
      main: '#017AFF',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    background: {
      default: '#061323',
      paper: '#06182E',
    },
    typography: {
      "fontFamily": "sans-serif",
      "fontSize": 15,
      "lineHeight": 1,
      "letterSpacing": 0.32,
      useNextVariants: true,
      suppressDeprecationWarnings: true,
      button: {
        "fontWeight": 200,
      },
    },

  },
});