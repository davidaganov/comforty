<template>
  <div class="menu">
    <BaseUserCart
      @click="togglePopup(!open)"
      v-if="screenWidth > 576"
    />
    <!-- @mouseover="togglePopup(true)" -->
    <!-- @mouseleave="togglePopup(false)" -->
    <BaseUserCart
      :to="Translation.i18nRoute({ name: 'cart' })"
      v-else
    />

    <BaseUserFavorites :to="Translation.i18nRoute({ name: 'favorites' })" />

    <Transition name="menu">
      <BaseUserPopup
        @togglePopup="togglePopup(!open)"
        v-show="open"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import Translation from "../../i18n/translation"

import BaseUserCart from "../Base/BaseUserCart.vue"
import BaseUserFavorites from "../Base/BaseUserFavotires.vue"
import BaseUserPopup from "./BaseUserPopup.vue"

const open = ref(false)
const screenWidth = ref(window.innerWidth)

const togglePopup = (value: boolean) => {
  open.value = value
}

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})
</script>

<style scoped lang="scss">
.menu {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
