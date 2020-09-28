import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import { closeEditCategory } from "../states/ui/uiActions";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box/Box";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useEffect, useState } from "react";
import { createCategory, deleteCategory, editCategory } from "../states/category/categoryActions";
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
import Tooltip from "@material-ui/core/Tooltip";


export default function EditCategory() {

  const { opened, providedCategory } = useSelector((state: RootState) => state.ui.editCategory)

  const expense = useSelector((state: RootState) => state.expenses)

  const [title, setTitle] = useState("")
  const [color, setColor] = useState("#fff")
  const [icon, setIcon] = useState("category_balance")

  const dispatch = useDispatch()

  function closeDialog() {
    dispatch(closeEditCategory())
  }

  useEffect(() => {
    if (providedCategory) {
      const { title, color, icon } = providedCategory
      setTitle(title)
      setColor(color)
      setIcon(icon)
    } else {
      resetFields()
    }
  }, [providedCategory])

  function resetFields() {
    setTitle("")
    setColor("#fff")
    setIcon("category_balance")
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    handleSave(event)
    resetFields()
    if (providedCategory) closeDialog()
  }

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!title || !color || !icon) return
    if (providedCategory) {
      dispatch(editCategory({
        id: providedCategory.id,
        title,
        color,
        icon
      }))
    } else {
      dispatch(createCategory({
        id: Math.random(),
        title,
        color,
        icon
      }))
    }
  }

  function handleDelete() {
    dispatch(deleteCategory(providedCategory!!.id))
    closeDialog()
  }

  function deleteButton() {
    if (providedCategory) {
      if (Object.values(expense).some(it => it.categoryId === providedCategory.id)) {
        return (
          <Tooltip title="There are still expenses using this category, please delete them first">
            <span>
              <Button color="secondary" disabled>
                Delete
              </Button>
            </span>
          </Tooltip>
        )
      } else {
        return (
          <Button onClick={ handleDelete } color="secondary">
            Delete
          </Button>
        )
      }
    } else {
      return null
    }
  }

  return (
    <Dialog open={ opened } onClose={ closeDialog }>
      <Box p={ 1 }>
        <form id="addExpenseForm" onSubmit={ handleSubmit }>
          <DialogTitle>{ providedCategory ? "Edit" : "Add" } Category</DialogTitle>
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
              <InputLabel id="category-color">Color</InputLabel>
              <Select
                labelId="category-color"
                id="category-color-select"
                value={ color }
                onChange={ it => setColor(it.target.value as string) }
              >
                { colors.map(c => (
                  <MenuItem value={ c }>
                    <Typography style={ { color: c } }>
                      { c }
                    </Typography>
                  </MenuItem>
                )) }
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="category-icon">Icon</InputLabel>
              <Select
                labelId="category-icon"
                id="category-icon-select"
                value={ icon }
                onChange={ it => setIcon(it.target.value as string) }
              >
                { icons.map(i => (
                  <MenuItem value={ i }>
                    <Grid container spacing={ 1 } alignItems="center">
                      <Grid item><Icon fontSize="small">{ i }</Icon></Grid>
                      <Grid item>{ i }</Grid>
                    </Grid>
                  </MenuItem>
                )) }
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            { deleteButton() }
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
