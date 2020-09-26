import React from "react";
import { Account } from "../types";
import { Card, CardContent, Typography } from "@material-ui/core";

interface AccountProps {
  account: Account
}

export default function AccountCard({ account }: AccountProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          { account.title }
        </Typography>
        <Typography>{ account.type }</Typography>
      </CardContent>
    </Card>
  )
}
