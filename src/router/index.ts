import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
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
})

export default router
