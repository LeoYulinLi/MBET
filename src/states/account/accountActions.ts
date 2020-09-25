export const CREATE_ACCOUNT = "CREATE_ACCOUNT"
export const EDIT_ACCOUNT = "EDIT_ACCOUNT"
export const DELETE_ACCOUNT = "DELETE_ACCOUNT"
import { Account } from "../../types";

interface CreateAccountAction {
  type: typeof CREATE_ACCOUNT
  account: Account
}

interface EditAccount {
  type: typeof EDIT_ACCOUNT
  account: Pick<Account, "id"> & Partial<Account>
}

interface DeleteAccount {
  type: typeof DELETE_ACCOUNT
  accountId: number
}

export function createAccount(account: Account): CreateAccountAction {
  return {
    type: CREATE_ACCOUNT,
    account
  }
}

export function editAccount(account: Pick<Account, "id"> & Partial<Account>): EditAccount {
  return {
    type: EDIT_ACCOUNT,
    account
  }
}

export function deleteAccount(accountId: number): DeleteAccount {
  return {
    type: DELETE_ACCOUNT,
    accountId
  }
}


export type AccountActionTypes = CreateAccountAction | EditAccount | DeleteAccount
