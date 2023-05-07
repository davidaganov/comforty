export interface Category {
  id: number
  title: { [key: string]: string }
  productsCount: number
  cover: string
  link: string
}

export interface PromoProduct {
  id: number
  title: { [key: string]: string }
  subtitle: { [key: string]: string }
  img: string
  slug: string
  discount: number
}

export interface Product {
  id: number
  title: { [key: string]: string }
  cover: string
  gallery: string[]
  description: { [key: string]: string }
  slug: string
  category: string
  attr: { [key: string]: boolean }
  price: {
    regular: number
    discount?: number | null
  }
}

export interface SortingTag {
  id: number
  slug: string
  tag: { [key: string]: string }
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
  userName: { [key: string]: string }
  job: { [key: string]: string }
}
