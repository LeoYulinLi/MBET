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

export default function Nav() {

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const location = useLocation();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue)
  };

  const useStyles = makeStyles(theme =>
    createStyles({
      bottomNav: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }
    }),
  );

  const classes = useStyles();

  function pickNav() {
    if (isLargeScreen) {
      return (
        <AppBar position="static">
          <Container maxWidth="lg">
            {/*<Typography variant="h6">MBET</Typography>*/}
            <Tabs>
              <Typography variant="h6">MBET</Typography>
              <Tab component={ Link } to="/overview" label="Overview" />
              <Tab component={ Link } to="/accounts" label="Accounts" />
              <Tab component={ Link } to="/" label="Categories" />
              <Tab component={ Link } to="/" label="Expenses" />
            </Tabs>
          </Container>
        </AppBar>
      )
    } else {
      return (
        <BottomNavigation value={location.pathname} onChange={handleChange} className={ classes.bottomNav } style={{
          background: "#f0f0f0"
        }}>
          <BottomNavigationAction label="Overview" value="/overview" icon={<BarChart />} />
          <BottomNavigationAction label="Accounts" value="/accounts" icon={<AccountBalance />} />
          <BottomNavigationAction label="Categories" value="/categories" icon={<Category />} />
          <BottomNavigationAction label="Expenses" value="/expenses" icon={<Receipt />} />
        </BottomNavigation>
      )
    }
  }

  return pickNav()

}
