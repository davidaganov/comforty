<template>
  <BlockProduct
    v-bind="product"
    v-if="product"
  />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useStore } from "../stores"
import BlockProduct from "../components/Blocks/BlockProduct.vue"

const store = useStore()
const product = store.getProduct(`${useRoute().params.slug}`)
</script>

<style scoped></style>
