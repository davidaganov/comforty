import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/Account.vue")
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/SignIn.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
