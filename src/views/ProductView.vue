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
import { ref, watch, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "../stores"
import Translation from "../i18n/translation"

import BlockProduct from "../components/Blocks/BlockProduct.vue"
import BlockProductsCarousel from "../components/Blocks/BlockProductsCarousel.vue"

const store = useStore()
const route = useRoute()

const product = ref(store.getProduct(`${route.params.slug}`))
const products = store.getProducts.slice(0, 8)

const changeMetaTitle = () => {
  document.title = `Comforty — ${product.value?.title[Translation.currentLocale]}`
}

watch(
  () => route.params.slug,
  () => {
    product.value = store.getProduct(`${route.params.slug}`)
    changeMetaTitle()
  }
)

onMounted(changeMetaTitle)
</script>

<style scoped></style>
