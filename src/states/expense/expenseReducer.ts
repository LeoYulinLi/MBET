import { Expense } from "../../types";
import { ExpenseActionTypes } from "./expenseActions";

export default function (state: Record<number, Expense> = {}, action: ExpenseActionTypes) {
  switch (action.type) {
    case "CREATE_EXPENSE":
      const id = Math.random()
      return { ...state, [id]: { action, id } }
    case "EDIT_EXPENSE":
      return { ...state, [action.expense.id]: action }
    case "DELETE_EXPENSE":
      const copy = { ...state }
      delete copy[action.expenseId]
      return copy
  }
}
