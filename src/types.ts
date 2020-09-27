export interface Account {
  id: number
  title: string
  color: string
  icon: string
  type: string
}

export type NewAccount = Omit<Account, "id">

export interface Category {
  id: number
  title: string
  color: string
  icon: string
}

export type NewCategory = Omit<Category, "id">

export interface Expense {
  id: number
  title: string
  amount: number
  date: Date
  accountId: number
  categoryId: number
}

export type NewExpense = Omit<Expense, "id">
