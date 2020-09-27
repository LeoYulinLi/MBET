import { combineReducers } from "redux";
import accountReducer from "./account/accountReducer";
import categoryReducer from "./category/categoryReducer";
import expenseReducer from "./expense/expenseReducer";
import uiReducer from "./ui/uiReducer";

export const rootReducer = combineReducers({
  accounts: accountReducer,
  categories: categoryReducer,
  expenses: expenseReducer,
  ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>

