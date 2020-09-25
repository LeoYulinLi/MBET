import { Account } from "../../types";
import { CategoryActionTypes } from "./categoryActions";

export default function (state: Record<number, Account>, action: CategoryActionTypes) {
  switch (action.type) {
    case "CREATE_CATEGORY":
    case "EDIT_CATEGORY":
      return { ...state, [action.category.id]: action }
    case "DELETE_CATEGORY":
      const copy = { ...state }
      delete copy[action.categoryId]
      return copy
  }
}
