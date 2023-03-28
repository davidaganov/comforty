<template>
  <BlockProduct
    v-bind="product"
    v-if="product"
  />

  <BlockProductsCarousel
    name="featured"
    :products="products"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "../stores"

import BlockProduct from "../components/Blocks/BlockProduct.vue"
import BlockProductsCarousel from "../components/Blocks/BlockProductsCarousel.vue"

const store = useStore()
const route = useRoute()

const product = ref(store.getProduct(`${route.params.slug}`))
const products = store.getProducts.slice(0, 8)

watch(
  () => route.params.slug,
  () => {
    product.value = store.getProduct(`${route.params.slug}`)
  }
)
</script>

<style scoped></style>
