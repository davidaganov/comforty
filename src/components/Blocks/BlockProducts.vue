<template>
  <section
    class="products"
    id="products"
  >
    <div class="products__inner inner">
      <BaseCardProduct
        v-for="product in store.getProducts"
        v-bind="product"
        :key="product.id"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "@/stores"

import BaseCardProduct from "../Base/BaseCardProduct.vue"

const store = useStore()
</script>

<style scoped lang="scss"></style>
