import type { Product, Products, RequestProducts } from "../interfaces"
import { collection, getDocs, query, where, limit, startAfter, orderBy } from "firebase/firestore"
import { db } from "./index"

export const getCollection = async ({ name }: { name: string }) => {
  // console.log(name)
  const response = await getDocs(query(collection(db, name)))
  const array: any[] = []

  response.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })

  return array
}

export const getProduct = async ({ slug }: { slug: string }): Promise<Product> => {
  const response = await getDocs(query(collection(db, "products"), where("slug", "==", slug)))

  return { id: response.docs[0].id, ...response.docs[0].data() } as Product
}

export const getProducts = async ({
  category,
  attr,
  count = 10,
  page = 1
}: RequestProducts): Promise<Products> => {
  try {
    const array: Product[] = []
    const products = collection(db, "products")
    let request = query(products)

    // Add filters to the query based on category and attr parameters, if provided

    if (category) request = query(request, where("category", "==", category))
    if (attr) request = query(request, where(`attr.${attr}`, "==", true))

    // Get the total number of documents matching the query
    const totalSnapshot = await getDocs(request)
    const total = totalSnapshot.size

    // Query for a specific page of products based on count and page parameters
    const q = query(request, orderBy("createdAt"), limit(count * page))
    const querySnapshot = await getDocs(q)

    // Retrieve the starting document for the next page
    const startAtDoc = querySnapshot.docs[(page - 2) * count]

    let nextQ
    if (page === 1) {
      nextQ = query(request, orderBy("createdAt"), limit(count))
    } else {
      nextQ = query(request, orderBy("createdAt"), startAfter(startAtDoc), limit(count))
    }

    const nextSnapshot = await getDocs(nextQ)

    // Iterate over the documents in the nextSnapshot and add them to the array
    nextSnapshot.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() } as Product)
    })

    const pagination = {
      count: array.length,
      total,
      per_page: count,
      page,
      pages: Math.ceil(total / count)
    }

    const result = {
      data: array,
      pagination
    }

    return result
  } catch (error) {
    console.log("Error when receiving data:", error)

    return {
      data: [],
      pagination: {
        count: 0,
        total: 0,
        per_page: count,
        page,
        pages: 0
      }
    }
  }
}
