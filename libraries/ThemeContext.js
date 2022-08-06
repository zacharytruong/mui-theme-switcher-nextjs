import { grey, teal } from '@mui/material/colors';
import { createContext } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: teal,
          divider: teal[500],
          text: {
            primary: grey[900],
            secondary: grey[800]
          }
        }
      : {
          // palette values for dark mode
          divider: teal[500],
          background: {
            default: grey[900],
            paper: grey[800]
          },
          text: {
            primary: grey[50],
            secondary: grey[100]
          }
        })
  }
});
