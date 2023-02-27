<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
  </div>
</template>

<script setup lang="ts">
interface Props {
  msg: string
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss"></style>
