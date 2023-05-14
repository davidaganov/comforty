import { type RouteRecordRaw, RouterView } from "vue-router"
import Translation from "../i18n/translation"

import DefaultLayout from "../layouts/DefaultLayout.vue"
import OtherLayout from "../layouts/OtherLayout.vue"

import HomeView from "../views/HomeView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProductView from "../views/ProductView.vue"
import CartView from "../views/CartView.vue"
import FavoritesView from "../views/FavoritesView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:locale?",
    component: RouterView,
    beforeEnter: Translation.routeMiddleware,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
        meta: { layout: DefaultLayout }
      },
      {
        path: "products",
        name: "products",
        component: ProductsView,
        meta: { layout: OtherLayout }
      },
      {
        path: "products/:slug",
        name: "product",
        component: ProductView,
        meta: { layout: OtherLayout }
      },
      {
        path: "cart",
        name: "cart",
        component: CartView,
        meta: { layout: OtherLayout }
      },
      {
        path: "favorites",
        name: "favorites",
        component: FavoritesView,
        meta: { layout: OtherLayout }
      }
    ]
  }
]

export default routes
