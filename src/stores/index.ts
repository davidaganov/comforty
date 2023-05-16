import type {
  Category,
  PromoProduct,
  Product,
  Company,
  Review,
  Tag,
  Shopping,
  Request
} from "../interfaces"

import { defineStore } from "pinia"
import { getCollection } from "../services/getCollection"

export const useStore = defineStore("shop", {
  state: () => ({
    categories: [] as Category[],
    promoProducts: [] as PromoProduct[],
    tags: [] as Tag[],
    companies: [] as Company[],
    reviews: [] as Review[],

    cart: [] as Product[],
    favorites: [] as Product[],
    selectedCategory: "all",
    selectedTag: "all"
  }),

  getters: {
    getCategories: (state) => state.categories,
    getPromoProducts: (state) => state.promoProducts,
    getTags: (state) => state.tags,
    getCompanies: (state) => state.companies,
    getReviews: (state) => state.reviews,
    getCart: (state) => state.cart,
    getFavorites: (state) => state.favorites,
    getSelectedTag: (state) => state.selectedTag,
    getSelectedCategory: (state) => state.selectedCategory
  },

  actions: {
    // Fetch reviews
    async fetchReviews() {
      if (this.reviews.length === 0) {
        this.reviews = await getCollection({ name: "reviews" })
      }
    },

    // Fetch companies
    async fetchCompanies() {
      if (this.companies.length === 0) {
        this.companies = await getCollection({ name: "companies" })
      }
    },

    // Fetch categories
    async fetchCategories() {
      if (this.categories.length === 0) {
        this.categories = (await getCollection({ name: "categories" })).sort(
          (a: Category, b: Category) => (a.slug === "all" ? -1 : b.slug === "all" ? 1 : 0)
        )
      }
    },

    // Fetch tags
    async fetchTags() {
      if (this.tags.length === 0) {
        this.tags = (await getCollection({ name: "tags" })).sort((a: Tag, b: Tag) =>
          a.slug === "all" ? -1 : b.slug === "all" ? 1 : 0
        )
      }
    },

    // Fetch promo products
    async fetchPromoProducts() {
      if (this.promoProducts.length === 0) {
        this.promoProducts = await getCollection({ name: "promoProducts" })
      }
    },

    // Checked product in cart or favorites
    isProduct(slug: string, state: Shopping): boolean {
      return this[state].some((list) => list.slug === slug)
    },

    // Added to cart or favorites
    async addProduct(slug: string, state: Shopping): Promise<void> {
      const product = await getCollection({ name: "products", slug })
      this[state].push(product)
    },

    // Removed from cart or favorites
    deleteProduct(slug: string, state: Shopping): void {
      this[state] = this[state].filter((list) => list.slug !== slug)
    },

    // Toggle product in cart or favorites
    toggleProduct(slug: string, state: Shopping): void {
      this.isProduct(slug, state) ? this.deleteProduct(slug, state) : this.addProduct(slug, state)
    },

    // Clear cart
    clearCart(): void {
      this.cart = []
    },

    // Clear favorites
    clearFavorites(): void {
      this.favorites = []
    },

    // Get current product
    async getProduct(slug: string) {
      return await getCollection({ name: "products", slug })
    },

    // Set current tag
    setSelectedTag(tag: string) {
      this.selectedTag = tag
    },

    // Checked current tag
    isSelectedTag(tag: string) {
      return this.selectedTag === tag
    },

    // Get name current tag
    getTitleSelectedTag() {
      return this.tags.find((tag) => tag.slug === this.selectedTag)?.tag
    },

    // Set current category
    setSelectedCategory(category: string) {
      this.selectedCategory = category
    },

    // Checked current category
    isSelectedCategory(category: string) {
      return this.selectedCategory === category
    },

    // Get name current category
    getTitleSelectedCategory() {
      return this.categories.find((category) => category.slug === this.selectedCategory)?.title
    },

    // Get current sorting products
    async getSortingProducts({ attr, category }: Request): Promise<Product[]> {
      const selectedTag = attr ?? this.selectedTag
      const selectedCategory = category ?? this.selectedCategory

      return await getCollection({
        name: "products",
        category: selectedCategory !== "all" ? selectedCategory : undefined,
        attr: selectedTag !== "all" ? selectedTag : undefined
      })
    }
  },

  persist: {
    // Then remove everything except Cart and Favorites
    paths: ["cart", "favorites", "categories", "promoProducts", "tags", "companies", "reviews"]
  }
})
