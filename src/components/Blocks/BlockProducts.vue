<template>
  <section
    class="products"
    id="products"
  >
    <BaseInner class="products__inner">
      <BaseTitle class="products__title">{{ $t("blocks.products.title") }}</BaseTitle>
      <div class="products__list">
        <BaseCardProduct
          v-for="product in products"
          v-bind="product"
          :key="product.id"
        />
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "@/interfaces"
import BaseCardProduct from "../Base/BaseCardProduct.vue"

defineProps<{ products: Product[] }>()
</script>

<style scoped lang="scss">
.products {
  &__title {
    text-align: center;
  }

  &__list {
    display: grid;
    gap: 1.5rem;
    margin-top: 4rem;
    @media (min-width: 1021px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1020px) and (min-width: 576px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 575px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
