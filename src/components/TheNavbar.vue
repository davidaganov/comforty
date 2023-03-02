<template>
  <div
    class="navbar"
    id="navbar"
  >
    <div class="top">
      <BaseLogo />
      <FormSearch />
    </div>
    <div class="bottom">
      <!-- All Categories -->
      <nav class="navbar__menu">
        <ul class="navbar__list">
          <li
            v-for="{ id, name, anchor, link } in list"
            :key="id"
            class="navbar__item"
          >
            <RouterLink
              v-if="link"
              :to="Translation.i18nRoute({ name: link })"
              class="navbar__link"
            >
              {{ name[Translation.currentLocale] }}
            </RouterLink>
            <a
              v-if="anchor"
              :href="anchor"
              class="navbar__link"
            >
              {{ name[Translation.currentLocale] }}
            </a>
          </li>
        </ul>
      </nav>
      <!-- Contact -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import Translation from "@/i18n/translation"

import BaseLogo from "./Base/BaseLogo.vue"
import FormSearch from "./Form/FormSearch.vue"

interface NavbarItem {
  id: number
  name: { [key: string]: string }
  link?: string
  anchor?: string
}

const list: NavbarItem[] = [
  { id: 1, name: { en: "Home", ru: "Главная" }, link: "home" },
  { id: 3, name: { en: "Products", ru: "Продукты" }, link: "products" },
  { id: 4, name: { en: "Reviews", ru: "Отзывы" }, anchor: "#reviews" },
  { id: 5, name: { en: "Contact", ru: "Контакты" }, anchor: "#footer" }
]
</script>

<style scoped lang="scss"></style>
