import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MainLayout from './layouts/MainLayout';
import CssBaseline from '@material-ui/core/CssBaseline';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196f3' },
    secondary: { main: '#cddc39' }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <MainLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
