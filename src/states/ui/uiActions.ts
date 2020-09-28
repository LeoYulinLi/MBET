import { Account, Category, Expense } from "../../types";

export const ADD_EXPENSE = "ADD_EXPENSE"
export const OPEN_EDIT_ACCOUNT = "OPEN_EDIT_ACCOUNT"
export const OPEN_EDIT_CATEGORY = "OPEN_EDIT_CATEGORY"

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE
  action: {
    opened: boolean,
    providedExpense?: Expense
  }
}

export function openAddExpense(providedExpense?: Expense): AddExpenseAction {
  return {
    type: ADD_EXPENSE,
    action: {
      opened: true,
      providedExpense
    }
  }
}

export function closeAddExpense(): AddExpenseAction {
  return {
    type: ADD_EXPENSE,
    action: {
      opened: false
    }
  }
}

export interface EditAccountAction {
  type: typeof OPEN_EDIT_ACCOUNT
  action: {
    opened: boolean,
    providedAccount?: Account
  }
}

export function openEditAccount(providedAccount?: Account) {
  return {
    type: OPEN_EDIT_ACCOUNT,
    action: {
      opened: true,
      providedAccount
    }
  }
}

export function closeEditAccount() {
  return {
    type: OPEN_EDIT_ACCOUNT,
    action: {
      opened: false
    }
  }
}

export interface EditCategoryAction {
  type: typeof OPEN_EDIT_CATEGORY
  action: {
    opened: boolean,
    providedCategory?: Category
  }
}

export function openEditCategory(providedCategory?: Category) {
  return {
    type: OPEN_EDIT_CATEGORY,
    action: {
      opened: true,
      providedCategory
    }
  }
}

export function closeEditCategory() {
  return {
    type: OPEN_EDIT_CATEGORY,
    action: {
      opened: false
    }
  }
}

export type UIActionType = AddExpenseAction | EditAccountAction | EditCategoryAction
