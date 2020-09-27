import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./states/store";
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import theme from "./styles/theme";

const store = configureStore({
  accounts: {
    1345: {
      id: 1345,
      title: "12435",
      color: "#000",
      icon: "account_balance",
      type: "saving"
    },
    1234: {
      id: 1234,
      title: "Bank of the Bank",
      color: "#1776d7",
      icon: "account_balance",
      type: "checking"
    }
  },
  categories: {},
  expenses: {},
  ui: {
    addExpense: false
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
