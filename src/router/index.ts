import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.params.slug) window.scrollTo(0, 0)

  next()
})

export default router
