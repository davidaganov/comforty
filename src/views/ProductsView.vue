<template>
  <section
    class="products"
    id="products"
  >
    <BaseInner class="products__inner">
      <div class="products__list">
        <BaseCardProduct
          class="products__item"
          v-for="product in getProducts"
          v-bind="product"
          :key="product.id"
        />
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "../stores"

import BaseInner from "../components/Base/BaseInner.vue"
import BaseCardProduct from "../components/Base/BaseCardProduct.vue"

const { getProducts } = useStore()
</script>

<style scoped lang="scss">
.products {
  &__title {
    text-align: center;
  }

  &__list {
    display: grid;
    gap: 1.5rem;
    margin-top: 4rem;
    @media (min-width: 1021px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1020px) and (min-width: 576px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 575px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__item {
    @media (max-width: 1020px) {
      &:nth-of-type(n + 7) {
        display: none;
      }
    }
  }
}
</style>
