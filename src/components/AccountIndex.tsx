import { useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import React from "react";
import AccountCard from "./AccountCard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function AccountIndex() {
  const accounts = useSelector((state: RootState) => {
    return state.accounts
  })

  return (
    <Box m={2}>
      <Typography variant="h4">Accounts</Typography>
      { Object.entries(accounts).map(([id, account]) => (
        <AccountCard account={ account } key={ id } />
      )) }
    </Box>
  )

}
