'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: '#fff'
        },
        secondary: {
          main: '#000'
        }
      }
    },
    light: {
      palette: {
        primary: {
          main: '#000',
        },
        secondary: {
          main: '#fff'
        }
      }
    }
  },
});

export default theme;
