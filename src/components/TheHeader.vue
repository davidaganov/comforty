<template>
  <header
    class="header"
    id="header"
  >
    <div class="header__inner inner">
      <BaseLanguageSwitcher />
      <TheNavbar />
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseLanguageSwitcher from "./Base/BaseLanguageSwitcher.vue"
import TheNavbar from "./TheNavbar.vue"
</script>

<style scoped lang="scss"></style>
