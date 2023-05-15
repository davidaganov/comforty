<template>
  <BlockPromo />

  <BlockCompanies />

  <BlockProductsCarousel
    name="featured"
    :products="featuredProducts"
  />

  <BlockCategories />

  <BlockProductsGrid />

  <BlockReviews />

  <BlockProductsCarousel
    name="recently"
    :products="newestProducts"
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useStore } from "../stores"

import BlockPromo from "../components/Blocks/BlockPromo.vue"
import BlockCompanies from "../components/Blocks/BlockCompanies.vue"
import BlockProductsCarousel from "../components/Blocks/BlockProductsCarousel.vue"
import BlockCategories from "../components/Blocks/BlockCategories.vue"
import BlockProductsGrid from "../components/Blocks/BlockProductsGrid.vue"
import BlockReviews from "../components/Blocks/BlockReviews.vue"

const {
  getSortingProducts,
  fetchPromoProducts,
  fetchCompanies,
  fetchCategories,
  fetchTags,
  fetchReviews
} = useStore()

const featuredProducts = getSortingProducts({ tag: "featured" }).slice(0, 16)
const newestProducts = getSortingProducts({ tag: "newest" }).slice(0, 16)

onMounted(() => {
  document.title = "Comforty"

  fetchPromoProducts()
  fetchCompanies()
  fetchCategories()
  fetchTags()
  fetchReviews()
})
</script>
