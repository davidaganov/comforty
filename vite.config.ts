import { fileURLToPath, URL } from "node:url"
import { resolve, dirname } from "node:path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import VueTypeImports from "vite-plugin-vue-type-imports"
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"

export default defineConfig({
  plugins: [
    vue(),
    VueTypeImports(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), "./src/locales/**")
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
