import type { App } from "vue"

import BaseInner from "../components/Global/BaseInner.vue"
import BaseTitle from "../components/Global/BaseTitle.vue"
import BaseButton from "../components/Global/BaseButton.vue"

export const registerComponents = (app: App): void => {
  app.component("BaseInner", BaseInner)
  app.component("BaseTitle", BaseTitle)
  app.component("BaseButton", BaseButton)
}
