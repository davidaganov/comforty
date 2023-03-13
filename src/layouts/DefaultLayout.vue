<template>
  <TheHeader />
  <main>
    <slot />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue"
import TheFooter from "../components/TheFooter.vue"
</script>
