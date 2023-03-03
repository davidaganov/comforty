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
            v-for="{ id, name, anchor, link } in store.getNavbar"
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
import { useStore } from "@/stores"
import Translation from "@/i18n/translation"

import BaseLogo from "./Base/BaseLogo.vue"
import FormSearch from "./Form/FormSearch.vue"

const store = useStore()
</script>

<style scoped lang="scss"></style>
