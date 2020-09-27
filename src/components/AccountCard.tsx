import React from "react";
import { Account } from "../types";
import { Card, CardContent, getContrastRatio, Typography } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import styled from "@material-ui/core/styles/styled";
import Icon from "@material-ui/core/Icon";

interface AccountProps {
  account: Account
}

export default function AccountCard({ account }: AccountProps) {

  const BankCard = styled(Card)({
    background: account.color,
    color: getContrastRatio("#000", account.color) < 5 ? "white" : "black"
  })

  return (
    <Grid item xs={12} md={6}>
      <BankCard>
        <CardActionArea>
          <CardContent>
            <Grid container justify="space-between" spacing={1}>
              <Grid item xs={9}>
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
              <Grid item xs={3}>
                <Typography variant="h5" align="right">$1000</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </BankCard>
    </Grid>
  )
}
