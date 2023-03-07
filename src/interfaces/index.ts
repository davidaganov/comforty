export interface NavbarItem {
  id: number
  name: { [key: string]: string }
  link?: string
  anchor?: string
}

export interface Category {
  id: number
  name: { [key: string]: string }
  productsCount: number
  cover: string
  link: string
}

export interface Product {
  id: number
  name: { [key: string]: string }
  cover: string
  slug: string
  category: string
  attr: {
    newest: boolean
    trending: boolean
    bestsellers: boolean
    featured: boolean
  }
  price: {
    regular: number
    discount?: number
  }
}

export interface Company {
  id: number
  name: string
  logo: string
}

export interface Review {
  id: number
  text: { [key: string]: string }
  avatar: string
  name: { [key: string]: string }
  job: { [key: string]: string }
}
