import { defineStore } from "pinia"
import type { Category, PromoProduct, Product, Company, Review, SortingTag } from "../interfaces"

type State = "cart" | "favorites"

// export const useStore = defineStore("cart", {
//   state: () => {(
//     cart: [] as Product[]
//   )},
//   persist: true
// })

export const useStore = defineStore("shop", {
  state: () => ({
    categories: [
      {
        id: 1,
        title: { en: "All categories", ru: "Все категории" },
        cover: "cat-1.jpg",
        slug: "all",
        productsCount: 12
      },
      {
        id: 2,
        title: { en: "Wing Chair", ru: "Кресла с подголовником" },
        productsCount: 2,
        cover: "cat-1.jpg",
        slug: "wingchair"
      },
      {
        id: 3,
        title: { en: "Wooden Chair", ru: "Деревянные стулья" },
        productsCount: 2,
        cover: "cat-2.jpg",
        slug: "woodenchair"
      },
      {
        id: 4,
        title: { en: "Desk Chair", ru: "Офисные кресла" },
        productsCount: 1,
        cover: "cat-3.jpg",
        slug: "deskchair"
      },
      {
        id: 5,
        title: { en: "Park Bench", ru: "Скамейки" },
        productsCount: 2,
        cover: "cat-2.jpg",
        slug: "parkbench"
      },
      {
        id: 6,
        title: { en: "Armchair", ru: "Кресла" },
        productsCount: 3,
        cover: "cat-1.jpg",
        slug: "armchair"
      },
      {
        id: 7,
        title: { en: "Sofa", ru: "Диваны" },
        productsCount: 3,
        cover: "cat-3.jpg",
        slug: "sofa"
      }
    ] as Category[],
    promoProducts: [
      {
        id: 1,
        title: {
          en: "Best furniture collection for your interior",
          ru: "Лучшая коллекция мебели для вашего интерьера"
        },
        subtitle: { en: "Welcome to Comforty", ru: "Добро пожаловать в Comforty" },
        img: "pic-1.png",
        slug: "product-1",
        discount: 54
      },
      {
        id: 2,
        title: {
          en: "Modern furniture for your office space",
          ru: "Современная мебель для вашего офиса"
        },
        subtitle: { en: "Welcome to Comforty", ru: "Добро пожаловать в Comforty" },
        img: "pic-1.png",
        slug: "product-2",
        discount: 35
      },
      {
        id: 3,
        title: {
          en: "Luxurious furniture for stylish relaxation",
          ru: "Роскошная мебель для стильного отдыха"
        },
        subtitle: { en: "Welcome to Comforty", ru: "Добро пожаловать в Comforty" },
        img: "pic-1.png",
        slug: "product-3",
        discount: 20
      }
    ] as PromoProduct[],
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
    sortingTags: [
      { id: 1, slug: "all", tag: { en: "All", ru: "Все" } },
      { id: 2, slug: "newest", tag: { en: "Newest", ru: "Новинки" } },
      { id: 3, slug: "trending", tag: { en: "Trending", ru: "Трендинг" } },
      { id: 4, slug: "bestsellers", tag: { en: "Best sellers", ru: "Бестселлеры" } },
      { id: 5, slug: "featured", tag: { en: "Featured", ru: "Рекомендуемые" } }
    ] as SortingTag[],
    companies: [
      { id: 1, name: "Zapier", logo: "logo-1.png" },
      { id: 2, name: "Pipedrive", logo: "logo-2.png" },
      { id: 3, name: "CIB Bank", logo: "logo-3.png" },
      { id: 4, name: "Company", logo: "logo-4.png" },
      { id: 5, name: "Burnt Toast", logo: "logo-5.png" },
      { id: 6, name: "PandaDoc", logo: "logo-6.png" },
      { id: 7, name: "MOZ", logo: "logo-7.png" }
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
          en: "These folding chairs are perfect for outdoor events, camping, or even as extra seating for guests. They're lightweight, easy to transport.",
          ru: "Эти складные стулья идеально подходят для мероприятий на открытом воздухе, кемпинга или даже в качестве дополнительного сиденья для гостей."
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
    favorites: [] as Product[],
    selectedCategory: "all",
    selectedSortingTag: "all"
  }),

  getters: {
    getCategories: (state) => state.categories,
    getPromoProducts: (state) => state.promoProducts,
    getProducts: (state) => state.products,
    getSortingTags: (state) => state.sortingTags,
    getCompanies: (state) => state.companies,
    getReviews: (state) => state.reviews,
    getCart: (state) => state.cart,
    getFavorites: (state) => state.favorites,
    getSelectedSortingTag: (state) => state.selectedSortingTag,
    getSelectedCategory: (state) => state.selectedCategory
  },

  actions: {
    // Checked product in cart or favorites
    isProduct(productId: number, state: State): boolean {
      return this[state].some((list) => list.id === productId)
    },

    // Added to cart or favorites
    addProduct(productId: number, state: State): void {
      console.log("added: ", productId)
      const product = this.products.filter((list) => list.id === productId)
      this[state].push(product[0])
    },

    // Removed from cart or favorites
    deleteProduct(productId: number, state: State): void {
      console.log("remove: ", productId)
      this[state] = this[state].filter((list) => list.id !== productId)
    },

    // Toggle product in cart or favorites
    toggleProduct(productId: number, state: State): void {
      console.log("toggle: ", productId)
      this.isProduct(productId, state)
        ? this.deleteProduct(productId, state)
        : this.addProduct(productId, state)
    },

    clearCart(): void {
      this.cart = []
    },

    // Get current product
    getProduct(slug: string) {
      return this.products.find((product) => product.slug === slug)
    },

    // Set current sorting tag
    setSelectedSortingTag(tag: string) {
      this.selectedSortingTag = tag
    },

    // Checked current sorting tag
    isSelectedSortingTag(tag: string) {
      return this.selectedSortingTag === tag
    },

    // Get name current sorting tag
    getTitleSelectedSortingTag() {
      return this.sortingTags.find((tag) => tag.slug === this.selectedSortingTag)?.tag
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
      const selectedTag = tag ?? this.selectedSortingTag
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
    paths: ["cart", "favorites"]
  }
})
