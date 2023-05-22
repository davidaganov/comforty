<template>
  <BaseButton
    type="button"
    class="cart"
    :appearance="appearance ? appearance : 'gray'"
    :class="isProduct(slug, 'cart') ? 'cart--active' : ''"
    :title="isProduct(slug, 'cart') ? $t('product.aria.remove') : $t('product.aria.add')"
    :aria-label="$t('product.aria.cart')"
    @click="toggleProduct(slug, 'cart')"
  >
    <slot />
    <IconBase
      :width="24"
      :height="24"
      box="0 0 24 24"
      :stroke="true"
    >
      <IconCart />
    </IconBase>
  </BaseButton>
</template>

<script setup lang="ts">
import { useStore } from "../../stores"

import BaseButton from "./BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconCart from "../Icons/IconCart.vue"

defineProps<{ slug: string; appearance?: "primary" | "gray" | "white" | "ghost" | undefined }>()
const { isProduct, toggleProduct } = useStore()
</script>

<style scoped lang="scss">
.cart {
  &--active {
    &:not(:disabled) {
      color: var(--color-white);
      border-color: var(--color-accent);
      background-color: var(--color-accent);
      &:hover {
        background-color: var(--color-accent-hover);
      }
    }
  }
}
</style>
