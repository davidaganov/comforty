export interface Category {
  id: string
  title: Record<string, string>
  productsCount: number
  cover: string
  slug: string
}

export interface PromoProduct {
  id: string
  title: Record<string, string>
  subtitle: Record<string, string>
  img: string
  slug: string
  discount: number
}

export interface Product {
  id: string
  title: Record<string, string>
  cover: string
  gallery: string[]
  description?: Record<string, string>
  slug: string
  category: string
  attr: Record<string, boolean>
  price: {
    regular: number
    discount?: number | null
  }
}

export interface Tag {
  id: string
  slug: string
  tag: Record<string, string>
}

export interface Company {
  id: string
  name: string
  logo: string
}

export interface Review {
  id: string
  text: Record<string, string>
  avatar: string
  userName: Record<string, string>
  job: Record<string, string>
}

export interface Button {
  link?: string
  to?: string | { name: string; params?: any; query?: any }
  type?: "button" | "submit" | "reset" | undefined
  appearance?: "primary" | "gray" | "white" | "ghost" | "attention"
  arrow?: boolean
}

export interface Icon {
  iconName?: string
  iconColor?: string
  stroke?: boolean
  box?: string
  width?: number
  height?: number
}

export interface Pagination {
  count: number
  total: number
  per_page: number
  page: number
  pages: number
}

export interface Products {
  data: Product[]
  pagination: Pagination
}

export interface RequestProducts {
  slug?: string
  category?: string
  attr?: string
  count?: number
  page?: number
  pagination?: boolean
}

export type Shopping = "cart" | "favorites"
