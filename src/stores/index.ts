import type {
  Category,
  PromoProduct,
  Product,
  Company,
  Review,
  Tag,
  Shopping,
  Pagination,
  Products,
  RequestProducts
} from "../interfaces"

import { defineStore } from "pinia"
import { getCollection, getProduct, getProducts } from "../services/getCollection"

export const useStore = defineStore("shop", {
  state: () => ({
    categories: [] as Category[],
    promoProducts: [] as PromoProduct[],
    tags: [] as Tag[],
    companies: [] as Company[],
    reviews: [] as Review[],

    cart: [] as Product[],
    favorites: [] as Product[],
    pagination: {} as Pagination,
    selectedCategory: "all",
    selectedTag: "all",
    currentPage: 1
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
    getSelectedCategory: (state) => state.selectedCategory,
    getCurrentPage: (state) => state.currentPage,
    getPagination: (state) => state.pagination
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

    // Added to cart or favorites
    async addProduct(slug: string, state: Shopping): Promise<void> {
      const product = await getProduct({ slug })

      this[state].push(product)
    },

    // Get current product
    async getCurrentProduct(slug: string): Promise<Product> {
      return await getProduct({ slug })
    },

    // Get sorting products
    async getSortingProducts({
      attr,
      category,
      count,
      page,
      pagination = false
    }: RequestProducts): Promise<Product[] | Products> {
      const selectedTag = attr ?? this.selectedTag
      const selectedCategory = category ?? this.selectedCategory

      const products = await getProducts({
        category: selectedCategory !== "all" ? selectedCategory : undefined,
        attr: selectedTag !== "all" ? selectedTag : undefined,
        count,
        page
      })

      if (pagination) this.pagination = products.pagination

      return pagination ? products : products.data
    },

    // Checked product in cart or favorites
    isProduct(slug: string, state: Shopping): boolean {
      return this[state].some((list) => list.slug === slug)
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

    // Set current tag
    setSelectedTag(tag: string): void {
      this.selectedTag = tag
    },

    // Checked current tag
    isSelectedTag(tag: string): boolean {
      return this.selectedTag === tag
    },

    // Get name current tag
    getTitleSelectedTag(): Record<string, string> | undefined {
      return this.tags.find((tag) => tag.slug === this.selectedTag)?.tag
    },

    // Set current category
    setSelectedCategory(category: string): void {
      this.selectedCategory = category
    },

    // Checked current category
    isSelectedCategory(category: string): boolean {
      return this.selectedCategory === category
    },

    // Set current page
    setCurrentPage(page: number): void {
      this.currentPage = page
    },

    // Get name current category
    getTitleCategory(category?: string): Record<string, string> | undefined {
      const selectedCategory = category ? category : this.selectedCategory

      return this.categories.find((item) => item.slug === selectedCategory)?.title
    }
  },

  persist: {
    // Then remove everything except Cart and Favorites
    paths: ["cart", "favorites"]
  }
})
