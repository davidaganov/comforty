<template>
  <BlockFavorites />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useStore } from "../stores"

import BlockFavorites from "../components/Blocks/BlockFavorites.vue"

const { fetchCategories } = useStore()

onMounted(() => {
  document.title = "Comforty — Favorites"

  fetchCategories()
})
</script>

<style scoped lang="scss"></style>
