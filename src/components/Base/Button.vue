<template>
  <a href="#">{{ text }}</a>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<style scoped lang="scss"></style>
