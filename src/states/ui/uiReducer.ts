import { AddExpenseAction } from "./uiActions";
import { combineReducers } from "redux";
import { Expense } from "../../types";

function addExpenseReducer(
  state: { opened: boolean, providedExpense?: Expense } = { opened: false },
  action: AddExpenseAction
) {
  if (action.type === "ADD_EXPENSE") {
    return action.action
  } else {
    return state
  }
}

const uiReducer = combineReducers({
  addExpense: addExpenseReducer
})

export default uiReducer
