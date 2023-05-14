<template>
  <section
    class="favorites"
    id="favorites"
  >
    <BaseInner class="favorites__inner">
      <BaseTitle class="favorites__title">{{ $t("pages.favorites.title") }}</BaseTitle>

      <ul
        class="favorites__list"
        v-if="getFavorites.length !== 0"
      >
        <BaseProductItem
          name="favorites"
          :key="product.id"
          v-for="product in getFavorites"
          v-bind="product"
        />
      </ul>

      <div
        class="favorites__empty"
        v-if="getFavorites.length === 0"
      >
        <span class="favorites__empty-title">404</span>
        <p class="favorites__empty-description">{{ $t("nav.middle.favorites.empty") }}</p>
      </div>

      <BaseButton
        class="favorites__link"
        :to="Translation.i18nRoute({ name: 'products' })"
      >
        {{ $t("pages.cart.products") }}
      </BaseButton>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useStore } from "../../stores"
import Translation from "../../i18n/translation"

import BaseInner from "../Base/BaseInner.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseButton from "../Base/BaseButton.vue"
import BaseProductItem from "../Base/BaseProductItem.vue"

const store = useStore()
const { getFavorites } = storeToRefs(store)
</script>

<style scoped lang="scss">
.favorites {
  margin-top: 4rem;
  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__title {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 0.1rem solid var(--color-gray-400);
  }

  &__list {
    display: grid;
    gap: 2rem;
    @media (min-width: 1021px) {
      width: 80rem;
    }
    @media (max-width: 1020px) {
      width: 100%;
    }
  }

  &__empty {
    margin-top: 2.4rem;
    text-align: center;
    &-title {
      display: block;
      margin-bottom: 1rem;
      font: 600 4rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-description {
      font: 600 2rem/110% var(--main-font);
      color: var(--color-black);
    }
  }

  &__link {
    margin: 4rem auto 0;
  }
}
</style>
