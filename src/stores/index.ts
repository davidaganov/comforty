import { defineStore } from "pinia"
import type { NavbarItem, Category, Product, Company, Review } from "@/interfaces"

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
    ] as Company[],
    reviews: [
      {
        id: 1,
        text: {
          en: "I recently purchased this product and I am blown away by how effective it is. Not only does it meet all of my expectations, but it also exceeded them. The quality of the product is outstanding and the customer service was exceptional. I would highly recommend this product to anyone looking for a reliable and high-performing solution. It's definitely worth the investment!",
          ru: "Я недавно приобрела этот продукт, и я поражена тем, насколько он эффективен. Это не только оправдало все мои ожидания, но и превзошло их. Качество продукта выдающееся, а обслуживание клиентов было исключительным. Я бы настоятельно рекомендовал этот продукт всем, кто ищет надежное и высокопроизводительное решение. Это определенно стоит вложений!"
        },
        avatar: "avatar-1.jpg",
        name: { en: "Kristin Watson", ru: "Кристина Ватсон" },
        job: { en: "Fashion Designer", ru: "Фэшн Дизайнер" }
      },
      {
        id: 2,
        text: {
          en: "I've been using this product for a few weeks now and I am really impressed with the results. It's made a noticeable difference in my daily routine and I love how easy it is to use. The quality is top-notch and the price is very reasonable for what you get. Plus, the customer service team was extremely helpful when I had a question about the product. Overall, I would definitely recommend this to anyone looking for a high-quality solution.",
          ru: "Я пользуюсь этим продуктом уже несколько недель, и результаты меня действительно впечатлили. Это заметно изменило мой распорядок дня, и мне нравится, насколько он прост в использовании. Качество на высшем уровне, а цена очень разумная за то, что вы получаете. Кроме того, команда обслуживания клиентов была чрезвычайно любезна, когда у меня возник вопрос о продукте. В целом, я бы определенно рекомендовал это всем, кто ищет высококачественное решение."
        },
        avatar: "avatar-2.jpg",
        name: { en: "Esther Howard", ru: "Эстер Говард" },
        job: { en: "Fashion Designer", ru: "Фэшн Дизайнер" }
      },
      {
        id: 3,
        text: {
          en: "I was skeptical about this product at first, but after trying it out for a few days, I am completely sold. The quality is amazing and it works like a charm. I also appreciate the thoughtful design and attention to detail that went into making this product. The customer service was also excellent and answered all of my questions promptly. I would definitely recommend this product to anyone looking for a reliable and effective solution.",
          ru: "Сначала я скептически отнесся к этому продукту, но, попробовав его в течение нескольких дней, я полностью продан. Качество потрясающее, и это работает как заклинание. Я также ценю продуманный дизайн и внимание к деталям, которые были использованы при создании этого продукта. Обслуживание клиентов также было превосходным и быстро отвечало на все мои вопросы. Я бы определенно порекомендовал этот продукт всем, кто ищет надежное и эффективное решение."
        },
        avatar: "avatar-1.jpg",
        name: { en: "Charlotte Mitchell", ru: "Шарлотта Митчелл" },
        job: { en: "Fashion Designer", ru: "Фэшн Дизайнер" }
      },
      {
        id: 4,
        text: {
          en: "I've been using this product for a while now and it has become an essential part of my daily routine. It's incredibly easy to use and has made a huge difference in my life. The quality is exceptional and it's clear that a lot of thought went into designing this product. The customer service team was also very helpful and answered all of my questions promptly. Overall, I would highly recommend this product to anyone looking for a high-quality solution.",
          ru: "Я пользуюсь этим продуктом уже некоторое время, и он стал неотъемлемой частью моей повседневной жизни. Он невероятно прост в использовании и оказал огромное влияние на мою жизнь. Качество исключительное, и ясно, что при разработке этого продукта было вложено много мыслей. Команда обслуживания клиентов также была очень предупредительна и быстро ответила на все мои вопросы. В целом, я бы настоятельно рекомендовал этот продукт всем, кто ищет высококачественное решение."
        },
        avatar: "avatar-2.jpg",
        name: { en: "Oliver Reynolds", ru: "Оливер Рейнольдс" },
        job: { en: "Fashion Designer", ru: "Фэшн Дизайнер" }
      }
    ] as Review[]
  }),
  getters: {
    getNavbar: (state) => state.navbar,
    getCategories: (state) => state.categories,
    getProducts: (state) => state.products,
    getCompanies: (state) => state.companies,
    getReviews: (state) => state.reviews
  }
})
