<template>
  <section
    class="products"
    id="products"
  >
    <BaseInner class="products__inner">
      <div class="products__list">
        <BaseCardProduct
          v-for="product in store.getProducts"
          v-bind="product"
          :key="product.id"
        />
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "@/stores"

import BaseCardProduct from "../Base/BaseCardProduct.vue"

const store = useStore()
</script>

<style scoped lang="scss">
.products {
  &__list {
    display: grid;
    gap: 1.5rem;
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
}
</style>
