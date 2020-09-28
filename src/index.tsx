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
      icon: "star",
      type: "checking"
    },
    3576: {
      id: 3576,
      title: "Bank of the Fish",
      color: "#009688",
      icon: "navigation",
      type: "credit"
    }
  },
  categories: {
    1024: {
      id: 1024,
      title: "Food",
      color: "#ffc107",
      icon: "local_pizza"
    },
    46: {
      id: 46,
      title: "Server",
      color: "#673ab7",
      icon: "cloud"
    },
    690: {
      id: 690,
      title: "Cat",
      color: "#3e951b",
      icon: "pets"
    },
    869: {
      id: 869,
      title: "Travel",
      color: "#f44336",
      icon: "flight_takeoff"
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
    },
    648: {
      id: 648,
      title: "AWS",
      amount: 40.96,
      accountId: 3576,
      categoryId: 46,
      date: new Date("2020-06-24")
    },
    3576: {
      id: 3576,
      title: "AWS",
      amount: 30.72,
      accountId: 3576,
      categoryId: 46,
      date: new Date("2020-07-24")
    },
    2345: {
      id: 2345,
      title: "AWS",
      amount: 655.36,
      accountId: 3576,
      categoryId: 46,
      date: new Date("2020-08-24")
    },
    145: {
      id: 145,
      title: "AWS",
      amount: 0.16,
      accountId: 3576,
      categoryId: 46,
      date: new Date("2020-09-24")
    }
  },
  ui: {
    addExpense: {
      opened: false
    },
    editAccount: {
      opened: false
    },
    editCategory: {
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
