<template>
  <BaseButton
    type="button"
    class="cart"
    appearance="gray"
    :class="store.isProduct(id, 'cart') ? 'cart--active' : ''"
    :title="store.isProduct(id, 'cart') ? $t('product.aria.remove') : $t('product.aria.add')"
    :aria-label="$t('product.aria.cart')"
    @click="() => store.toggleProduct(id, 'cart')"
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

defineProps<{ id: number }>()
const store = useStore()
</script>

<style scoped lang="scss">
.cart {
  &--active {
    color: var(--color-white);
    background-color: var(--color-accent);
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
}
</style>
