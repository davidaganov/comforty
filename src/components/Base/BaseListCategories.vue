<template>
  <BaseButton
    appearance="ghost"
    @click="open = !open"
    @keydown.esc="open = false"
  >
    <IconBase
      :width="18"
      :height="15"
      box="0 0 18 15"
    >
      <IconMenu />
    </IconBase>
    {{ $t("nav.bottom.categories") }}
  </BaseButton>
  <Transition name="categories">
    <div
      class="categories__wrapper"
      v-show="open"
    >
      <div
        class="categories__inner inner"
        @keydown.esc="open = false"
      >
        <ul class="categories__list">
          <li
            class="categories__item"
            v-for="{ id, name, cover, link } in store.getCategories"
            :key="id"
          >
            <a
              class="categories__link"
              :href="link"
              :style="{ backgroundImage: `url(${getImageUrl(cover)})` }"
            >
              <span class="categories__text">{{ name[Translation.currentLocale] }}</span>
            </a>
          </li>
        </ul>

        <BaseButton
          class="categories__close"
          appearance="gray"
          @click="open = false"
        >
          <IconBase
            box="0 0 24 24"
            :width="24"
            :height="24"
          >
            <IconClose />
          </IconBase>
        </BaseButton>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useStore } from "@/stores"
import { ref } from "vue"
import Translation from "@/i18n/translation"

import BaseButton from "./BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconMenu from "../Icons/IconMenu.vue"
import IconClose from "../Icons/IconClose.vue"

const open = ref(false)
const store = useStore()

const getImageUrl = (name: string) => {
  return new URL(`../../assets/images/categories/${name}`, import.meta.url).href
}
</script>

<style scoped lang="scss">
.categories {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &__wrapper {
    position: absolute;
    width: 100%;
    padding-bottom: 3rem;
    top: 1.4rem;
    left: 0;
    background-color: var(--color-white);
    box-shadow: 0px 19px 27px 0px rgba(39, 35, 67, 0.24);
    z-index: 1;
  }

  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 100%;
  }

  &__item {
    aspect-ratio: 1 / 1;
  }

  &__link {
    position: relative;
    display: block;
    height: 100%;
    background-size: cover;
    background-position: center center;
    border-radius: 0.7rem 0.7rem 0 0;
  }

  &__text {
    position: absolute;
    padding: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(39, 35, 67, 0.5);
    font: 500 1.6rem/100% var(--main-font);
    color: var(--color-white);
    border-radius: 0 0 0.7rem 0.7rem;
  }
}
</style>
