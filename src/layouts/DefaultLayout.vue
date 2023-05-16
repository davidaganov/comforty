<template>
  <TheHeader />
  <main>
    <slot />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useStore } from "../stores"

import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue"

const { fetchPromoProducts, fetchCompanies, fetchCategories, fetchTags, fetchReviews } = useStore()

onMounted(() => {
  fetchPromoProducts()
  fetchCompanies()
  fetchCategories()
  fetchTags()
  fetchReviews()
})
</script>
