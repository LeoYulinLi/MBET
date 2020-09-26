import React from 'react'
import './styles/index.scss'
import AccountIndex from "./components/AccountIndex";
import { AppBar, Container, createStyles, makeStyles, Toolbar } from "@material-ui/core";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import Overview from "./components/Overview";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { Add } from "@material-ui/icons";

function App() {

  const useStyles = makeStyles(theme =>
    createStyles({
      fab: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
      },
    }),
  );

  const classes = useStyles();

  return (

    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" size="large" component={ Link } to="/">MBET</Button>
        </Toolbar>
      </AppBar>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <Add />
      </Fab>
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/overview" component={ Overview } />
          <Route exact path="/accounts" component={ AccountIndex } />
        </Switch>
      </Container>
    </Router>

  )
}

export default App
