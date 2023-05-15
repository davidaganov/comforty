<template>
  <BlockCart />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useStore } from "../stores"

import BlockCart from "../components/Blocks/BlockCart.vue"

const { fetchCategories } = useStore()

onMounted(() => {
  document.title = "Comforty — Cart"

  fetchCategories()
})
</script>

<style scoped lang="scss"></style>
