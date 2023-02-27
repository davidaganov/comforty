<template>
  <article
    class="product"
    :id="`product-${product.id}`"
  >
    <div class="product__picture">
      <img
        :src="require(`@/assets/images/products/${product.image}`)"
        :alt="product.name"
      />
      <span
        v-if="product.price.discount"
        class="product__attr"
      >
        Sales
      </span>
      <button
        class="product__favorite"
        type="button"
      >
        Like
      </button>
    </div>
    <h3 class="product__title">
      <a
        :href="product.link"
        class="product__title-link"
      >
        {{ product.name }}
      </a>
    </h3>
    <div class="product__price">
      <span class="product__price-regular">${{ product.price.regular }}</span>
      <span class="product__price-discount">${{ product.price.discount }}</span>
    </div>
    <button
      class="product__cart"
      type="button"
    >
      <IconBase
        :width="24"
        :height="24"
        box="0 0 24 24"
        :stroke="true"
      >
        <IconCart />
      </IconBase>
    </button>
  </article>
</template>

<script setup lang="ts">
import IconBase from "../Icons/IconBase.vue"
import IconCart from "../Icons/IconCart.vue"

interface Props {
  product: {
    id: number
    name: string
    link: string
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
      discount: number
    }
  }
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.product {
  display: grid;
  max-width: 31.2rem;

  &__picture {
    grid-area: 1 / 1 / 1 / 3;
    position: relative;
    width: 100%;
    height: 31.2rem;
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
    top: 2rem;
  }
  &__attr {
    left: 2rem;
  }
  &__favorite {
    right: 2rem;
  }

  &__title {
    grid-area: 2 / 1 / 3 / 2;
    margin-top: 1.4rem;
    &-link {
      font: 400 1.6rem/130% var(--main-font);
      text-transform: capitalize;
      color: var(--color-black);
      transition: color 0.2s;
      &:hover {
        color: #007580;
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-accent);
    border-radius: 0.8rem;
    color: var(--color-white);
    cursor: pointer;
  }
}
</style>
