export interface Category {
  id: number
  title: Record<string, string>
  productsCount: number
  cover: string
  slug: string
}

export interface PromoProduct {
  id: number
  title: Record<string, string>
  subtitle: Record<string, string>
  img: string
  slug: string
  discount: number
}

export interface Product {
  id: number
  title: Record<string, string>
  cover: string
  gallery: string[]
  description: Record<string, string>
  slug: string
  category: string
  attr: Record<string, boolean>
  price: {
    regular: number
    discount?: number | null
  }
}

export interface SortingTag {
  id: number
  slug: string
  tag: Record<string, string>
}

export interface Company {
  id: number
  name: string
  logo: string
}

export interface Review {
  id: number
  text: Record<string, string>
  avatar: string
  userName: Record<string, string>
  job: Record<string, string>
}

export interface Button {
  link?: string
  to?: string | { name: string; params?: any }
  type?: "button" | "submit" | "reset" | undefined
  appearance?: "primary" | "gray" | "white" | "ghost"
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
