import { Expense, NewExpense } from "../../types";

export const CREATE_EXPENSE = "CREATE_EXPENSE"
export const EDIT_EXPENSE = "EDIT_EXPENSE"
export const DELETE_EXPENSE = "DELETE_EXPENSE"

interface CreateExpenseAction {
  type: typeof CREATE_EXPENSE
  expense: NewExpense
}

interface EditExpense {
  type: typeof EDIT_EXPENSE
  expense: Expense
}

interface DeleteExpense {
  type: typeof DELETE_EXPENSE
  expenseId: number
}

export function createExpense(expense: NewExpense): CreateExpenseAction {
  return {
    type: CREATE_EXPENSE,
    expense
  }
}

export function editExpense(expense: Expense): EditExpense {
  return {
    type: EDIT_EXPENSE,
    expense
  }
}

export function deleteExpense(expenseId: number): DeleteExpense {
  return {
    type: DELETE_EXPENSE,
    expenseId
  }
}


export type ExpenseActionTypes = CreateExpenseAction | EditExpense | DeleteExpense
