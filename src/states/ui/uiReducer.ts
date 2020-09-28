import { AddExpenseAction, EditAccountAction, EditCategoryAction } from "./uiActions";
import { combineReducers } from "redux";
import { Account, Category, Expense } from "../../types";

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

function editAccountReducer(
  state: { opened: boolean, providedAccount?: Account } = { opened: false },
  action: EditAccountAction
): { opened: boolean, providedAccount?: Account} {
  if (action.type === "OPEN_EDIT_ACCOUNT") {
    return action.action
  } else {
    return state
  }
}

function editCategoryReducer(
  state: { opened: boolean, providedCategory?: Category } = { opened: false },
  action: EditCategoryAction
): { opened: boolean, providedCategory?: Category } {
  if (action.type === "OPEN_EDIT_CATEGORY") {
    return action.action
  } else {
    return state
  }
}

const uiReducer = combineReducers({
  addExpense: addExpenseReducer,
  editAccount: editAccountReducer,
  editCategory: editCategoryReducer
})

export default uiReducer
