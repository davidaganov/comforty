<template>
  <TheHeader />
  <main>
    <slot />

    <BlockProductsCarousel
      class="products"
      name="featured"
    />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useStore } from "../stores"

import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue"

import BlockProductsCarousel from "../components/Blocks/BlockProductsCarousel.vue"

const { fetchCategories, fetchTags } = useStore()

onMounted(() => {
  fetchCategories()
  fetchTags()
})
</script>

<style scoped lang="scss">
.products {
  margin-top: 6rem;
}
</style>
