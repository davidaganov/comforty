<template>
  <BlockProducts />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import BlockProducts from "../components/Blocks/BlockProducts.vue"

onMounted(() => {
  document.title = "Comforty — Products"
})
</script>

<style scoped lang="scss"></style>
