import { Expense } from "../../types";

export const ADD_EXPENSE = "ADD_EXPENSE"

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
