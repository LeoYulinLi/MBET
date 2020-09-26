import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./states/store";

const store = configureStore({
  accounts: {
    1345: {
      id: 1345,
      title: "12435",
      color: "black",
      icon: "bank",
      type: "saving"
    }
  },
  categories: {},
  expenses: {}
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
