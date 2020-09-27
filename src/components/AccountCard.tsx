import React from "react";
import { Account } from "../types";
import { Card, CardContent, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";

interface AccountProps {
  account: Account
}

export default function AccountCard({ account }: AccountProps) {
  return (
    <Box m={1}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5">
              { account.title }
            </Typography>
            <Typography variant="subtitle2">{ account.type }</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}
