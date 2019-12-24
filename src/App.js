import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import MainLayout from './layouts/MainLayout';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#F5F5F5' },
    secondary: { main: '#cddc39' }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <MainLayout/>
    </div>
    </ThemeProvider>
  );
}

export default App;
