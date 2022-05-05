import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Landing from 'pages/Landing';
import OurStory from 'pages/OurStory';
import ForSchools from 'pages/ForSchools';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

// Material UI Theme
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact render={(props) => <Landing {...props} />} />
                    <Route path='/ourstory' exact render={(props) => <OurStory {...props} />} />
                    <Route path='/forschools' exact render={(props) => <ForSchools {...props} />} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
