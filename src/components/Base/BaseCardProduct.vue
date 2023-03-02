<template>
  <article
    class="product"
    :id="`product-${product.id}`"
  >
    <div class="product__picture">
      <img
        :src="getImageUrl(product.image)"
        :alt="product.name"
      />
      <span
        v-if="product.attr.newest"
        class="product__attr product__attr--newest"
      >
        New
      </span>
      <span
        v-if="product.price.discount && !product.attr.newest"
        class="product__attr product__attr--sales"
      >
        Sales
      </span>
      <Button
        class="product__favorite"
        type="button"
        appearance="white"
        aria-label="Add to favorites"
      >
        <IconBase
          :stroke="true"
          :width="22"
          :height="22"
          box="0 0 22 22"
        >
          <IconHeart />
        </IconBase>
      </Button>
    </div>
    <h3 class="product__title">
      <a
        href="#"
        class="product__title-link"
      >
        {{ product.name }}
      </a>
    </h3>
    <div class="product__price">
      <span class="product__price-regular">${{ product.price.regular }}</span>
      <span
        class="product__price-discount"
        v-if="product.price.discount"
      >
        ${{ product.price.discount }}
      </span>
    </div>
    <Button
      type="button"
      appearance="gray"
      class="product__cart"
      aria-label="Add to cart"
    >
      <IconBase
        :width="24"
        :height="24"
        box="0 0 24 24"
        :stroke="true"
      >
        <IconCart />
      </IconBase>
    </Button>
  </article>
</template>

<script lang="ts">
interface Product {
  product: {
    id: number
    name: string
    image: string
    slug: string
    category: string
    attr: {
      newest: boolean
      trending: boolean
      bestsellers: boolean
      featured: boolean
    }
    price: {
      regular: number
      discount?: number
    }
  }
}
</script>

<script setup lang="ts">
import Button from "./BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconCart from "../Icons/IconCart.vue"
import IconHeart from "../Icons/IconHeart.vue"

defineProps<Product>()

const getImageUrl = (name: string) => {
  return new URL(`../../assets/images/products/${name}`, import.meta.url).href
}
</script>

<style scoped lang="scss">
.product {
  $parent: &;
  display: grid;
  max-width: 31.2rem;

  &__picture {
    grid-area: 1 / 1 / 1 / 3;
    position: relative;
    width: 100%;
    height: 31.2rem;
    margin-bottom: 1.4rem;
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
      font: 400 1.6rem/130% var(--main-font);
      text-transform: capitalize;
      color: var(--color-black);
      transition: color 0.2s;
      &:hover {
        color: var(--color-accent-hover);
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
