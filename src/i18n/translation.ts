import i18n from "../i18n"
import { nextTick } from "vue"

const Translation = {
  get defaultLocale(): string {
    return import.meta.env.VITE_DEFAULT_LOCALE
  },

  get supportedLocales(): string {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
  },

  get currentLocale(): string {
    return i18n.global.locale.value
  },

  set currentLocale(newLocale: string) {
    i18n.global.locale.value = newLocale
  },

  async switchLanguage(newLocale: string) {
    await Translation.loadLocalMessages(newLocale)
    Translation.currentLocale = newLocale
    document.querySelector("html")?.setAttribute("lang", newLocale)
    localStorage.setItem("user-locale", newLocale)
  },

  async loadLocalMessages(locale: string) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`./locales/${locale}.json`)
      i18n.global.setLocaleMessage(locale, messages.default)
    }

    return nextTick()
  },

  isLocaleSupported(locale: string): boolean {
    return Translation.supportedLocales.includes(locale)
  },

  getUserLocale() {
    const locale = window.navigator.language || Translation.defaultLocale

    return {
      locale,
      localeNoRegion: locale.split("-")[0]
    }
  },

  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale")

    if (persistedLocale && Translation.isLocaleSupported(persistedLocale)) {
      return persistedLocale
    } else {
      return null
    }
  },

  quessDefaultLocale() {
    const userPersistedLocale = Translation.getPersistedLocale()
    if (userPersistedLocale) {
      return userPersistedLocale
    }

    const userPreferredLocale = Translation.getUserLocale()
    if (Translation.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }

    if (Translation.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion
    }

    return Translation.defaultLocale
  },

  async routeMiddleware(to: any, _from: any, next: any) {
    const paramLocale = to.params.locale

    if (!Translation.isLocaleSupported(paramLocale)) {
      return next(Translation.quessDefaultLocale())
    }

    await Translation.switchLanguage(paramLocale)

    return next()
  },

  i18nRoute(to: any) {
    return {
      ...to,
      params: {
        locale: Translation.currentLocale,
        ...to.params
      }
    }
  }
}

export default Translation
