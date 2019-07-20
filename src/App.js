import React from 'react';
import './App.scss';
import Form from './Form';
import MyButton from './components/Button';
import theme from './theme';
import {ThemeProvider} from '@material-ui/styles';
import { StylesProvider } from '@material-ui/styles';


function App() {
  return (
    <ThemeProvider theme={theme}>
        
        <div className="App">
          <MyButton />
        </div>
      
    </ThemeProvider>
  );
}

export default App;
