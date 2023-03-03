<template>
  <section
    class="products"
    id="products"
  >
    <div class="products__inner inner">
      <div class="products__list">
        <BaseCardProduct
          v-for="product in store.getProducts"
          v-bind="product"
          :key="product.id"
        />
      </div>
    </div>
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
    display: flex;
    gap: 1.5rem;
  }
}
</style>
