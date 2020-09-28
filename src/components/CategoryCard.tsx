import React from "react";
import { Category } from "../types";
import { Card, CardContent, getContrastRatio, Typography } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import styled from "@material-ui/core/styles/styled";
import Icon from "@material-ui/core/Icon";
import { useDispatch } from "react-redux";
import { openEditCategory } from "../states/ui/uiActions";

interface CategoryProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryProps) {

  const dispatch = useDispatch()

  const BankCard = styled(Card)({
    background: category.color,
    color: getContrastRatio("#000", category.color) < 8 ? "white" : "black"
  })

  return (
    <Grid item xs={12} md={6}>
      <BankCard>
        <CardActionArea onClick={() => dispatch(openEditCategory(category))}>
          <CardContent>
            <Grid container justify="space-between" spacing={1}>
              <Grid item xs={12}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <Icon>{ category.icon }</Icon>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">
                      { category.title }
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </BankCard>
    </Grid>
  )
}
