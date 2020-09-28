import { Typography } from "@material-ui/core";
import React from "react";
import Box from "@material-ui/core/Box";

export default function Home() {
  return (
    <Box m={4}>
      <Typography variant="h4">
        Instruction for now
      </Typography>
      <Typography>
        Click on "expenses" to see demo expenses.
        Click on the green button at the bottom right to start adding expense.
      </Typography>
    </Box>
  )
}
