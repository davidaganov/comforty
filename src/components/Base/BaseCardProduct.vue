<template>
  <article
    class="product"
    :id="`product-${id}`"
  >
    <div class="product__picture">
      <img
        width="311"
        height="312"
        :src="getImageUrl({ fileName: cover, folder: 'images/products' })"
        :alt="title[Translation.currentLocale]"
      />
      <span
        v-if="attr.newest"
        class="product__attr product__attr--newest"
      >
        {{ $t("product.attr.newest") }}
      </span>
      <span
        v-if="price.discount && !attr.newest"
        class="product__attr product__attr--sales"
      >
        {{ $t("product.attr.sales") }}
      </span>
      <BaseAddedFavorite
        class="product__favorite"
        :id="product.id"
      />
      <RouterLink
        class="product__link"
        :to="Translation.i18nRoute({ name: 'product', params: { slug } })"
        :aria-label="title[Translation.currentLocale]"
      />
    </div>
    <h3 class="product__title">
      <RouterLink
        class="product__title-link"
        :to="Translation.i18nRoute({ name: 'product', params: { slug } })"
        :title="title[Translation.currentLocale]"
      >
        {{ title[Translation.currentLocale] }}
      </RouterLink>
    </h3>
    <div class="product__price">
      <span class="product__price-regular">${{ price.regular }}</span>
      <s
        class="product__price-old"
        v-if="price.discount"
      >
        ${{ price.discount }}
      </s>
    </div>
    <BaseAddedCart
      class="product__cart"
      :id="product.id"
    />
  </article>
</template>

<script lang="ts">
interface Props {
  id: number
  title: { [key: string]: string }
  cover: string
  gallery: string[]
  description: { [key: string]: string }
  slug: string
  category: string
  attr: { [key: string]: boolean }
  price: {
    regular: number
    discount?: number | null
  }
}
</script>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { getImageUrl } from "../../utils/getImageUrl"
import Translation from "../../i18n/translation"

import BaseAddedCart from "./BaseAddedCart.vue"
import BaseAddedFavorite from "./BaseAddedFavorite.vue"

const product = defineProps<Props>()
</script>

<style scoped lang="scss">
.product {
  $parent: &;
  display: grid;
  &__picture {
    grid-area: 1 / 1 / 1 / 3;
    position: relative;
    width: 100%;
    margin-bottom: 1.4rem;
    @media (min-width: 769px) {
      height: 31.2rem;
      &:not(&:hover) {
        #{$parent}__favorite {
          opacity: 0;
        }
      }
    }
    @media (max-width: 768px) {
      height: 20rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 0.6rem;
    }
  }

  &__attr,
  &__favorite {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 2rem;
    z-index: 2;
  }

  &__attr {
    left: 2rem;
    padding: 0.6rem 1rem;
    text-transform: capitalize;
    font: 500 1.3rem/110% var(--main-font);
    color: var(--color-white);
    border-radius: 0.4rem;
    &--sales {
      background-color: #f5813f;
    }
    &--newest {
      background-color: #01ad5a;
    }
  }

  &__link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0.6rem;
    z-index: 1;
    &:focus-visible {
      box-shadow: 0 0 0 0.2rem var(--color-accent);
    }
  }

  &__title {
    text-align: left;
    &-link {
      grid-area: 2 / 1 / 3 / 2;
      padding: 0 0.3rem;
      margin: 0 -0.3rem;
      text-transform: capitalize;
      color: var(--color-black);
      word-wrap: anywhere;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      transition: all 0.2s;
      &:focus-visible {
        background-color: var(--color-accent);
        color: var(--color-white);
      }
      @media (min-width: 769px) {
        font: 400 1.6rem/130% var(--main-font);
        &:hover {
          color: var(--color-accent-hover);
        }
      }
      @media (max-width: 768px) {
        font: 400 1.8rem/130% var(--main-font);
      }
    }
  }

  &__price {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    grid-area: 3 / 1 / 4 / 2;
    &-regular {
      font: 600 1.8rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-old {
      margin-left: 0.4rem;
      font: 400 1.4rem/110% var(--main-font);
      color: var(--color-dark-gray);
      text-decoration-line: line-through;
    }
  }

  &__cart {
    grid-area: 2 / 2 / 4 / 3;
    justify-self: flex-end;
    align-self: center;
  }
}
</style>
