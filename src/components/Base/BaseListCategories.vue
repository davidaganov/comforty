<template>
  <BaseButton
    appearance="ghost"
    :aria-label="$t('nav.bottom.categories.aria')"
    :aria-expanded="open"
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
    {{ $t("nav.bottom.categories.text") }}
  </BaseButton>
  <Transition name="categories">
    <div
      class="categories__wrapper"
      v-show="open"
    >
      <BaseInner
        class="categories__inner"
        @keydown.esc="open = false"
      >
        <!-- Title -->
        <BaseTitle
          class="categories__title"
          tag="h2"
        >
          {{ $t("categories.modal.title") }}
        </BaseTitle>

        <!-- Close Button -->
        <BaseButton
          class="categories__close"
          appearance="gray"
          :aria-label="$t('categories.modal.closeAria')"
          @click="open = false"
          @keydown.shift="(e: KeyboardEvent) => e.key === 'Tab' ? open = false : null"
        >
          <IconBase
            box="0 0 24 24"
            :width="24"
            :height="24"
          >
            <IconClose />
          </IconBase>
        </BaseButton>

        <!-- List categories -->
        <div class="categories__list">
          <BaseCardCategory
            class="categories__item"
            :key="category.id"
            v-for="(category, i) in categories"
            v-bind="category"
            @keydown.tab.exact="i === categories.length - 1 ? (open = false) : null"
          />
        </div>
      </BaseInner>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStore } from "../../stores"

import BaseInner from "./BaseInner.vue"
import BaseTitle from "./BaseTitle.vue"
import BaseButton from "./BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconMenu from "../Icons/IconMenu.vue"
import IconClose from "../Icons/IconClose.vue"
import BaseCardCategory from "./BaseCardCategory.vue"

const open = ref(false)
const store = useStore()

const categories = store.getCategories
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
    padding-top: 2.9rem;
    padding-bottom: 3rem;
    top: 0;
    left: 0;
    background-color: var(--color-white);
    box-shadow: 0px 19px 30px 0px rgba(39, 35, 67, 0.12);
    z-index: 1;
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 3rem 1.5rem;
  }

  &__title {
    grid-area: 1 / 1 / 2 / 3;
    align-self: center;
  }

  &__list {
    display: grid;
    grid-area: 2 / 1 / 3 / 3;
    gap: 1.5rem;
    width: 100%;
    @media (min-width: 1201px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 1200px) and (min-width: 1021px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1020px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__close {
    grid-area: 1 / 2 / 2 / 3;
  }
}
</style>
