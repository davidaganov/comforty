import type { Request } from "../interfaces"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "./index"

interface Params extends Request {
  name: string
}

export const getCollection = async ({ name, category, attr, slug }: Params) => {
  console.log(name === "products" ? `${name} category: ${category} tag: ${attr}` : name)
  let q = query(collection(db, name))

  if (category) q = query(q, where("category", "==", category))
  if (attr) q = query(q, where(`attr.${attr}`, "!=", false))
  if (slug) q = query(q, where("slug", "==", slug))

  const querySnapshot = await getDocs(q)

  const array: any[] = []

  querySnapshot.forEach((doc) => {
    array.push({ ...doc.data(), id: doc.id })
  })

  return slug ? array[0] : array
}
