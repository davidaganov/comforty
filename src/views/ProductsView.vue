<template>
  <BlockProducts />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useStore } from "../stores"

import BlockProducts from "../components/Blocks/BlockProducts.vue"

const { fetchCategories, fetchTags } = useStore()

onMounted(() => {
  document.title = "Comforty — Products"

  fetchCategories()
  fetchTags()
})
</script>

<style scoped lang="scss"></style>
