import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    MuiCssBaseline: {
        styleOverrides: `
            @font-face {
                font-family: 'Lato';
                font-style: sans-serif;
                font-display: swap;
                font-weight: 400;
                src: url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap)
            }
         `,
      },
    typography: {
        fontFamily: 'Radio Canada',
        h1: {
          fontSize: '72px'
        }, 
        h2: {
          fontSize: '36px'
        },
        h3: {
          fontSize: '28px'
        },
        subtitle1: {
          fontSize: '22px'
        }, 
        subtitle2: {
          fontSize: '18px'
        },
        button: {
          fontSize: '24px',
          textTransform: 'none;',
        }
      },
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#3D325F',
        darker: '#140C35',
        lighter: '#140C35',
      },
    },
  });

export default theme