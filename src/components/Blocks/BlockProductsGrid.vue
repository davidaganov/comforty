<template>
  <section
    class="products"
    id="products"
  >
    <BaseInner class="products__inner">
      <BaseTitle class="products__title">{{ $t("page.products.category.title") }}</BaseTitle>
      <BaseCategoriesSelect class="products__categories" />
      <hr class="products__line" />
      <BaseSorting
        class="products__sorting"
        :dropdown="true"
      />
      <div
        class="products__list"
        v-if="products.length !== 0"
      >
        <BaseCardProduct
          class="products__item"
          :key="product.id"
          v-bind="product"
          v-for="product in products"
        />
      </div>

      <div
        class="products__empty"
        v-else
      >
        <span class="products__empty-title">404</span>
        <p class="products__empty-description">{{ $t("page.products.notFound") }}</p>
      </div>
    </BaseInner>
  </section>
</template>

<script lang="ts">
interface Product {
  id: number
  title: Record<string, string>
  cover: string
  gallery: string[]
  description: Record<string, string>
  slug: string
  category: string
  attr: Record<string, boolean>
  price: {
    regular: number
    discount?: number | null
  }
}
</script>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue"
import { storeToRefs } from "pinia"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "../../stores"

import BaseInner from "../Base/BaseInner.vue"
import BaseCardProduct from "../Base/BaseCardProduct.vue"
import BaseSorting from "../Base/BaseSorting.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseCategoriesSelect from "../Base/BaseCategoriesSelect.vue"

const products = ref<Product[]>([])

const route = useRoute()
const router = useRouter()

const store = useStore()
const { getSelectedSortingTag, getSelectedCategory } = storeToRefs(store)

const addQueryParams = () => {
  const selectedCategory = route.query.cat ? route.query.cat : "all"
  const queryParams = { cat: selectedCategory }

  if (typeof selectedCategory === "string") {
    products.value = store.getSortingProducts({ category: selectedCategory })
    store.setSelectedCategory(selectedCategory)
  }

  router.push({ path: route.path, query: queryParams })
}

const updateSortingByTag = () => {
  products.value = store.getSortingProducts({
    tag: getSelectedSortingTag.value,
    category: getSelectedCategory.value
  })
}

const updateSortingByCategory = () => {
  store.setSelectedSortingTag("all")
  products.value = store.getSortingProducts({ category: getSelectedCategory.value })
  router.push({
    path: route.path,
    query: { cat: getSelectedCategory.value }
  })
}

watch(getSelectedSortingTag, updateSortingByTag)
watch(getSelectedCategory, updateSortingByCategory)

onMounted(() => {
  addQueryParams()
})
</script>

<style scoped lang="scss">
.products {
  &__inner {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3rem 3rem;
    align-items: center;
    padding-top: 3rem;
  }

  &__title {
    @media (min-width: 1021px) {
      grid-area: 1 / 1 / 2 / 2;
    }
    @media (max-width: 1020px) {
      grid-area: 1 / 1 / 2 / 3;
    }
  }

  &__line {
    width: 100%;
    height: 0.1rem;
    border: none;
    background-color: var(--color-gray);
    @media (min-width: 1021px) {
      grid-area: 2 / 1 / 3 / 3;
    }
    @media (max-width: 1020px) {
      grid-area: 2 / 1 / 3 / 3;
    }
  }

  &__categories {
    @media (min-width: 1021px) {
      grid-area: 3 / 1 / 4 / 2;
      align-self: flex-start;
      margin-top: 2rem;
    }
    @media (max-width: 1020px) {
      grid-area: 3 / 1 / 4 / 2;
    }
  }

  &__sorting {
    margin-left: auto;
    @media (min-width: 1021px) {
      grid-area: 1 / 2 / 2 / 3;
    }
    @media (max-width: 1020px) {
      grid-area: 3 / 2 / 4 / 3;
    }
  }

  &__list {
    display: grid;
    gap: 1.5rem;
    height: 100%;
    margin-top: 2rem;

    @media (min-width: 1201px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1200px) and (min-width: 769px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1021px) {
      grid-area: 3 / 2 / 4 / 3;
    }
    @media (max-width: 1020px) and (min-width: 576px) {
      grid-area: 4 / 1 / 5 / 3;
    }
    @media (max-width: 575px) {
      grid-area: 5 / 1 / 6 / 3;
    }
  }

  &__empty {
    text-align: center;
    @media (min-width: 1021px) {
      grid-area: 3 / 2 / 4 / 3;
    }
    @media (max-width: 1020px) {
      margin-top: 4rem;
    }
    @media (max-width: 1020px) and (min-width: 576px) {
      grid-area: 4 / 1 / 5 / 3;
    }
    @media (max-width: 575px) {
      grid-area: 5 / 1 / 6 / 3;
    }
    &-title {
      display: block;
      margin-bottom: 1rem;
      font: 600 4rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-description {
      font: 600 2rem/110% var(--main-font);
      color: var(--color-black);
    }
  }
}
</style>
