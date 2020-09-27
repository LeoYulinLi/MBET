export const ADD_EXPENSE = "ADD_EXPENSE"

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE
  opened: boolean
}

export function openAddExpense(): AddExpenseAction {
  return {
    type: ADD_EXPENSE,
    opened: true
  }
}

export function closeAddExpense(): AddExpenseAction {
  return {
    type: ADD_EXPENSE,
    opened: false
  }
}
