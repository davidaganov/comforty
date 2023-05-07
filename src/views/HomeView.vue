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
import BlockPromo from "../components/Blocks/BlockPromo.vue"
import BlockCompanies from "../components/Blocks/BlockCompanies.vue"
import BlockProductsCarousel from "../components/Blocks/BlockProductsCarousel.vue"
import BlockCategories from "../components/Blocks/BlockCategories.vue"
import BlockProducts from "../components/Blocks/BlockProducts.vue"
import BlockReviews from "../components/Blocks/BlockReviews.vue"
import { useStore } from "../stores"

const { getPromoProducts, getCategories, getCompanies, getReviews, getSortingProducts } = useStore()

const promoProducts = getPromoProducts
const categories = getCategories
const companies = getCompanies
const reviews = getReviews

const featuredProducts = getSortingProducts("featured")
const newestProducts = getSortingProducts("newest")
</script>
