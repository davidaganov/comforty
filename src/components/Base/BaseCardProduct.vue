<template>
  <article
    class="product"
    :id="`product-${id}`"
  >
    <div class="product__picture">
      <img
        :src="getImageUrl({ fileName: cover, folder: 'images/products' })"
        :alt="name[Translation.currentLocale]"
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
      <BaseButton
        class="product__favorite"
        type="button"
        appearance="white"
        :aria-label="$t('product.aria.favorite')"
      >
        <IconBase
          :stroke="true"
          :width="22"
          :height="22"
          box="0 0 22 22"
        >
          <IconHeart />
        </IconBase>
      </BaseButton>
    </div>
    <h3 class="product__title">
      <a
        href="#"
        class="product__title-link"
      >
        {{ name[Translation.currentLocale] }}
      </a>
    </h3>
    <div class="product__price">
      <span class="product__price-regular">${{ price.regular }}</span>
      <span
        class="product__price-discount"
        v-if="price.discount"
      >
        ${{ price.discount }}
      </span>
    </div>
    <BaseButton
      type="button"
      appearance="gray"
      class="product__cart"
      :aria-label="$t('product.aria.cart')"
    >
      <IconBase
        :width="24"
        :height="24"
        box="0 0 24 24"
        :stroke="true"
      >
        <IconCart />
      </IconBase>
    </BaseButton>
  </article>
</template>

<script setup lang="ts">
import type { Product } from "@/interfaces"
import Translation from "@/i18n/translation"
import { getImageUrl } from "@/utils/getImageUrl"

import IconBase from "../Icons/IconBase.vue"
import IconCart from "../Icons/IconCart.vue"
import IconHeart from "../Icons/IconHeart.vue"

defineProps<Product>()
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

    &:not(&:hover) {
      #{$parent}__favorite {
        opacity: 0;
      }
    }
  }

  &__attr,
  &__favorite {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2rem;
    cursor: pointer;
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

  &__favorite {
    right: 2rem;
    padding: 1.1rem;
    color: var(--color-black);
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0.8rem;
    transition: all 0.1s;
    &:focus-visible {
      opacity: 1 !important;
    }
  }

  &__title {
    grid-area: 2 / 1 / 3 / 2;
    &-link {
      padding: 0 0.3rem;
      margin: 0 -0.3rem;
      font: 400 1.6rem/130% var(--main-font);
      text-align: left;
      text-transform: capitalize;
      color: var(--color-black);
      transition: all 0.2s;
      word-wrap: anywhere;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      &:hover {
        color: var(--color-accent-hover);
      }
      &:focus-visible {
        background-color: var(--color-accent);
        color: var(--color-white);
      }
    }
  }

  &__price {
    grid-area: 3 / 1 / 4 / 2;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    &-regular {
      font: 600 1.8rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-discount {
      margin-left: 0.4rem;
      font: 400 1.4rem/110% var(--main-font);
      color: #9a9caa;
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
