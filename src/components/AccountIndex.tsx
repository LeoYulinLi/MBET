import { useSelector } from "react-redux";
import { RootState } from "../states/rootReducer";
import React from "react";
import AccountCard from "./AccountCard";

export default function AccountIndex() {
  const accounts = useSelector((state: RootState) => {
    return state.accounts
  })

  return (
    <>
      { Object.entries(accounts).map(([id, account]) => (
        <AccountCard account={ account } key={ id } />
      )) }
    </>
  )

}
