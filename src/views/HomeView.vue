<template>
  <BlockPromo />

  <BlockCompanies />

  <BlockProductsCarousel name="featured" />

  <BlockCategories />

  <BlockProductsGrid />

  <BlockReviews />

  <BlockProductsCarousel name="newest" />
</template>

<script setup lang="ts">
import { onMounted } from "vue"

import BlockPromo from "../components/Blocks/BlockPromo.vue"
import BlockCompanies from "../components/Blocks/BlockCompanies.vue"
import BlockProductsCarousel from "../components/Blocks/BlockProductsCarousel.vue"
import BlockCategories from "../components/Blocks/BlockCategories.vue"
import BlockProductsGrid from "../components/Blocks/BlockProductsGrid.vue"
import BlockReviews from "../components/Blocks/BlockReviews.vue"

onMounted(() => {
  document.title = "Comforty"
})
</script>
