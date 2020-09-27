import { useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import React from "react";
import AccountCard from "./AccountCard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

export default function AccountIndex() {
  const accounts = useSelector((state: RootState) => {
    return state.accounts
  })

  return (
    <Box m={2}>
      <Typography variant="h4">Accounts</Typography>
      <Grid container spacing={ 2 }>
        { Object.entries(accounts).map(([id, account]) => (
          <AccountCard account={ account } key={ id } />
        )) }
      </Grid>
    </Box>
  )

}
