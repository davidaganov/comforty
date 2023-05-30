<template>
  <li class="product">
    <RouterLink
      class="product__picture"
      tabindex="-1"
      :to="Translation.i18nRoute({ name: 'product', params: { slug: slug } })"
      :title="title[Translation.currentLocale]"
    >
      <img
        width="100"
        height="100"
        :src="
          getImageUrl({
            fileName: cover.length > 0 ? `${cover}.jpg` : 'nopic.jpg',
            folder: cover.length > 0 ? `images/products/${category}` : 'images/products'
          })
        "
        :alt="title[Translation.currentLocale]"
      />
    </RouterLink>
    <div class="product__text">
      <RouterLink
        class="product__title"
        :to="Translation.i18nRoute({ name: 'product', params: { slug: slug } })"
        :title="title[Translation.currentLocale]"
      >
        {{ title[Translation.currentLocale] }}
      </RouterLink>
      <div class="product__price">
        <span class="product__price-regular">${{ getDivisors(price.regular) }} </span>
        <s
          class="product__price-old"
          v-if="price.discount"
        >
          ${{ getPercent(price.regular, price.discount) }}
        </s>
      </div>
    </div>

    <BaseButton
      appearance="attention"
      class="product__delete"
      :aria-label="$t(`pages.${name}.ariaDelete`)"
      :title="$t(`pages.${name}.ariaDelete`)"
      @click="toggleProduct(slug, name)"
    >
      <IconBase
        :box="name === 'cart' ? '0 0 24 24' : '0 0 20 20'"
        :width="24"
        :height="24"
      >
        <IconTrash v-if="name === 'cart'" />
        <IconHeart
          :remove="true"
          v-else
        />>
      </IconBase>
    </BaseButton>
  </li>
</template>

<script setup lang="ts">
import type { Product } from "../../interfaces"
import { RouterLink } from "vue-router"
import { useStore } from "../../stores"
import { getImageUrl } from "../../utils/getImageUrl"
import { getDivisors } from "../../utils/getDivisors"
import { getPercent } from "../../utils/getPercent"
import Translation from "../../i18n/translation"

interface Props extends Product {
  name: "cart" | "favorites"
}

import BaseButton from "./BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconTrash from "../Icons/IconTrash.vue"
import IconHeart from "../Icons/IconHeart.vue"

const store = useStore()
const { toggleProduct } = store

defineProps<Props>()
</script>

<style scoped lang="scss">
.product {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  @media (min-width: 376px) {
    gap: 2rem;
  }
  @media (max-width: 375px) {
    gap: 1rem;
  }

  &__picture {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 0.8rem;
    }
    @media (min-width: 769px) {
      width: 10rem;
      height: 10rem;
    }
    @media (max-width: 768px) and (min-width: 376px) {
      width: 8rem;
      height: 8rem;
    }
    @media (max-width: 375px) {
      width: 6rem;
      height: 6rem;
    }
  }

  &__title {
    display: inline;
    padding: 0 0.3rem;
    margin: 0 -0.3rem;
    color: var(--color-black);
    transition: all 0.2s;
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
    @media (min-width: 769px) {
      font: 400 2.2rem/100% var(--main-font);
    }
    @media (max-width: 768px) and (min-width: 376px) {
      font: 400 1.8rem/100% var(--main-font);
    }
    @media (max-width: 375px) {
      font: 400 1.6rem/100% var(--main-font);
    }
    @media (min-width: 576px) {
      &:hover {
        color: var(--color-accent-hover);
      }
    }
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    &-regular {
      color: var(--color-black);
    }
    &-old {
      margin-left: 0.4rem;
      color: var(--color-gray-200);
      text-decoration: line-through;
    }
    @media (min-width: 769px) {
      &-regular {
        font: 600 1.8rem/110% var(--main-font);
      }
      &-old {
        font: 400 1.6rem/110% var(--main-font);
      }
    }
    @media (max-width: 768px) {
      &-regular {
        font: 600 1.6rem/110% var(--main-font);
      }
      &-old {
        font: 400 1.4rem/110% var(--main-font);
      }
    }
  }
}
</style>
