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
      title: "BankBank",
      color: "#000",
      icon: "account_balance",
      type: "saving"
    },
    1234: {
      id: 1234,
      title: "Bank of the Bank",
      color: "#1776d7",
      icon: "add",
      type: "checking"
    }
  },
  categories: {
    1024: {
      id: 1024,
      title: "Food",
      color: "#ffbd55",
      icon: "local_pizza"
    },
    690: {
      id: 690,
      title: "Cat",
      color: "#3e951b",
      icon: "pets"
    }
  },
  expenses: {
    582: {
      id: 582,
      title: "Unagi",
      amount: 10.24,
      accountId: 1234,
      categoryId: 1024,
      date: new Date("2020-02-02")
    },
    2456: {
      id: 2456,
      title: "Cat food",
      amount: 20.48,
      accountId: 1345,
      categoryId: 690,
      date: new Date("2020-09-24")
    }
  },
  ui: {
    addExpense: {
      opened: false
    }
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
