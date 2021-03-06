import React from "react";
import { Account } from "../types";
import { Card, CardContent, getContrastRatio, Typography } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import styled from "@material-ui/core/styles/styled";
import Icon from "@material-ui/core/Icon";
import { useDispatch } from "react-redux";
import { openEditAccount } from "../states/ui/uiActions";

interface AccountProps {
  account: Account
}

export default function AccountCard({ account }: AccountProps) {

  const dispatch = useDispatch()

  const BankCard = styled(Card)({
    background: account.color,
    color: getContrastRatio("#000", account.color) < 8 ? "white" : "black"
  })

  return (
    <Grid item xs={12} md={6}>
      <BankCard>
        <CardActionArea onClick={() => dispatch(openEditAccount(account))}>
          <CardContent>
            <Grid container justify="space-between" spacing={1}>
              <Grid item xs={12}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <Icon>{ account.icon }</Icon>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">
                      { account.title }
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">{ account.type }</Typography>
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
