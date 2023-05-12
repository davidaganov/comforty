<template>
  <BlockPromo :products="promoProducts" />

  <BlockCompanies :companies="companies" />

  <BlockProductsCarousel
    name="featured"
    :products="featuredProducts"
  />

  <BlockCategories :categories="categories" />

  <BlockProducts />

  <BlockReviews :reviews="reviews" />

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
import BlockProducts from "../components/Blocks/BlockProducts.vue"
import BlockReviews from "../components/Blocks/BlockReviews.vue"

const { getPromoProducts, getCategories, getCompanies, getReviews, getSortingProducts } = useStore()

const promoProducts = getPromoProducts
const categories = getCategories
const companies = getCompanies
const reviews = getReviews

const featuredProducts = getSortingProducts({ tag: "featured" })
const newestProducts = getSortingProducts({ tag: "newest" })

onMounted(() => {
  document.title = "Comforty"
})
</script>
