import { Category, NewCategory } from "../../types";

export const CREATE_CATEGORY = "CREATE_CATEGORY"
export const EDIT_CATEGORY = "EDIT_CATEGORY"
export const DELETE_CATEGORY = "DELETE_CATEGORY"

interface CreateCategoryAction {
  type: typeof CREATE_CATEGORY
  category: NewCategory
}

interface EditCategory {
  type: typeof EDIT_CATEGORY
  category: Category
}

interface DeleteCategory {
  type: typeof DELETE_CATEGORY
  categoryId: number
}

export function createCategory(category: NewCategory): CreateCategoryAction {
  return {
    type: CREATE_CATEGORY,
    category
  }
}

export function editCategory(category: Category): EditCategory {
  return {
    type: EDIT_CATEGORY,
    category
  }
}

export function deleteCategory(categoryId: number): DeleteCategory {
  return {
    type: DELETE_CATEGORY,
    categoryId
  }
}


export type CategoryActionTypes = CreateCategoryAction | EditCategory | DeleteCategory
