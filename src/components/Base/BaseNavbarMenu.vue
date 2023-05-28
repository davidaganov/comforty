<template>
  <div class="menu">
    <BaseInner class="menu__inner">
      <div class="menu__top">
        <BaseLogo />

        <BaseButtonClose
          class="menu__close"
          :aria-label="$t('nav.menu.ariaClose')"
          @click="toggleMenu()"
          @keydown.shift="(e: KeyboardEvent) => e.key === 'Tab' ? toggleMenu() : null"
        />
      </div>

      <ul class="menu__list">
        <li
          class="menu__item"
          :key="title"
          v-for="{ title, anchor, link } in $tm('nav.bottom.list')"
        >
          <RouterLink
            class="menu__link"
            :to="Translation.i18nRoute({ name: $rt(link), query: {} })"
            v-if="link"
            @click="goToCategory({ link: $rt(link) })"
          >
            {{ $rt(title) }}
          </RouterLink>
          <a
            class="menu__link"
            :href="$rt(anchor)"
            v-if="anchor"
            @click="toggleMenu()"
          >
            {{ $rt(title) }}
          </a>
        </li>
      </ul>

      <h3 class="menu__title">
        {{ $t("nav.menu.category") }}
      </h3>

      <ul class="menu__list">
        <li
          class="menu__item"
          :key="slug"
          v-for="{ title, slug } in store.getCategories"
        >
          <RouterLink
            class="menu__link"
            :class="{ 'menu__link--active': store.isSelectedCategory(slug) }"
            :to="Translation.i18nRoute({ name: 'products', query: { category: slug } })"
            :aria-label="title[Translation.currentLocale]"
            :title="title[Translation.currentLocale]"
            @click="goToCategory({ slug })"
          >
            {{ title[Translation.currentLocale] }}
          </RouterLink>
        </li>
      </ul>
    </BaseInner>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { useStore } from "../../stores"
import Translation from "../../i18n/translation"

import BaseInner from "./BaseInner.vue"
import BaseLogo from "./BaseLogo.vue"
import BaseButtonClose from "./BaseButtonClose.vue"

const store = useStore()
const emits = defineEmits(["toggleMenu"])

const toggleMenu = () => {
  emits("toggleMenu")
}

const goToCategory = ({ slug, link }: { slug?: string; link?: string }) => {
  if (slug) store.setSelectedCategory(slug)
  if (link === "products") store.setSelectedCategory("all")

  toggleMenu()
}
</script>

<style scoped lang="scss">
.menu {
  @media (min-width: 576px) {
    display: none;
  }
  @media (max-width: 575px) {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: var(--color-white);
    overflow: auto;
    z-index: 3;
  }

  &__inner {
    margin: 2rem 0;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid var(--color-gray-400);
  }

  &__close {
    @media (max-width: 375px) {
      margin-right: 0.7rem;
    }
  }

  &__title {
    margin-top: 2rem;
    font: 600 2.5rem/110% var(--main-font);
    color: var(--color-black);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
    &:not(:last-of-type) {
      padding-bottom: 2rem;
      border-bottom: 0.1rem solid var(--color-gray-400);
    }
  }

  &__link {
    font: 400 2rem/110% var(--main-font);
    color: var(--color-gray-200);
    transition: all 0.2s;
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
    }

    &--active {
      color: var(--color-accent);
    }
  }
}
</style>
