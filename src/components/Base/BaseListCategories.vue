<template>
  <BaseButton
    appearance="ghost"
    :aria-label="$t('nav.bottom.categories.aria')"
    :aria-expanded="open"
    @click="toggleModal(true)"
    @keydown.esc="toggleModal(false)"
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
        @keydown.esc="toggleModal(false)"
      >
        <BaseTitle class="categories__title">
          {{ $t("categories.modal.title") }}
        </BaseTitle>

        <BaseButtonClose
          class="categories__close"
          :aria-label="$t('categories.modal.closeAria')"
          @click="toggleModal(false)"
          @keydown.shift="(e: KeyboardEvent) => e.key === 'Tab' ? toggleModal(false) : null"
        />

        <div class="categories__list">
          <BaseCardCategory
            class="categories__item"
            :key="category.id"
            v-for="(category, index) in store.getCategories"
            v-bind="category"
            @keydown.tab.exact="
              index === store.getCategories.length - 1 ? toggleModal(false) : null
            "
            @click="toggleModal(false)"
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
import BaseButtonClose from "./BaseButtonClose.vue"
import BaseCardCategory from "./BaseCardCategory.vue"
import IconBase from "../Icons/IconBase.vue"
import IconMenu from "../Icons/IconMenu.vue"

const open = ref(false)
const store = useStore()

const toggleModal = (value: boolean) => {
  open.value = value
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
    padding-top: 2.9rem;
    padding-bottom: 3rem;
    top: 0;
    left: 0;
    background-color: var(--color-white);
    box-shadow: 0 1.9rem 3rem 0 rgba(39, 35, 67, 0.12);
    z-index: 4;
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
      grid-template-columns: repeat(7, 1fr);
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
