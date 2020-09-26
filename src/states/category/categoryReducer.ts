import { Category } from "../../types";
import { CategoryActionTypes } from "./categoryActions";

export default function (state: Record<number, Category> = {}, action: CategoryActionTypes): Record<number, Category> {
  switch (action.type) {
    case "CREATE_CATEGORY":
      const id = Math.random()
      return { ...state, [id]: { ...action.category, id } }
    case "EDIT_CATEGORY":
      return { ...state, [action.category.id]: action.category }
    case "DELETE_CATEGORY":
      const copy = { ...state }
      delete copy[action.categoryId]
      return copy
    default:
      return state
  }
}
