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
import { useHead } from "@unhead/vue"
import { useStore } from "../stores"
import Translation from "../i18n/translation"

import BlockProduct from "../components/Blocks/BlockProduct.vue"

const store = useStore()
const route = useRoute()

const product = ref<Product>()

const changeTitle = () => {
  useHead({
    title: `Comforty — ${product.value?.title[Translation.currentLocale]}`,
    meta: [
      {
        name: "description",
        content: `Comforty. ${product.value?.title[Translation.currentLocale]}. ${
          product.value?.description[Translation.currentLocale]
        }`
      },
      {
        property: "og:title",
        content: `Comforty — ${product.value?.title[Translation.currentLocale]}`
      },
      {
        property: "og:description",
        content: `Comforty. ${product.value?.title[Translation.currentLocale]}. ${
          product.value?.description[Translation.currentLocale]
        }`
      }
    ]
  })
}

const getProduct = async () => {
  product.value = await store.getProduct(`${route.params.slug}`)
  changeTitle()
}

watch(
  () => route.params.slug,
  () => getProduct()
)

watch(
  () => Translation.currentLocale,
  () => changeTitle()
)

onMounted(() => {
  getProduct()
})
</script>

<style scoped></style>
