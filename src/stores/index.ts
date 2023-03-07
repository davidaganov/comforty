import { defineStore } from "pinia"
import type { NavbarItem, Category, Product, Company } from "@/interfaces"

export const useStore = defineStore("shop", {
  state: () => ({
    navbar: [
      { id: 1, name: { en: "Home", ru: "Главная" }, link: "home" },
      { id: 3, name: { en: "Products", ru: "Продукты" }, link: "products" },
      { id: 4, name: { en: "Reviews", ru: "Отзывы" }, anchor: "#reviews" },
      { id: 5, name: { en: "Contact", ru: "Контакты" }, anchor: "#footer" }
    ] as NavbarItem[],
    categories: [
      {
        id: 1,
        name: { en: "Wing Chair", ru: "Кресла" },
        productsCount: 1204,
        cover: "cat-1.jpg",
        link: "wing"
      },
      {
        id: 2,
        name: { en: "Wooden Chair", ru: "Деревянные стулья" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "wooden"
      },
      {
        id: 3,
        name: { en: "Desk Chair", ru: "Офисные кресла" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "desk"
      },
      {
        id: 4,
        name: { en: "Park Bench", ru: "Скамейки" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "park"
      },
      {
        id: 5,
        name: { en: "Test 1", ru: "Тест 1" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "test-1"
      },
      {
        id: 6,
        name: { en: "Test 2", ru: "Тест 2" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "test-2"
      }
    ] as Category[],
    products: [
      {
        id: 1,
        name: { en: "Product #1", ru: "Продукт #1" },
        cover: "pic-1.jpg",
        slug: "product-1",
        category: "products",
        attr: { newest: true, trending: false, bestsellers: false, featured: true },
        price: { regular: 15, discount: 10 }
      },
      {
        id: 2,
        name: { en: "Product #2", ru: "Продукт #2" },
        cover: "pic-1.jpg",
        slug: "product-2",
        category: "products",
        attr: { newest: true, trending: false, bestsellers: false, featured: true },
        price: { regular: 15 }
      },
      {
        id: 3,
        name: { en: "Product #3", ru: "Продукт #3" },
        cover: "pic-1.jpg",
        slug: "product-3",
        category: "products",
        attr: { newest: false, trending: false, bestsellers: false, featured: true },
        price: { regular: 15, discount: 17 }
      },
      {
        id: 4,
        name: { en: "Product #4", ru: "Продукт #4" },
        cover: "pic-1.jpg",
        slug: "product-4",
        category: "products",
        attr: { newest: false, trending: false, bestsellers: false, featured: true },
        price: { regular: 15 }
      },
      {
        id: 5,
        name: { en: "Product #5", ru: "Продукт #5" },
        cover: "pic-1.jpg",
        slug: "product-5",
        category: "products",
        attr: { newest: true, trending: false, bestsellers: true, featured: false },
        price: { regular: 25, discount: 10 }
      },
      {
        id: 6,
        name: { en: "Product #6", ru: "Продукт #6" },
        cover: "pic-1.jpg",
        slug: "product-6",
        category: "products",
        attr: { newest: true, trending: false, bestsellers: false, featured: false },
        price: { regular: 10, discount: 2 }
      },
      {
        id: 7,
        name: { en: "Product #7", ru: "Продукт #7" },
        cover: "pic-1.jpg",
        slug: "product-7",
        category: "products",
        attr: { newest: false, trending: true, bestsellers: true, featured: false },
        price: { regular: 30, discount: 7 }
      },
      {
        id: 8,
        name: { en: "Product #8", ru: "Продукт #8" },
        cover: "pic-1.jpg",
        slug: "product-8",
        category: "products",
        attr: { newest: false, trending: true, bestsellers: false, featured: true },
        price: { regular: 20 }
      },
      {
        id: 9,
        name: { en: "Product #9", ru: "Продукт #9" },
        cover: "pic-1.jpg",
        slug: "product-9",
        category: "products",
        attr: { newest: true, trending: false, bestsellers: false, featured: false },
        price: { regular: 12 }
      },
      {
        id: 10,
        name: { en: "Product #10", ru: "Продукт #10" },
        cover: "pic-1.jpg",
        slug: "product-10",
        category: "products",
        attr: { newest: false, trending: false, bestsellers: true, featured: false },
        price: { regular: 18 }
      },
      {
        id: 11,
        name: { en: "Product #11", ru: "Продукт #11" },
        cover: "pic-1.jpg",
        slug: "product-11",
        category: "products",
        attr: { newest: false, trending: true, bestsellers: false, featured: true },
        price: { regular: 28, discount: 9 }
      },
      {
        id: 12,
        name: { en: "Product #12", ru: "Продукт #12" },
        cover: "pic-1.jpg",
        slug: "product-12",
        category: "products",
        attr: { newest: true, trending: false, bestsellers: false, featured: false },
        price: { regular: 8 }
      }
    ] as Product[],
    companies: [
      { id: 1, name: "Zapier", logo: "logo-1.jpg" },
      { id: 2, name: "Pipedrive", logo: "logo-2.jpg" },
      { id: 3, name: "CIB Bank", logo: "logo-3.jpg" },
      { id: 4, name: "Company", logo: "logo-4.jpg" },
      { id: 5, name: "Burnt Toast", logo: "logo-5.jpg" },
      { id: 6, name: "PandaDoc", logo: "logo-6.jpg" },
      { id: 7, name: "MOZ", logo: "logo-7.jpg" }
    ] as Company[]
  }),
  getters: {
    getNavbar: (state) => state.navbar,
    getCategories: (state) => state.categories,
    getProducts: (state) => state.products,
    getCompanies: (state) => state.companies
  }
})
