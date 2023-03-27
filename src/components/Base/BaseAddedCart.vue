<template>
  <BaseButton
    type="button"
    class="cart"
    appearance="gray"
    :class="isProduct(id, 'cart') ? 'cart--active' : ''"
    :title="isProduct(id, 'cart') ? $t('product.aria.remove') : $t('product.aria.add')"
    :aria-label="$t('product.aria.cart')"
    @click="() => toggleProduct(product, 'cart')"
  >
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

<script lang="ts">
interface Props {
  id: number
  title: { [key: string]: string }
  cover: string
  gallery: string[]
  description: { [key: string]: string }
  slug: string
  category: string
  attr: {
    newest: boolean
    trending: boolean
    bestsellers: boolean
    featured: boolean
  }
  price: {
    regular: number
    discount?: number | null
  }
}
</script>

<script setup lang="ts">
import { useStore } from "../../stores"

import BaseButton from "./BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconCart from "../Icons/IconCart.vue"

const product = defineProps<Props>()
const { isProduct, toggleProduct } = useStore()
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
