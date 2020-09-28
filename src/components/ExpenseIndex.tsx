import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import { Chip, getContrastRatio, IconButton, Table } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import { Account, Category, Expense } from "../types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import styled from "@material-ui/core/styles/styled";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "../styles/theme";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { deleteExpense } from "../states/expense/expenseActions";
import { openAddExpense } from "../states/ui/uiActions";
import { DeleteForever, Edit } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";


export default function () {

  const expenses = useSelector((state: RootState) => state.expenses)
  const accounts = useSelector((state: RootState) => state.accounts)
  const categories = useSelector((state: RootState) => state.categories)

  const [expenseValues, setExpenseValues] = useState(Object.values(expenses))

  const accountFilterState = useState<number[]>([])
  const categoryFilterState = useState<number[]>([])

  const sortByState = useState<keyof Expense>("date")
  const orderState = useState<"asc" | "desc">("desc")

  const [accountFilters] = accountFilterState
  const [categoryFilters] = categoryFilterState

  const [sortBy] = sortByState
  const [order] = orderState

  useEffect(() => {
    setExpenseValues(Object.values(expenses).filter(it => {
      if (accountFilters.length > 0 && !accountFilters.includes(it.accountId)) {
        return false
      }
      if (categoryFilters.length > 0 && !categoryFilters.includes(it.categoryId)) {
        return false
      }
      return true
    }).sort((a, b) => {

      function comparator(str1: any, str2: any) {
        if (str1 < str2)
          return -1;
        if (str1 > str2)
          return 1;
        return 0;
      }

      let aValue = a[sortBy]
      let bValue = b[sortBy]

      if (sortBy === "accountId") {
        aValue = accounts[aValue as number].title
        bValue = accounts[bValue as number].title
      } else if (sortBy === "categoryId") {
        aValue = categories[aValue as number].title
        bValue = categories[bValue as number].title
      }

      if (order === "asc") {
        return comparator(aValue, bValue)
      } else {
        return -comparator(aValue, bValue)
      }

    }))
  }, [accountFilters, categoryFilters, sortBy, order, expenses])

  const dispatch = useDispatch()

  const handleDelete = (expenseId: number) => () => {
    dispatch(deleteExpense(expenseId))
  }

  const handleEdit = (expense: Expense) => () => {
    dispatch(openAddExpense(expense))
  }

  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  function renderBaseOnEmpty() {

    function renderBaseOnScreenSize() {
      if (isPhone) {
        return (
          <List>
            { expenseValues.map(expense => (
              <ContextMenuProvider expense={ expense }>
                <ListItem divider>
                  <Grid container spacing={ 1 }>
                    <Grid item xs={ 12 }>
                      <Grid container justify="space-between" alignItems="baseline">
                        <Grid item xs={ 9 }>
                          <Typography variant="h5">{ expense.title }</Typography>
                        </Grid>
                        <Grid item xs={ 3 }>
                          <Typography variant="h6" align="right">${ expense.amount }</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={ 12 }>
                      <Grid container spacing={ 2 } alignItems="center">
                        <Grid item xs={ 9 }>
                          <Grid container spacing={ 1 }>
                            <Grid item>
                              <CustomChip value={ accounts[expense.accountId] } />
                            </Grid>
                            <Grid item>
                              <CustomChip value={ categories[expense.categoryId] } />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={ 3 }>
                          <Typography variant="subtitle2"
                                      align="right">{ expense.date.toLocaleDateString() }</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
              </ContextMenuProvider>
            )) }
          </List>
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
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { expenseValues.map(expense => (
                <TableRow>
                  <TableCell>{ expense.title }</TableCell>
                  <TableCell>{ expense.date.toLocaleDateString() }</TableCell>
                  <TableCell><CustomChip value={ accounts[expense.accountId] } /></TableCell>
                  <TableCell><CustomChip value={ categories[expense.categoryId] } /></TableCell>
                  <TableCell>${ expense.amount }</TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small" aria-label={ `edit expense ${ expense.title }` }
                                component="span" onClick={ handleEdit(expense) }>
                      <Edit />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton color="secondary" size="small" aria-label={ `delete expense ${ expense.title }` }
                                component="span" onClick={ handleDelete(expense.id) }>
                      <DeleteForever />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        )
      }
    }

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
      return renderBaseOnScreenSize()
    }
  }

  return (
    <Box my={ 4 }>
      <Paper elevation={ 0 } style={ {
        background: "#efefef"
      } }>
        <Box p={ 2 }>
          <Typography variant="h6">Filters</Typography>
          <Grid container spacing={ 2 }>
            <Grid item xs={ 12 } md={ 6 }>
              <Filter values={ accounts } label="Account" valueState={ accountFilterState } />
            </Grid>
            <Grid item xs={ 12 } md={ 6 }>
              <Filter values={ categories } label="Category" valueState={ categoryFilterState } />
            </Grid>
          </Grid>
          <Sort options={ ["title", "date", "account", "category", "amount"] } sortByState={ sortByState }
                orderState={ orderState } />
        </Box>
      </Paper>
      { renderBaseOnEmpty() }
    </Box>
  )
}

interface SortProps {
  options: string[]
  sortByState: any // [string, Dispatch<SetStateAction<string>>]
  orderState: any // ["asc" | "desc", Dispatch<SetStateAction<"asc" | "desc">>]
}

function Sort(props: SortProps) {

  const { options } = props;

  const [sortBy, setSortBy] = props.sortByState
  const [order, setOrder] = props.orderState

  return (
    <Grid container spacing={ 2 }>
      <Grid item xs={ 12 } md={ 6 }>
        <FormControl style={ { width: "100%" } }>
          <InputLabel id={ `sortLabel` }>Sort By</InputLabel>
          <Select
            labelId={ `sortLabel` }
            id={ `sort` }
            value={ sortBy }
            onChange={ it => setSortBy(it.target.value) }
          >
            { Object.values(options).map(value => (
              <MenuItem value={ value }>{ value }</MenuItem>
            )) }
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={ 12 } md={ 6 }>
        <FormControl style={ { width: "100%" } }>
          <InputLabel id={ `orderLabel` }>Order</InputLabel>
          <Select
            labelId={ `orderLabel` }
            id={ `order` }
            value={ order }
            onChange={ it => setOrder(it.target.value) }
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )

}

interface FilterProps {
  values: Record<number, Account | Category>
  label: string
  valueState: any // [number[], Dispatch<SetStateAction<number[]>>]
}

function Filter(props: FilterProps) {

  const { values, label } = props;

  const [valueId, setValueId] = props.valueState

  return (
    <FormControl style={ { minWidth: "100%" } }>
      <InputLabel id={ `filter${ label }Label` }>{ label }</InputLabel>
      <Select
        labelId={ `filter${ label }Label` }
        id={ `filter${ label }` }
        multiple
        value={ valueId }
        onChange={ it => setValueId(it.target.value as number[]) }
        input={ <Input id={ `selectMultiple${ label }` } /> }
        renderValue={ (selected) => (
          <Grid container spacing={ 1 }>
            { (selected as number[]).map((valueId) => (
              <Grid item>
                <CustomChip value={ values[valueId] } />
              </Grid>
            )) }
          </Grid>
        ) }
      >
        { Object.values(values).map((value) => (
          <MenuItem key={ value.id } value={ value.id }>
            <CustomChip value={ value } />
          </MenuItem>
        )) }
      </Select>
    </FormControl>
  )

}

interface CustomChipProps {
  value: Account | Category
}

function CustomChip({ value }: CustomChipProps) {

  const BackgroundChip = styled(Chip)({
    background: value.color,
    color: getContrastRatio("#000", value.color) < 6 ? "white" : "black"
  })

  const ColorIcon = styled(Icon)({
    color: getContrastRatio("#000", value.color) < 6 ? "white" : "black"
  })

  return (
    <BackgroundChip size="small" label={ value.title }
                    icon={ <ColorIcon fontSize="small">{ value.icon }</ColorIcon> } />
  )

}

const ContextMenuProvider: FC<{ expense: Expense }> = ({ children, expense }) => {

  const dispatch = useDispatch()

  const initialState = {
    mouseX: null,
    mouseY: null,
  };

  const [state, setState] = useState<{
    mouseX: null | number;
    mouseY: null | number;
  }>(initialState);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  const handleDelete = (expenseId: number) => () => {
    dispatch(deleteExpense(expenseId))
    handleClose()
  }

  const handleEdit = (expense: Expense) => () => {
    dispatch(openAddExpense(expense))
    handleClose()
  }

  return (
    <div onContextMenu={ handleClick } style={ { cursor: 'context-menu' } }>
      { children }
      <Menu
        keepMounted
        open={ state.mouseY !== null }
        onClose={ handleClose }
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={ handleEdit(expense) }><Edit />Edit</MenuItem>
        <MenuItem onClick={ handleDelete(expense.id) }><DeleteForever />Delete</MenuItem>
      </Menu>
    </div>
  )

}
