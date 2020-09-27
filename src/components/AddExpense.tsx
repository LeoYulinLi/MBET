import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import { closeAddExpense } from "../states/ui/uiActions";
import { DialogContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete/Autocomplete";
import { Account, Category as CategoryType } from "../types";
import { createAccount } from "../states/account/accountActions";
import FormControl from "@material-ui/core/FormControl";
import { createExpense } from "../states/expense/expenseActions";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import { createCategory } from "../states/category/categoryActions";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from "@material-ui/core/Box/Box";

export default function AddExpense() {

  const opened = useSelector((state: RootState) => state.ui.addExpense)

  const categories = useSelector((state: RootState) => state.categories)

  const [amount, setAmount] = useState<number>(0)
  const [account, setAccount] = useState<Account | null>(null)
  const [category, setCategory] = useState<CategoryType | null>(null)
  const [date, setDate] = useState<Date | null>(null)

  const dispatch = useDispatch()

  function closeDialog() {
    dispatch(closeAddExpense())
  }

  function handleSubmit() {
    console.log("submit")
    if (!date || !account || !category) return
    dispatch(createExpense({ accountId: account.id, amount, categoryId: category.id, date }))
    closeDialog()
  }

  return (
    <Dialog open={ opened } onClose={ closeDialog }>
      <Box p={1}>
        <form id="addExpenseForm" onSubmit={ handleSubmit }>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              id="expense-title"
              label="Title"
              type="text"
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
              <Input
                id="standard-adornment-amount"
                value={amount}
                onChange={ it => setAmount(+(it.target.value)) }
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
            <AccountSelector setAccount={ setAccount }/>
            <CategorySelector setCategory={ setCategory }/>
            <MuiPickersUtilsProvider utils={ DateFnsUtils }>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy-MM-dd"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={ date }
                onChange={ it => setDate(it) }
                KeyboardButtonProps={ {
                  'aria-label': 'change date',
                } }
              />
            </MuiPickersUtilsProvider>

          </DialogContent>
          <DialogActions>
            <Button onClick={ closeDialog } color="default">
              Cancel
            </Button>
            <Button color="primary" type="submit" variant="contained">
              Create
            </Button>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  )

}

interface AccountSelectorProps {
  setAccount: React.Dispatch<React.SetStateAction<Account | null>>
}

function AccountSelector({ setAccount }: AccountSelectorProps) {

  const dispatch = useDispatch()

  const accounts = useSelector((state: RootState) => state.accounts)

  type Option = { title: string, message?: string }

  const filter = createFilterOptions<Option>();

  return (
    <Autocomplete
      id="account-selector"
      options={ Object.values(accounts) as Option[] }
      onChange={ (event, newValue) => {
        if (newValue?.message) {
          const account = {
            id: Math.random(),
            title: newValue.title,
            color: "",
            icon: "",
            type: ""
          }
          dispatch(createAccount(account))
          setAccount(account)
        } else if (newValue) {
          setAccount(newValue as Account);
        }
      } }
      filterOptions={ (options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            message: `Add "${ params.inputValue }"`,
            title: params.inputValue
          });
        }

        return filtered;
      } }
      getOptionLabel={ (option) => option.message || option.title }
      renderInput={ (params) => <TextField { ...params } label="Account" /> }
    />
  )

}

interface CategorySelectorProps {
  setCategory: React.Dispatch<React.SetStateAction<CategoryType | null>>
}

function CategorySelector({ setCategory }: CategorySelectorProps) {

  const dispatch = useDispatch()

  const accounts = useSelector((state: RootState) => state.categories)

  type Option = { title: string, message?: string }

  const filter = createFilterOptions<Option>();

  return (
    <Autocomplete
      id="account-selector"
      options={ Object.values(accounts) as Option[] }
      onChange={ (event, newValue) => {
        if (newValue?.message) {
          const category = {
            id: Math.random(),
            title: newValue.title,
            color: "",
            icon: ""
          }
          dispatch(createCategory(category))
          setCategory(category)
        } else if (newValue) {
          setCategory(newValue as Account);
        }
      } }
      filterOptions={ (options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            message: `Add "${ params.inputValue }"`,
            title: params.inputValue
          });
        }

        return filtered;
      } }
      getOptionLabel={ (option) => option.message || option.title }
      renderInput={ (params) => <TextField { ...params } label="Category" /> }
    />
  )

}
