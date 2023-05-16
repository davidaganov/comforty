<template>
  <BlockFavorites />
</template>

<script setup lang="ts">
import { onMounted } from "vue"

import BlockFavorites from "../components/Blocks/BlockFavorites.vue"

onMounted(() => {
  document.title = "Comforty — Favorites"
})
</script>

<style scoped lang="scss"></style>
