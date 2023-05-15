import type { Category, PromoProduct, Product, Company, Review, Tag, Shopping } from "../interfaces"
import { defineStore } from "pinia"

import { getCollection } from "../services/getCollection"

export const useStore = defineStore("shop", {
  state: () => ({
    categories: [] as Category[],
    promoProducts: [] as PromoProduct[],
    products: [
      {
        id: 1,
        title: { en: "Sleek metal chair", ru: "Стул из элегантного металла" },
        cover: "pic-2.jpg",
        gallery: ["pic-2.jpg", "pic-3.jpg", "pic-1.jpg", "pic-7.jpg"],
        description: {
          en: "Modern and sleek chair with a durable metal frame and cushioned seat for added comfort.",
          ru: "Современный и элегантный стул с прочной металлической рамой и мягким сиденьем для дополнительного комфорта."
        },
        slug: "product-1",
        category: "sofa",
        attr: { newest: true, trending: false, bestsellers: false, featured: false },
        price: { regular: 190, discount: 10 }
      },
      {
        id: 2,
        title: { en: "Adjustable ergonomic chair", ru: "Регулируемый эргономичный стул" },
        cover: "pic-3.jpg",
        gallery: ["pic-3.jpg", "pic-7.jpg"],
        description: {
          en: "Ergonomic chair with adjustable height and backrest, perfect for long hours of sitting.",
          ru: "Эргономичный стул с регулируемой высотой и спинкой, идеальный для длительного сидения."
        },
        slug: "product-2",
        category: "woodenchair",
        attr: { newest: false, trending: false, bestsellers: false, featured: true },
        price: { regular: 290 }
      },
      {
        id: 3,
        title: { en: "Stylish compact chair", ru: "Стильный компактный стул" },
        cover: "pic-7.jpg",
        gallery: ["pic-7.jpg", "pic-4.jpg", "pic-5.jpg"],
        description: {
          en: "Stylish and compact chair, ideal for small spaces or as a dining chair.",
          ru: "Стильный и компактный стул, идеально подходящий для маленьких пространств или как обеденный стул."
        },
        slug: "product-3",
        category: "woodenchair",
        attr: { newest: false, trending: false, bestsellers: false, featured: true },
        price: { regular: 1500, discount: 55 }
      },
      {
        id: 4,
        title: {
          en: "Wooden upholstered chair",
          ru: "Стул с обитым сиденьем"
        },
        cover: "pic-6.jpg",
        gallery: ["pic-6.jpg", "pic-5.jpg", "pic-4.jpg", "pic-3.jpg", "pic-1.jpg"],
        description: {
          en: "Comfortable and sturdy chair with a wooden frame and upholstered seat.",
          ru: "Удобный и прочный стул с деревянной рамой и обитым сиденьем."
        },
        slug: "product-4",
        category: "wingchair",
        attr: { newest: false, trending: false, bestsellers: false, featured: true },
        price: { regular: 690 }
      },
      {
        id: 5,
        title: {
          en: "Vintage-Inspired distressed chair",
          ru: "Стул в стиле винтаж с потертой отделкой"
        },
        cover: "pic-3.jpg",
        gallery: ["pic-3.jpg", "pic-1.jpg"],
        description: {
          en: "Vintage-inspired chair with a distressed finish, perfect for adding character to your space.",
          ru: "Стул в стиле винтаж с потертой отделкой, идеально подходящий для придания характера вашему пространству."
        },
        slug: "product-5",
        category: "deskchair",
        attr: { newest: true, trending: false, bestsellers: true, featured: false },
        price: { regular: 450, discount: 15 }
      },
      {
        id: 6,
        title: { en: "Stackable lightweight chair", ru: "Легкий и складной стул" },
        cover: "pic-5.jpg",
        gallery: ["pic-5.jpg"],
        description: {
          en: "Stackable and lightweight chair, easy to store and move around.",
          ru: "Стул, легкий и складной, легко хранить и перемещать."
        },
        slug: "product-6",
        category: "parkbench",
        attr: { newest: true, trending: false, bestsellers: false, featured: false },
        price: { regular: 290, discount: 30 }
      },
      {
        id: 7,
        title: { en: "Adjustable swivel office chair", ru: "Регулируемое стул-кресло для офиса" },
        cover: "pic-1.jpg",
        gallery: ["pic-1.jpg", "pic-7.jpg"],
        description: {
          en: "Adjustable swivel chair with a breathable mesh backrest, ideal for office use.",
          ru: "Регулируемый стул-кресло с дышащей сетчатой спинкой, идеально подходящий для использования в офисе."
        },
        slug: "product-7",
        category: "armchair",
        attr: { newest: false, trending: true, bestsellers: true, featured: false },
        price: { regular: 1700, discount: 20 }
      },
      {
        id: 8,
        title: {
          en: "Minimalist chair with clean lines",
          ru: "Минималистический стул с чистыми линиями"
        },
        cover: "pic-5.jpg",
        gallery: ["pic-5.jpg", "pic-6.jpg", "pic-7.jpg"],
        description: {
          en: "Minimalist chair with clean lines and a simple design, suitable for any decor style.",
          ru: "Минималистический стул с чистыми линиями и простым дизайном, подходящий для любого стиля декора."
        },
        slug: "product-8",
        category: "wingchair",
        attr: { newest: false, trending: true, bestsellers: false, featured: true },
        price: { regular: 90 }
      },
      {
        id: 9,
        title: { en: "Luxurious velvet chair", ru: "Роскошный стул из бархата" },
        cover: "pic-4.jpg",
        gallery: ["pic-4.jpg", "pic-5.jpg", "pic-3.jpg", "pic-1.jpg"],
        description: {
          en: "Luxurious chair with a soft velvet upholstery and gold-plated metal legs.",
          ru: "Роскошный стул с мягкой бархатной обивкой и золотистыми металлическими ножками."
        },
        slug: "product-9",
        category: "armchair",
        attr: { newest: true, trending: false, bestsellers: false, featured: false },
        price: { regular: 360 }
      },
      {
        id: 10,
        title: { en: "Rustic wooden chair", ru: "Стул из массива дерева" },
        cover: "pic-2.jpg",
        gallery: ["pic-2.jpg", "pic-5.jpg", "pic-7.jpg", "pic-3.jpg"],
        description: {
          en: "Rustic wooden chair with a sturdy frame and a distressed finish, perfect for farmhouse-style interiors.",
          ru: "Стул из массива дерева с прочной рамой и потертой отделкой, идеально подходящий для интерьеров в стиле фермхаус."
        },
        slug: "product-10",
        category: "parkbench",
        attr: { newest: false, trending: false, bestsellers: true, featured: false },
        price: { regular: 550 }
      },
      {
        id: 11,
        title: { en: "Versatile Chair", ru: "Универсальный стул" },
        cover: "pic-6.jpg",
        gallery: ["pic-6.jpg"],
        description: {
          en: "Versatile chair that can be used as a dining chair, desk chair, or accent chair in any room.",
          ru: "Универсальный стул, который можно использовать как обеденный стул, стул для рабочего стола или акцентный стул в любой комнате."
        },
        slug: "product-11",
        category: "armchair",
        attr: { newest: false, trending: true, bestsellers: false, featured: true },
        price: { regular: 150, discount: 22 }
      },
      {
        id: 12,
        title: { en: "Comfortable Armchair", ru: "Удобное кресло" },
        cover: "pic-7.jpg",
        gallery: ["pic-7.jpg", "pic-4.jpg", "pic-3.jpg", "pic-2.jpg"],
        description: {
          en: "Modern and comfortable armchair with a padded seat and backrest, perfect for relaxing.",
          ru: "Современное и комфортабельное кресло с мягким сиденьем и спинкой, идеально подходящее для отдыха."
        },
        slug: "product-12",
        category: "sofa",
        attr: { newest: true, trending: false, bestsellers: false, featured: false },
        price: { regular: 350 }
      }
    ] as Product[],
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
    getProducts: (state) => state.products,
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
      if (this.reviews.length === 0) this.reviews = await getCollection("reviews")
    },

    // Fetch companies
    async fetchCompanies() {
      if (this.companies.length === 0) this.companies = await getCollection("companies")
    },

    // Fetch categories
    async fetchCategories() {
      if (this.categories.length === 0) this.categories = await getCollection("categories")
    },

    // Fetch tags
    async fetchTags() {
      if (this.tags.length === 0) this.tags = await getCollection("tags")
    },

    // Fetch promo products
    async fetchPromoProducts() {
      if (this.promoProducts.length === 0) this.promoProducts = await getCollection("promoProducts")
    },

    // Checked product in cart or favorites
    isProduct(productId: number, state: Shopping): boolean {
      return this[state].some((list) => list.id === productId)
    },

    // Added to cart or favorites
    addProduct(productId: number, state: Shopping): void {
      console.log("added: ", productId)
      const product = this.products.filter((list) => list.id === productId)
      this[state].push(product[0])
    },

    // Removed from cart or favorites
    deleteProduct(productId: number, state: Shopping): void {
      console.log("remove: ", productId)
      this[state] = this[state].filter((list) => list.id !== productId)
    },

    // Toggle product in cart or favorites
    toggleProduct(productId: number, state: Shopping): void {
      console.log("toggle: ", productId)
      this.isProduct(productId, state)
        ? this.deleteProduct(productId, state)
        : this.addProduct(productId, state)
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
    getProduct(slug: string) {
      return this.products.find((product) => product.slug === slug)
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
    getSortingProducts({ tag, category }: { tag?: string; category?: string }): Product[] {
      const selectedTag = tag ?? this.selectedTag
      const selectedCategory = category ?? this.selectedCategory

      const filteredProducts = this.products.filter((product) => {
        const hasTag = selectedTag === "all" || product.attr[selectedTag]
        const hasCategory = selectedCategory === "all" || product.category === selectedCategory
        return hasTag && hasCategory
      })

      return filteredProducts
    }
  },

  persist: {
    // Then remove everything except Cart and Favorites
    paths: ["cart", "favorites", "categories", "promoProducts", "tags", "companies", "reviews"]
  }
})
