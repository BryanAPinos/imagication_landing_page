import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
    palette: {
        primary: { 
            main: '#7378A6',
            contrastText: '#fff'
        },
        secondary: {
            main: '#FBFAFA',
        },
        text: {
            primary: '#000000', 
            secondary: '#6F6F6F',
            hint: '#D3D3D3'
        },
        disabled: {
            main: '#C8C8C8'
        },
    },
    typography: {
        htmlFontSize: 16,
        h1: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 3,
        },
        h2: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: '.75rem',
            lineHeight: 1,
        },
        h3: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '0.625rem',
            lineHeight: .75,
        },
        body1: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '0.625rem',
            lineHeight: 2,
        },
        button: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '0.625rem',
            lineHeight: .75,
            textTransform: 'none',
        },
        subtitle1: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '.625rem',
            lineHeight: 1,
        }
    },
    overrides: {
        MuiButton: {
            text: {
                textTransform: 'none',
                borderRadius: '10px',
                padding: '8px 30px',
                fontSize: '12px'
            },
            contained: {
                textTransform: 'none'
            }
        },
    }
})

theme = responsiveFontSizes(theme)

export default theme