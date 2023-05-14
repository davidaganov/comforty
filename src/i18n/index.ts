import { createI18n } from "vue-i18n"
import messages from "@intlify/unplugin-vue-i18n/messages"
import pluralRules from "./rules/pluralization"

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_DEFAULT_LOCALE || "en",
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE || "en",
  availableLocales: ["en", "ru"],
  messages,
  pluralRules
})

export default i18n
