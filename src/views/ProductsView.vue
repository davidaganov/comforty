<template>
  <BlockProductsGrid />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import BlockProductsGrid from "../components/Blocks/BlockProductsGrid.vue"

onMounted(() => {
  document.title = "Comforty — Products"
})
</script>

<style scoped lang="scss"></style>
