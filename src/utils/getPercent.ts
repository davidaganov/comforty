import { getDivisors } from "./getDivisors"

export const getPercent = (price: number, discount: number): string => {
  return getDivisors(Math.round(price + price * (discount / 100)))
}
