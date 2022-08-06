import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
import { useContext } from 'react';
import { ColorModeContext } from '../libraries/ThemeContext';

export default function Home() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      <Head>
        <title>CTCN</title>
        <meta name="description" content="CTCN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          sx={{
            display: 'flex',
            width: '50%',
            m: '0 auto',
            p: 3,
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary'
          }}
        >
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </Box>
        <h1>Homepage</h1>
      </main>
    </div>
  );
}
