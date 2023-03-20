import { defineStore } from "pinia"
import type { Category, Product, Company, Review } from "../interfaces"

type State = "cart" | "favorites"

export const useStore = defineStore("shop", {
  state: () => ({
    categories: [
      {
        id: 1,
        title: { en: "Wing Chair", ru: "Кресла с подголовником" },
        productsCount: 1204,
        cover: "cat-1.jpg",
        link: "wingchair"
      },
      {
        id: 2,
        title: { en: "Wooden Chair", ru: "Деревянные стулья" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "woodenchair"
      },
      {
        id: 3,
        title: { en: "Desk Chair", ru: "Офисные кресла" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "deskchair"
      },
      {
        id: 4,
        title: { en: "Park Bench", ru: "Скамейки" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "parkbench"
      },
      {
        id: 5,
        title: { en: "Armchair", ru: "Кресла" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "armchair"
      },
      {
        id: 4,
        title: { en: "Sofa", ru: "Диваны" },
        productsCount: 1,
        cover: "cat-1.jpg",
        link: "sofa"
      }
    ] as Category[],
    products: [
      {
        id: 1,
        title: { en: "Product #1", ru: "Продукт #1" },
        cover: "pic-1.jpg",
        slug: "product-1",
        category: "sofa",
        attr: { newest: true, trending: false, bestsellers: false, featured: true },
        price: { regular: 15, discount: 10 }
      },
      {
        id: 2,
        title: { en: "Product #2", ru: "Продукт #2" },
        cover: "pic-1.jpg",
        slug: "product-2",
        category: "woodenchair",
        attr: { newest: true, trending: false, bestsellers: false, featured: true },
        price: { regular: 15 }
      },
      {
        id: 3,
        title: { en: "Product #3", ru: "Продукт #3" },
        cover: "pic-1.jpg",
        slug: "product-3",
        category: "woodenchair",
        attr: { newest: false, trending: false, bestsellers: false, featured: true },
        price: { regular: 15, discount: 17 }
      },
      {
        id: 4,
        title: { en: "Product #4", ru: "Продукт #4" },
        cover: "pic-1.jpg",
        slug: "product-4",
        category: "wingchair",
        attr: { newest: false, trending: false, bestsellers: false, featured: true },
        price: { regular: 15 }
      },
      {
        id: 5,
        title: { en: "Product #5", ru: "Продукт #5" },
        cover: "pic-1.jpg",
        slug: "product-5",
        category: "deskchair",
        attr: { newest: true, trending: false, bestsellers: true, featured: false },
        price: { regular: 25, discount: 10 }
      },
      {
        id: 6,
        title: { en: "Product #6", ru: "Продукт #6" },
        cover: "pic-1.jpg",
        slug: "product-6",
        category: "parkbench",
        attr: { newest: true, trending: false, bestsellers: false, featured: false },
        price: { regular: 10, discount: 2 }
      },
      {
        id: 7,
        title: { en: "Product #7", ru: "Продукт #7" },
        cover: "pic-1.jpg",
        slug: "product-7",
        category: "armchair",
        attr: { newest: false, trending: true, bestsellers: true, featured: false },
        price: { regular: 30, discount: 7 }
      },
      {
        id: 8,
        title: { en: "Product #8", ru: "Продукт #8" },
        cover: "pic-1.jpg",
        slug: "product-8",
        category: "wingchair",
        attr: { newest: false, trending: true, bestsellers: false, featured: true },
        price: { regular: 20 }
      },
      {
        id: 9,
        title: { en: "Product #9", ru: "Продукт #9" },
        cover: "pic-1.jpg",
        slug: "product-9",
        category: "armchair",
        attr: { newest: true, trending: false, bestsellers: false, featured: false },
        price: { regular: 12 }
      },
      {
        id: 10,
        title: { en: "Product #10", ru: "Продукт #10" },
        cover: "pic-1.jpg",
        slug: "product-10",
        category: "parkbench",
        attr: { newest: false, trending: false, bestsellers: true, featured: false },
        price: { regular: 18 }
      },
      {
        id: 11,
        title: { en: "Product #11", ru: "Продукт #11" },
        cover: "pic-1.jpg",
        slug: "product-11",
        category: "armchair",
        attr: { newest: false, trending: true, bestsellers: false, featured: true },
        price: { regular: 28, discount: 9 }
      },
      {
        id: 12,
        title: { en: "Product #12", ru: "Продукт #12" },
        cover: "pic-1.jpg",
        slug: "product-12",
        category: "sofa",
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
    ] as Company[],
    reviews: [
      {
        id: 1,
        text: {
          en: "This sectional sofa is not only comfortable and spacious, but it's also the centerpiece of my living room that ties everything together with its beautiful design and quality craftsmanship.",
          ru: "Этот угловой диван не только удобный и просторный, но и является центральным элементом моей гостиной, который своим красивым дизайном и качественным исполнением связывает все вместе."
        },
        avatar: "avatar-1.jpg",
        userName: { en: "Kristin Watson", ru: "Кристина Ватсон" },
        job: { en: "Fashion Designer", ru: "Фэшн Дизайнер" }
      },
      {
        id: 2,
        text: {
          en: "I purchased this high-back executive office chair for my home office, and it has been a game-changer in terms of my productivity and overall comfort.",
          ru: "Я приобрел этот офисный стул с высокой спинкой для своего домашнего офиса, и он стал настоящей находкой в плане моей продуктивности и общего комфорта."
        },
        avatar: "avatar-2.jpg",
        userName: { en: "Esther Howard", ru: "Эстер Говард" },
        job: { en: "Fashion Designer", ru: "Фэшн Дизайнер" }
      },
      {
        id: 3,
        text: {
          en: "These folding chairs are perfect for outdoor events, camping, or even as extra seating for guests. They're lightweight, easy to transport, and surprisingly comfortable for their size.",
          ru: "Эти складные стулья идеально подходят для мероприятий на открытом воздухе, кемпинга или даже в качестве дополнительного сиденья для гостей. Они легкие, легко транспортируются и удивительно удобны для своего размера."
        },
        avatar: "avatar-1.jpg",
        userName: { en: "Charlotte Mitchell", ru: "Шарлотта Митчелл" },
        job: { en: "Fashion Designer", ru: "Фэшн Дизайнер" }
      },
      {
        id: 4,
        text: {
          en: "This swivel glider chair is a must-have for any new parent. It's comfortable, supportive, and the perfect spot for cuddling and bonding with your little one.",
          ru: "Этот кресло-качалка - необходимый предмет для любого молодого родителя. Оно комфортное, поддерживающее и идеальное место для ласковых объятий и общения с вашим малышом."
        },
        avatar: "avatar-2.jpg",
        userName: { en: "Oliver Reynolds", ru: "Оливер Рейнольдс" },
        job: { en: "Fashion Designer", ru: "Фэшн Дизайнер" }
      }
    ] as Review[],

    cart: [] as Product[],
    favorites: [] as Product[]
  }),

  getters: {
    getCategories: (state) => state.categories,
    getProducts: (state) => state.products,
    getCompanies: (state) => state.companies,
    getReviews: (state) => state.reviews,
    getCart: (state) => state.cart,
    getFavorites: (state) => state.favorites
  },

  actions: {
    // Checked product in cart or favorites
    isProduct(productId: number, state: State): boolean {
      return this[state].some((list) => list.id === productId)
    },

    // Added to cart or favorites
    addProduct(product: Product, state: State): void {
      this[state].push(product)
    },

    // Removed from cart or favorites
    deleteProduct(productId: number, state: State): void {
      this[state] = this[state].filter((list) => list.id !== productId)
    },

    // Toggle product in cart or favorites
    toggleProduct(product: Product, state: State): void {
      this.isProduct(product.id, state)
        ? this.deleteProduct(product.id, state)
        : this.addProduct(product, state)
    },

    // Get current product
    getProduct(slug: string) {
      return this.products.find((product) => product.slug === slug)
    }
  }
})
