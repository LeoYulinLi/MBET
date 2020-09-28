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
import CategoryIndex from "./components/CategoryIndex";
import EditCategory from "./components/EditCategory";
import Box from "@material-ui/core/Box";
import Home from "./components/Home";

function App() {

  const useStyles = makeStyles(theme =>
    createStyles({
      fab: {
        position: 'fixed',
        bottom: theme.spacing(12),
        right: theme.spacing(4),
        zIndex: 5
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
      <EditCategory />
      <Nav />
      <Tooltip title="Add new expense (ctrl+N)">
        <Fab color="primary" aria-label="add" className={ classes.fab } onClick={ openAddExpenseDialog }>
          <Add />
        </Fab>
      </Tooltip>
      <Container maxWidth="lg">
        <Box pb={20}>
          <Switch>
            <Route exact path="/overview" component={ Overview } />
            <Route exact path="/accounts" component={ AccountIndex } />
            <Route exact path="/categories" component={ CategoryIndex } />
            <Route exact path="/expenses" component={ ExpenseIndex } />
            <Route path="/" component={ Home } />
          </Switch>
        </Box>
      </Container>
    </Router>

  )
}

export default App
