import { AccountActionTypes } from "./accountActions";
import { Account } from "../../types";

export default function (state: Record<number, Account> = {}, action: AccountActionTypes): Record<number, Account> {
  switch (action.type) {
    case "CREATE_ACCOUNT":
      const id = Math.random()
      return { ...state, [id]: { ...action.account, id } }
    case "EDIT_ACCOUNT":
      return { ...state, [action.account.id]: action.account }
    case "DELETE_ACCOUNT":
      const copy = { ...state }
      delete copy[action.accountId]
      return copy
    default:
      return state
  }
}
