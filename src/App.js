import React from 'react'
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme'
import Dashboard  from './components/Dashboard/Dashboard'


export default function App() {

  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline>
        <Dashboard />
      </CssBaseline>
    </ThemeProvider>
  );
}
