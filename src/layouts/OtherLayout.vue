<template>
  <TheHeader />
  <main>
    <slot />

    <BlockProductsCarousel
      class="products"
      name="featured"
      :products="products"
    />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import { useStore } from "../stores"

import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue"

import BlockProductsCarousel from "../components/Blocks/BlockProductsCarousel.vue"

const { getSortingProducts } = useStore()
const products = getSortingProducts({ tag: "featured" }).slice(0, 16)
</script>

<style scoped lang="scss">
.products {
  margin-top: 6rem;
}
</style>
