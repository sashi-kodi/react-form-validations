import React from 'react';
import './App.scss';
import Form from './Form';
import MyButton from './components/Button';
import MyCard from './components/Card';
import MyDrawer from './components/Drawer';
import theme from './theme';
import {ThemeProvider} from '@material-ui/styles';
import { StylesProvider } from '@material-ui/styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
      <Router>
        <div className="App">
          <MyDrawer />
         <Route  path="/Button" component={MyButton} />
         <Route  path="/Form" component={Form} />
         <Route  path="/Card" component={MyCard} />
        </div>
      </Router>
      </StylesProvider>
      
    </ThemeProvider>
  );
}

export default App;
