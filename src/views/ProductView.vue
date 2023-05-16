<template>
  <BlockProduct
    v-bind="product"
    v-if="product"
  />
</template>

<script setup lang="ts">
import type { Product } from "../interfaces"
import { ref, watch, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "../stores"
import Translation from "../i18n/translation"

import BlockProduct from "../components/Blocks/BlockProduct.vue"

const store = useStore()
const route = useRoute()

const product = ref<Product>()

const getProduct = async () => {
  product.value = await store.getProduct(`${route.params.slug}`)
}

const changeMetaTitle = () => {
  document.title = `Comforty — ${product.value?.title[Translation.currentLocale]}`
}

watch(
  () => route.params.slug,
  () => {
    getProduct()
    changeMetaTitle()
  }
)

onMounted(() => {
  getProduct()
  changeMetaTitle()
})
</script>

<style scoped></style>
