<template>
  <BlockCart />
</template>

<script setup lang="ts">
import { onMounted } from "vue"

import BlockCart from "../components/Blocks/BlockCart.vue"

onMounted(() => {
  document.title = "Comforty — Cart"
})
</script>

<style scoped lang="scss"></style>
