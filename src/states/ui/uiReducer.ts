import { AddExpenseAction } from "./uiActions";
import { combineReducers } from "redux";

function addExpenseReducer(state: boolean = false, action: AddExpenseAction) {
  if (action.type === "ADD_EXPENSE") {
    return action.opened
  } else {
    return state
  }
}

const uiReducer = combineReducers({
  addExpense: addExpenseReducer
})

export default uiReducer
