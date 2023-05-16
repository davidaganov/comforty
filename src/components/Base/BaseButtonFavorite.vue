<template>
  <BaseButton
    type="button"
    class="favorite"
    :appearance="appearance ? appearance : 'white'"
    :class="isProduct(slug, 'favorites') ? 'favorite--active' : ''"
    :title="isProduct(slug, 'favorites') ? $t('product.aria.dislike') : $t('product.aria.like')"
    :aria-label="$t('product.aria.favorite')"
    @click="() => toggleProduct(slug, 'favorites')"
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

defineProps<{ slug: string; appearance?: "primary" | "gray" | "white" | "ghost" | undefined }>()
const { isProduct, toggleProduct } = useStore()
</script>

<style scoped lang="scss">
.favorite {
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
    background-color: var(--color-attention);
    border-color: var(--color-attention);
    transition: all 0.2s;
    opacity: 1 !important;
    &:hover {
      background-color: var(--color-attention-hover);
      border-color: var(--color-attention-hover);
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
