<template>
  <section
    class="product"
    :id="`product-${slug}`"
  >
    <BaseInner class="product__inner">
      <BaseGallery
        class="product__gallery"
        :title="title"
        :gallery="gallery"
      />

      <div class="product__info">
        <h2 class="product__title">{{ title[Translation.currentLocale] }}</h2>

        <p class="product__description">
          Описание:<br />
          {{ description[Translation.currentLocale] }}
        </p>

        <div class="product__price">
          <span class="product__price-title">Цена:</span>
          <span class="product__price-regular">${{ price.regular }}</span>
          <span
            class="product__price-discount"
            v-if="price.discount"
          >
            ${{ price.discount }}
          </span>
        </div>

        <div class="product__buttons">
          <BaseButtonCart
            class="product__cart"
            appearance="ghost"
            :id="product.id"
          >
            Добавить в корзину
          </BaseButtonCart>
          <BaseButtonFavorite
            class="product__favorite"
            appearance="ghost"
            :id="product.id"
          />
        </div>
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "../../interfaces"
import Translation from "../../i18n/translation"

import BaseInner from "../Base/BaseInner.vue"
import BaseGallery from "../Base/BaseGallery.vue"
import BaseButtonCart from "../Base/BaseButtonCart.vue"
import BaseButtonFavorite from "../Base/BaseButtonFavorite.vue"

const product = defineProps<Product>()
</script>

<style scoped lang="scss">
.product {
  margin-top: 4rem;
  &__inner {
    display: flex;
    gap: 2rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__title {
    color: var(--color-black);
    @media (min-width: 769px) {
      font: 600 2.8rem/110% var(--main-font);
    }
    @media (max-width: 768px) {
      font: 600 2rem/110% var(--main-font);
    }
  }

  &__description {
    margin-top: 2rem;
    font: 400 1.6rem/150% var(--main-font);
    color: var(--color-black);
    opacity: 0.6;
    @media (min-width: 1201px) {
      max-width: 35rem;
    }
    @media (max-width: 1200px) and (min-width: 576px) {
      max-width: 90%;
    }
  }

  &__price {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    &-title {
      margin-right: 1rem;
      font: 600 1.8rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-regular {
      font: 600 1.8rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-discount {
      margin-left: 0.4rem;
      font: 400 1.4rem/110% var(--main-font);
      color: var(--color-gray-200);
      text-decoration-line: line-through;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
  }
}
</style>
