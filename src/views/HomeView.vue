<template>
  <BlockCompanies :companies="companies" />

  <BlockProductsCarousel
    name="featured"
    :products="products"
  />

  <BlockCategories :categories="categories" />

  <BlockProducts :products="products" />

  <BlockReviews :reviews="reviews" />

  <BlockProductsCarousel
    name="recently"
    :products="products"
  />
</template>

<script setup lang="ts">
import BlockCompanies from "../components/Blocks/BlockCompanies.vue"
import BlockProductsCarousel from "../components/Blocks/BlockProductsCarousel.vue"
import BlockCategories from "../components/Blocks/BlockCategories.vue"
import BlockProducts from "../components/Blocks/BlockProducts.vue"
import BlockReviews from "../components/Blocks/BlockReviews.vue"
import { useStore } from "../stores"

const categories = useStore().getCategories
const products = useStore().getProducts.slice(0, 8)
const companies = useStore().getCompanies
const reviews = useStore().getReviews
</script>
