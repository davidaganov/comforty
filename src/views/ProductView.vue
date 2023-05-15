<template>
  <BlockProduct
    v-bind="product"
    v-if="product"
  />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "../stores"
import Translation from "../i18n/translation"

import BlockProduct from "../components/Blocks/BlockProduct.vue"

const { getProduct, fetchCategories } = useStore()
const route = useRoute()

const product = ref(getProduct(`${route.params.slug}`))

const changeMetaTitle = () => {
  document.title = `Comforty — ${product.value?.title[Translation.currentLocale]}`
}

watch(
  () => route.params.slug,
  () => {
    product.value = getProduct(`${route.params.slug}`)
    changeMetaTitle()
  }
)

onMounted(() => {
  changeMetaTitle()

  fetchCategories()
})
</script>

<style scoped></style>
