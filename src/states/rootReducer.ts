import { combineReducers } from "redux";
import accountReducer from "./account/accountReducer";
import categoryReducer from "./category/categoryReducer";
import expenseReducer from "./expense/expenseReducer";

export const rootReducer = combineReducers({
  accounts: accountReducer,
  categories: categoryReducer,
  expenses: expenseReducer
})

export type RootState = ReturnType<typeof rootReducer>

