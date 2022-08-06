import '../styles/globals.css';
import { ColorModeContext, getDesignTokens } from '../libraries/ThemeContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useMemo } from 'react';


function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
