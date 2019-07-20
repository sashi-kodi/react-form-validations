import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Form from './Form';
import MyButton from './components/Button';
import theme from './theme';
import {ThemeProvider} from '@material-ui/styles';
import { StylesProvider } from '@material-ui/styles';


function App() {
  return (
    <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
        <div className="App">
          <MyButton />
        </div>
        </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
