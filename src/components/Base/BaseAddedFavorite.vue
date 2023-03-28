<template>
  <BaseButton
    type="button"
    class="favorite"
    appearance="white"
    :class="store.isProduct(id, 'favorites') ? 'favorite--active' : ''"
    :title="store.isProduct(id, 'favorites') ? $t('product.aria.dislike') : $t('product.aria.like')"
    :aria-label="$t('product.aria.favorite')"
    @click="() => store.toggleProduct(id, 'favorites')"
  >
    <IconBase
      :stroke="true"
      :width="22"
      :height="22"
      box="0 0 22 22"
    >
      <IconHeart />
    </IconBase>
  </BaseButton>
</template>

<script setup lang="ts">
import { useStore } from "../../stores"

import BaseButton from "./BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconHeart from "../Icons/IconHeart.vue"

defineProps<{ id: number }>()
const store = useStore()
</script>

<style scoped lang="scss">
.favorite {
  right: 2rem;
  padding: 1.1rem;
  color: var(--color-black);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.8rem;
  transition: all 0.1s;
  cursor: pointer;
  &:focus-visible {
    opacity: 1 !important;
  }
  &--active {
    color: var(--color-white);
    background-color: tomato;
    opacity: 1 !important;
    &:hover {
      background-color: #d95138;
    }
  }
}
</style>
