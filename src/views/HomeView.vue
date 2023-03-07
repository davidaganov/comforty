<template>
  <div>
    <BlockProductsCarousel
      name="featured"
      :products="products"
    />
    <BlockProductsCarousel
      name="recently"
      :products="products"
    />
  </div>
</template>

<script setup lang="ts">
import BlockProductsCarousel from "@/components/Blocks/BlockProductsCarousel.vue"
import { useStore } from "@/stores"

const products = useStore().getProducts
</script>
