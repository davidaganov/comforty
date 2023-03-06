import { registerComponents } from "./utils/registerComponents"
import { createApp } from "vue"

import { createPinia } from "pinia"
import i18n from "./i18n"

import App from "./App.vue"
import router from "./router"

import "./assets/styles/main.scss"

const app = createApp(App).use(createPinia()).use(router).use(i18n)

registerComponents(app)

app.mount("#app")
