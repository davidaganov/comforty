import { createRouter, createWebHashHistory, RouterView } from "vue-router"
import Translation from "../i18n/translation"

import HomeView from "../views/HomeView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProductView from "../views/ProductView.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Translation.routeMiddleware,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView
        },
        {
          path: "products",
          name: "products",
          component: ProductsView
        },
        {
          path: "products/:slug",
          name: "product",
          component: ProductView
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.params.slug) window.scrollTo(0, 0)

  next()
})

export default router
