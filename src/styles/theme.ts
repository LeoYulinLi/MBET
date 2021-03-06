import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#34a007',
    },
    secondary: {
      main: '#e23500',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
});

export default theme;
