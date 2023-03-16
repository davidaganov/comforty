import Translation from "../i18n/translation"
import { createRouter, createWebHashHistory, RouterView } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHashHistory(),
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
          component: () => import("../views/ProductsView.vue")
        }
      ]
    }
  ]
})

export default router
