import { createApp } from "vue"
// import { createApp } from "vue/dist/vue.esm-bundler"
import { createPinia } from "pinia"
import i18n from "./i18n"

import App from "./App.vue"
import router from "./router"

import "./assets/styles/main.scss"

createApp(App).use(createPinia()).use(router).use(i18n).mount("#app")
