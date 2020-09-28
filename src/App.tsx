import React from 'react'
import './styles/index.scss'
import AccountIndex from "./components/AccountIndex";
import { Container, createStyles, makeStyles } from "@material-ui/core";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Overview from "./components/Overview";
import Fab from "@material-ui/core/Fab";
import { Add } from "@material-ui/icons";
import EditExpense from "./components/EditExpense";
import { useDispatch } from "react-redux";
import { openAddExpense } from "./states/ui/uiActions";
import Nav from "./components/Nav";
import ExpenseIndex from "./components/ExpenseIndex";
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import EditAccount from "./components/EditAccount";

function App() {

  const useStyles = makeStyles(theme =>
    createStyles({
      fab: {
        position: 'absolute',
        bottom: theme.spacing(12),
        right: theme.spacing(4),
      }
    }),
  );

  const classes = useStyles();

  const dispatch = useDispatch()

  function openAddExpenseDialog() {
    dispatch(openAddExpense())
  }

  return (

    <Router>
      <EditExpense />
      <EditAccount />
      <Nav />
      <Tooltip title="Add new expense (ctrl+N)">
        <Fab color="primary" aria-label="add" className={ classes.fab } onClick={ openAddExpenseDialog }>
          <Add />
        </Fab>
      </Tooltip>
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/overview" component={ Overview } />
          <Route exact path="/accounts" component={ AccountIndex } />
          <Route exact path="/expenses" component={ ExpenseIndex } />
        </Switch>
      </Container>
    </Router>

  )
}

export default App
