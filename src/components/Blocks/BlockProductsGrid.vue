<template>
  <section
    class="products"
    id="products"
  >
    <BaseInner class="products__inner">
      <BaseTitle class="products__title">
        {{ $t("blocks.products.title") }}
      </BaseTitle>

      <BaseSorting />

      <div
        class="products__list"
        v-if="products"
      >
        <BaseCardProduct
          class="products__item"
          :key="product.id"
          v-for="product in products"
          v-bind="product"
        />
      </div>

      <div
        class="products__list"
        v-else
      >
        <SkeletonCardProduct
          class="products__item"
          :key="index"
          v-for="(_, index) in 8"
        />
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "../../interfaces"
import { ref, onMounted, watch } from "vue"
import { useStore } from "../../stores"
import { storeToRefs } from "pinia"

import BaseInner from "../Base/BaseInner.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseSorting from "../Base/BaseSorting.vue"
import BaseCardProduct from "../Base/BaseCardProduct.vue"

import SkeletonCardProduct from "../Skeleton/SkeletonCardProduct.vue"

const store = useStore()
const { getSelectedTag } = storeToRefs(store)

const products = ref<Product[]>()

const getProducts = async () => {
  products.value = (await store.getSortingProducts({ attr: "all", count: 8 })) as Product[]
}

const updateProducts = async () => {
  products.value = (await store.getSortingProducts({
    attr: getSelectedTag.value,
    count: 8
  })) as Product[]
}

watch(getSelectedTag, updateProducts)

onMounted(getProducts)
</script>

<style scoped lang="scss">
.products {
  &__title {
    text-align: center;
    margin-bottom: 1.6rem;
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

  &__item {
    @media (max-width: 1020px) {
      &:nth-of-type(n + 7) {
        display: none;
      }
    }
  }
}
</style>
