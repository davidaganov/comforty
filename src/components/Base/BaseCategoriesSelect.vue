<template>
  <div
    class="categories"
    role="listbox"
    :class="{ 'categories--open': open }"
    :aria-expanded="open"
    @keydown.esc="toggleModal(false)"
  >
    <button
      type="button"
      class="categories__label"
      :tabindex="screenWidth < 1021 ? 0 : -1"
      :aria-label="
        screenWidth < 1021
          ? $t('pages.products.filter.ariaOpen')
          : $t('pages.products.filter.ariaList')
      "
      @click="toggleModal(true)"
    >
      {{
        screenWidth > 1021
          ? $t("pages.products.filter.categories")
          : $t("pages.products.filter.title")
      }}
      <IconBase
        class="categories__label-icon"
        :stroke="true"
        :width="12"
        :height="8"
        box="0 0 9 5"
      >
        <IconChevron />
      </IconBase>
    </button>
    <Transition name="categories">
      <div
        v-show="open"
        class="categories__container"
      >
        <div class="categories__top">
          <BaseTitle class="categories__top-title">
            {{ $t("pages.products.filter.title") }}
          </BaseTitle>

          <BaseButtonClose
            :aria-label="$t('pages.products.filter.ariaClose')"
            @click="toggleModal(false)"
            @keydown.shift="(e: KeyboardEvent) => e.key === 'Tab' ? toggleModal(false) : null"
          />
        </div>

        <h3 class="categories__title">
          {{ $t("pages.products.filter.categories") }}
        </h3>

        <div
          class="categories__list"
          v-if="store.getCategories.length !== 0"
        >
          <span
            id="categoriesLabel"
            class="visually-hidden"
          >
            {{ $t("pages.products.filter.ariaLabel") }}:
          </span>

          <button
            type="button"
            class="categories__item"
            role="option"
            :id="`category-${slug}`"
            :class="{ 'categories__item--active': store.isSelectedCategory(slug) }"
            :aria-selected="store.isSelectedCategory(slug)"
            :aria-labelledby="`categoriesLabel category-${slug}`"
            :key="id"
            v-for="{ id, slug, title } in store.getCategories"
            @click="store.setSelectedCategory(slug), toggleModal(false)"
          >
            {{ title[Translation.currentLocale] }}
          </button>
        </div>

        <div
          class="categories__list"
          v-else
        >
          <div
            class="categories__skeleton skeleton"
            :key="index"
            v-for="(_, index) in 3"
          ></div>
        </div>

        <!-- <h3 class="categories__title">
          {{ $t("pages.products.filter.price") }}
        </h3> -->
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import { useStore } from "../../stores"
import Translation from "../../i18n/translation"

import BaseTitle from "./BaseTitle.vue"
import BaseButtonClose from "./BaseButtonClose.vue"
import IconBase from "../Icons/IconBase.vue"
import IconChevron from "../Icons/IconChevron.vue"

const store = useStore()
const open = ref(false)
const screenWidth = ref(window.innerWidth)

const toggleModal = (value: boolean) => {
  if (screenWidth.value < 1021) {
    open.value = value

    if (open.value) document.body.classList.add("no-scroll")
    else document.body.classList.remove("no-scroll")
  }
}

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})
</script>

<style scoped lang="scss">
.categories {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }

  &-enter-from {
    transform: translateX(-100%);
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(0);
  }

  &__label {
    @media (min-width: 1021px) {
      font: 600 2rem/110% var(--main-font);
      color: var(--color-black);
      margin-bottom: 2rem;
      &-icon {
        display: none;
      }
    }
    @media (max-width: 1020px) {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      border-radius: 0.8rem;
      border: 0.1rem solid var(--color-gray-400);
      background-color: var(--color-white);
      transition: all 0.2s;
      color: var(--color-black);
      user-select: none;
      cursor: pointer;
      &:focus-visible {
        background-color: var(--color-accent);
        color: var(--color-white);
        border-color: var(--color-accent);
      }
      &-icon {
        margin-left: 2rem;
        transform: rotate(-90deg);
      }
    }
    @media (max-width: 1020px) and (min-width: 576px) {
      padding: 1.2rem 1.5rem;
      font: 500 1.6rem/110% var(--main-font);
      &:hover {
        background-color: var(--color-accent);
        color: var(--color-white);
        border-color: var(--color-accent);
      }
    }
    @media (max-width: 575px) {
      height: 5rem;
      padding: 1.4rem 1.5rem;
      font: 500 1.8rem/110% var(--main-font);
    }
  }

  &__container {
    @media (min-width: 1021px) {
      display: flex !important;
      flex-direction: column;
    }
    @media (max-width: 1020px) {
      position: fixed;
      width: 100%;
      max-width: 132rem;
      margin-left: auto;
      margin-right: auto;
      padding-top: 2rem;
      height: 100%;
      left: 0;
      top: 0;
      background-color: var(--color-white);
      z-index: 5;
    }
    @media (max-width: 1020px) and (min-width: 375px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    @media (max-width: 374px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  &__top {
    @media (min-width: 1021px) {
      display: none;
    }
    @media (max-width: 1020px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 2rem;
      border-bottom: 0.1rem solid var(--color-gray-400);
      &-title {
        color: var(--color-accent);
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.5rem;
    @media (min-width: 1021px) {
      margin-top: 2rem;
      padding-left: 2rem;
      border-left: 0.1rem solid var(--color-gray-400);
    }
    @media (max-width: 1020px) {
      margin-top: 2rem;
      padding-bottom: 2rem;
      padding-left: 1rem;
      border-bottom: 0.1rem solid var(--color-gray-400);
    }
  }

  &__item {
    color: var(--color-gray-200);
    cursor: pointer;
    transition: all 0.2s;
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
    @media (min-width: 1021px) {
      font: 400 1.8rem/110% var(--main-font);
    }
    @media (max-width: 1020px) {
      font: 400 2rem/110% var(--main-font);
    }
    @media (min-width: 769px) {
      &:hover {
        color: var(--color-black);
      }
    }
    &--active {
      color: var(--color-accent);
      &:hover {
        color: var(--color-accent-hover);
      }
      &:focus-visible {
        background-color: var(--color-accent-hover);
      }
    }
  }

  &__skeleton {
    @media (min-width: 1021px) {
      width: 100%;
      height: 1.98rem;
    }
  }

  &__title {
    margin-top: 2rem;
    color: var(--color-black);
    @media (min-width: 1021px) {
      font: 600 2rem/110% var(--main-font);
      &:first-of-type {
        display: none;
      }
    }
    @media (max-width: 1020px) {
      font: 600 2.5rem/110% var(--main-font);
    }
  }
}
</style>
