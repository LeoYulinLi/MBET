import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import React from "react";
import AccountCard from "./AccountCard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { openEditAccount } from "../states/ui/uiActions";

export default function AccountIndex() {

  const accounts = useSelector((state: RootState) => {
    return state.accounts
  })

  const dispatch = useDispatch()

  return (
    <Box m={4}>
      <Grid container spacing={ 2 } justify="space-between">
        <Grid item>
          <Typography variant="h4">Accounts</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" onClick={ () => dispatch(openEditAccount()) }>
            New Account
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={ 2 }>
        { Object.entries(accounts).map(([id, account]) => (
          <AccountCard account={ account } key={ id } />
        )) }
      </Grid>
    </Box>
  )

}
