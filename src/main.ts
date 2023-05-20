import { createApp } from "vue"
import { createPinia } from "pinia"
import { createHead } from "@unhead/vue"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

import App from "./App.vue"
import router from "./router"
import i18n from "./i18n"

import "./assets/styles/main.scss"
import "swiper/css"
import "swiper/css/effect-fade"

const head = createHead()
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).use(router).use(i18n).use(head).mount("#app")
