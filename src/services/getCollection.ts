import { collection, getDocs } from "firebase/firestore"
import { db } from "./index"

export const getCollection = async (name: string) => {
  console.log(name)

  const querySnapshot = await getDocs(collection(db, name))
  const array: any[] = []

  querySnapshot.forEach((doc) => {
    array.push({ ...doc.data(), id: doc.id })
  })
  return array
}
