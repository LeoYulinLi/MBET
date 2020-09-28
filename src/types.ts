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

// https://casesandberg.github.io/react-color/
export const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#1776d7",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#3e951b",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
  "#000000"
]

export const icons = [
  "account_balance",
  "access_time",
  "audiotrack",
  "attachment",
  "book",
  "build",
  "check",
  "clear",
  "cloud",
  "create",
  "directions_bus",
  "directions_car",
  "flight_takeoff",
  "kitchen",
  "laptop_mac",
  "local_parking",
  "local_pizza",
  "location_on",
  "music_note",
  "navigation",
  "payment",
  "person",
  "pets",
  "phone_android",
  "poll",
  "print",
  "sim_card",
  "star",
  "videogame_asset",
  "visibility",
  "work"
]
