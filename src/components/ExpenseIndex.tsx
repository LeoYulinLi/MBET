import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import { Chip, getContrastRatio, Table } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import { Account, Category } from "../types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import styled from "@material-ui/core/styles/styled";


export default function () {

  const expenses = useSelector((state: RootState) => state.expenses)
  const accounts = useSelector((state: RootState) => state.accounts)
  const categories = useSelector((state: RootState) => state.categories)

  function renderBaseOnEmpty() {
    const expenseValues = Object.values(expenses)
    if (expenseValues.length === 0) {
      return (
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h4">
              Empty
            </Typography>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { expenseValues.map(expense => (
              <TableRow>
                <TableCell>{ expense.title }</TableCell>
                <TableCell>{ expense.date.toLocaleDateString() }</TableCell>
                <TableCell><CustomChip value={accounts[expense.accountId]}/></TableCell>
                <TableCell><CustomChip value={categories[expense.categoryId]}/></TableCell>
                <TableCell>${ expense.amount }</TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      )
    }
  }

  return (
    <Box m={4}>
      { renderBaseOnEmpty() }
    </Box>
  )
}

interface CustomChipProps {
  value: Account | Category
}

function CustomChip({ value }: CustomChipProps) {

  const BackgroundChip = styled(Chip)({
    background: value.color,
    color: getContrastRatio("#000", value.color) < 5 ? "white" : "black"
  })

  const ColorIcon = styled(Icon)({
    color: getContrastRatio("#000", value.color) < 5 ? "white" : "black"
  })

  return (
    <BackgroundChip label={value.title} icon={<ColorIcon fontSize="small">{ value.icon }</ColorIcon>}/>
  )

}
