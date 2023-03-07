<template>
  <BlockCompanies :companies="companies" />
  <BlockProductsCarousel
    name="featured"
    :products="products"
  />
  <BlockReviews :reviews="reviews" />
  <BlockProductsCarousel
    name="recently"
    :products="products"
  />
</template>

<script setup lang="ts">
import BlockCompanies from "@/components/Blocks/BlockCompanies.vue"
import BlockProductsCarousel from "@/components/Blocks/BlockProductsCarousel.vue"
import BlockReviews from "@/components/Blocks/BlockReviews.vue"
import { useStore } from "@/stores"

const products = useStore().getProducts
const companies = useStore().getCompanies
const reviews = useStore().getReviews
</script>
