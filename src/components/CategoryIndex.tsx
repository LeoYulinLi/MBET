import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import React from "react";
import CategoryCard from "./CategoryCard";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { openEditCategory } from "../states/ui/uiActions";

export default function CategoryIndex() {

  const categories = useSelector((state: RootState) => {
    return state.categories
  })

  const dispatch = useDispatch()

  return (
    <Box m={4}>
      <Grid container spacing={ 2 } justify="space-between">
        <Grid item>
          <Typography variant="h4">Categories</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" onClick={ () => dispatch(openEditCategory()) }>
            New Category
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={ 2 }>
        { Object.entries(categories).map(([id, category]) => (
          <CategoryCard category={ category } key={ id } />
        )) }
      </Grid>
    </Box>
  )

}
