import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import { closeEditAccount } from "../states/ui/uiActions";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box/Box";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useEffect, useState } from "react";
import { createAccount, editAccount } from "../states/account/accountActions";
import { DialogContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { colors, icons } from "../types";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";


export default function EditAccount() {

  const { opened, providedAccount } = useSelector((state: RootState) => state.ui.editAccount)

  const [title, setTitle] = useState("")
  const [color, setColor] = useState("#fff")
  const [icon, setIcon] = useState("account_balance")
  const [type, setType] = useState("")

  const dispatch = useDispatch()

  function closeDialog() {
    dispatch(closeEditAccount())
  }

  useEffect(() => {
    if (providedAccount) {
      const { title, color, icon, type } = providedAccount
      setTitle(title)
      setColor(color)
      setIcon(icon)
      setType(type)
    }
  }, [providedAccount])

  function resetFields() {
    setTitle("")
    setColor("#fff")
    setIcon("account_balance")
    setType("")
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    handleSave(event)
    resetFields()
    if (providedAccount) closeDialog()
  }

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!title || !color || !icon || !type) return
    if (providedAccount) {
      dispatch(editAccount({
        id: providedAccount.id,
        title,
        color,
        icon,
        type
      }))
    } else {
      dispatch(createAccount({
        id: Math.random(),
        title,
        color,
        icon,
        type
      }))
    }
  }

  return (
    <Dialog open={ opened } onClose={ closeDialog }>
      <Box p={ 1 }>
        <form id="addExpenseForm" onSubmit={ handleSubmit }>
          <DialogTitle>{ providedAccount ? "Edit" : "Add" } Account</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              id="expense-title"
              label="Title"
              value={ title }
              onChange={ it => setTitle(it.target.value) }
              type="text"
              fullWidth
              required
            />
            <FormControl fullWidth>
              <InputLabel id="account-color">Color</InputLabel>
              <Select
                labelId="account-color"
                id="account-color-select"
                value={ color }
                onChange={ it => setColor(it.target.value as string)}
              >
                { colors.map(c => (
                  <MenuItem value={c}>
                    <Typography style={{ color: c }}>
                      { c }
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="account-icon">Color</InputLabel>
              <Select
                labelId="account-icon"
                id="account-icon-select"
                value={ icon }
                onChange={ it => setIcon(it.target.value as string)}
              >
                { icons.map(i => (
                  <MenuItem value={ i }>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item><Icon fontSize="small">{ i }</Icon></Grid>
                      <Grid item>{ i }</Grid>
                    </Grid>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              id="expense-type"
              label="Type"
              value={ type }
              onChange={ it => setType(it.target.value) }
              type="text"
              fullWidth
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={ closeDialog } color="default">
              Cancel
            </Button>
            <Button color="primary" type="submit" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  )

}
