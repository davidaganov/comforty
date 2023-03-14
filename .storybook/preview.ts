import "../src/assets/styles/main.scss"

import { app } from "@storybook/vue3"
import { createPinia } from "pinia"
import i18n from "../src/i18n"

app.use(i18n).use(createPinia())

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
