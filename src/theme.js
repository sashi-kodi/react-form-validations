import { createMuiTheme } from '@material-ui/core/styles';
import themevariables from './theme.scss';
console.log(themevariables);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: themevariables.themeprimary
    },
        secondary:{
            main:themevariables.themesecondary
        }
  },
    typography: {
    fontFamily: [
      'Roboto',
        '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;