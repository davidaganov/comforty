import { defineStore } from "pinia"
import type { NavbarItem, Product } from "@/interfaces"

export const useStore = defineStore("shop", {
  state: () => ({
    navbar: [
      { id: 1, name: { en: "Home", ru: "Главная" }, link: "home" },
      { id: 3, name: { en: "Products", ru: "Продукты" }, link: "products" },
      { id: 4, name: { en: "Reviews", ru: "Отзывы" }, anchor: "#reviews" },
      { id: 5, name: { en: "Contact", ru: "Контакты" }, anchor: "#footer" }
    ] as NavbarItem[],
    products: [
      {
        id: 1,
        name: { en: "Product #1", ru: "Продукт #1" },
        image: "pic-1.jpg",
        slug: "product-1",
        category: "products",
        attr: { newest: true, trending: false, bestsellers: false, featured: true },
        price: { regular: 15, discount: 10 }
      },
      {
        id: 2,
        name: { en: "Product #2", ru: "Продукт #2" },
        image: "pic-1.jpg",
        slug: "product-2",
        category: "products",
        attr: { newest: true, trending: false, bestsellers: false, featured: true },
        price: { regular: 15 }
      },
      {
        id: 3,
        name: { en: "Product #3", ru: "Продукт #3" },
        image: "pic-1.jpg",
        slug: "product-3",
        category: "products",
        attr: { newest: false, trending: false, bestsellers: false, featured: true },
        price: { regular: 15, discount: 17 }
      },
      {
        id: 4,
        name: { en: "Product #4", ru: "Продукт #4" },
        image: "pic-1.jpg",
        slug: "product-4",
        category: "products",
        attr: { newest: false, trending: false, bestsellers: false, featured: true },
        price: { regular: 15 }
      }
    ] as Product[]
  }),
  getters: {
    getNavbar: (state) => state.navbar,
    getProducts: (state) => state.products
  }
})
