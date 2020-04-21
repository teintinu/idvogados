import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app/app';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Ocupado } from './app/backdrop';

const theme: any = createMuiTheme({ "palette": { "common": { "black": "#000", "white": "#fff" }, "background": { "paper": "#fff", "default": "#fafafa" }, "primary": { "light": "rgba(213, 90, 104, 1)", "main": "rgba(208, 2, 27, 1)", "dark": "rgba(167, 0, 20, 1)", "contrastText": "#fff" }, "secondary": { "light": "#ff4081", "main": "#f50057", "dark": "#c51162", "contrastText": "#fff" }, "error": { "light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff" }, "text": { "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 0.54)", "disabled": "rgba(0, 0, 0, 0.38)", "hint": "rgba(0, 0, 0, 0.38)" } } });

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
    <Ocupado />
  </MuiThemeProvider>,
  document.getElementById("app")
);