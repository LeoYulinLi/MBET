import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "../styles/theme";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Container, createStyles, makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { AccountBalance, BarChart, Category, Receipt } from "@material-ui/icons";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

export default function Nav() {

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const location = useLocation();
  const history = useHistory();

  const setTab = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue)
  };

  function tabProps(index: string) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles(theme =>
    createStyles({
      bottomNav: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        background: "#f0f0f0"
      }
    }),
  );

  const classes = useStyles();

  function pickNav() {
    if (isLargeScreen) {
      return (
        <AppBar position="static">
          <Container maxWidth="lg">
            {/*<Typography variant="h6">MBET</Typography>*/ }
            <Grid container justify="space-between" alignItems="center">
              <Typography variant="h6">MBET</Typography>
              <Tabs value={ location.pathname } onChange={ setTab }>
                <Tab component={ Link } to="/overview" label="Overview" { ...tabProps("/overview") } />
                <Tab component={ Link } to="/accounts" label="Accounts" { ...tabProps("/accounts") } />
                <Tab component={ Link } to="/" label="Categories" { ...tabProps("/categories") } />
                <Tab component={ Link } to="/" label="Expenses" { ...tabProps("/expenses") } />
              </Tabs>
            </Grid>
          </Container>
        </AppBar>
      )
    } else {
      return (
        <>
          <AppBar position="static">
            <Container maxWidth="lg">
              <Toolbar>
                <Typography variant="h6">MBET</Typography>
              </Toolbar>
            </Container>
          </AppBar>
          <BottomNavigation value={ location.pathname } onChange={ setTab } className={ classes.bottomNav }>
            <BottomNavigationAction label="Overview" value="/overview" icon={ <BarChart /> } />
            <BottomNavigationAction label="Accounts" value="/accounts" icon={ <AccountBalance /> } />
            <BottomNavigationAction label="Categories" value="/categories" icon={ <Category /> } />
            <BottomNavigationAction label="Expenses" value="/expenses" icon={ <Receipt /> } />
          </BottomNavigation>
        </>
      )
    }
  }

  return pickNav()

}
