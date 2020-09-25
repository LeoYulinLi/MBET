export interface Account {
  id: number
  title: string
  color: string
  icon: string
  type: string
}

export interface Category {
  id: number
  title: string
  color: string
  icon: string
}

export interface Expense {
  id: number
  amount: number
  date: Date
  accountId: number
  categoryId: number
}
