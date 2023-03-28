<template>
  <BaseButton
    type="button"
    class="favorite"
    :appearance="appearance ? appearance : 'white'"
    :class="store.isProduct(id, 'favorites') ? 'favorite--active' : ''"
    :title="store.isProduct(id, 'favorites') ? $t('product.aria.dislike') : $t('product.aria.like')"
    :aria-label="$t('product.aria.favorite')"
    @click="() => store.toggleProduct(id, 'favorites')"
  >
    <IconBase
      class="favorite__icon"
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

defineProps<{ id: number; appearance?: "primary" | "gray" | "white" | "ghost" | undefined }>()
const store = useStore()
</script>

<style scoped lang="scss">
.favorite {
  right: 2rem;
  transition: all 0.1s;
  cursor: pointer;
  &:focus-visible {
    opacity: 1 !important;
  }
  &:not(&--active) {
    opacity: 0.8;
  }

  &--active {
    color: var(--color-white);
    background-color: tomato;
    opacity: 1 !important;
    &:hover {
      background-color: #d95138;
    }
  }

  &__icon {
    margin: 0.1rem;
  }

  &.btn--ghost {
    padding: 1.6rem;
  }
}
</style>
