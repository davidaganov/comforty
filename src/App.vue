<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="Translation.i18nRoute({ name: 'home' })">Home</RouterLink>
        <RouterLink :to="Translation.i18nRoute({ name: 'signin' })">Signin</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import Translation from "./i18n/translation"
</script>

<style scoped lang="scss"></style>
