import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import { closeEditAccount } from "../states/ui/uiActions";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box/Box";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState } from "react";
import { createAccount, editAccount } from "../states/account/accountActions";
import { DialogContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


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
          <DialogTitle>{ providedAccount ? "Edit" : "Add" } Expense</DialogTitle>
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
            <input type="color"/>
          </DialogContent>
        </form>
      </Box>
    </Dialog>
  )

}
