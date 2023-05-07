<template>
  <section
    class="products"
    id="products"
  >
    <BaseInner class="products__inner">
      <BaseSorting
        class="products__sorting"
        :dropdown="true"
      />
      <div class="products__list">
        <BaseCardProduct
          class="products__item"
          v-for="product in products"
          v-bind="product"
          :key="product.id"
        />
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue"
import { storeToRefs } from "pinia"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "../../stores"

import BaseInner from "../Base/BaseInner.vue"
import BaseCardProduct from "../Base/BaseCardProduct.vue"
import BaseSorting from "../Base/BaseSorting.vue"

const route = useRoute()
const router = useRouter()

const store = useStore()
const { getSelectedSortingTag } = storeToRefs(store)

const products = ref()

const addQueryParams = () => {
  const selectedTag = route.query.attr ? route.query.attr : "all"
  const queryParams = { attr: selectedTag }

  if (typeof selectedTag === "string") {
    products.value = store.getSortingProducts(selectedTag)
    store.setSelectedSortingTag(selectedTag)
  }

  router.push({ path: route.path, query: queryParams })
}

watch(getSelectedSortingTag, () => {
  products.value = store.getSortingProducts(getSelectedSortingTag.value)
  router.push({ path: route.path, query: { attr: getSelectedSortingTag.value } })
})

onMounted(() => {
  addQueryParams()
})
</script>

<style scoped lang="scss">
.products {
  &__inner {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
  }

  &__sorting {
    align-self: flex-end;
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
