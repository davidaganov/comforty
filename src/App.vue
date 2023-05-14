<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<style scoped lang="scss"></style>
