<template>
  <section
    class="products"
    id="products"
  >
    <BaseInner class="products__inner">
      <BaseTitle
        class="products__title"
        :class="{ skeleton: !store.getTitleCategory() }"
      >
        {{ store.getTitleCategory()?.[Translation.currentLocale] }}
      </BaseTitle>

      <BaseCategoriesSelect class="products__categories" />
      <hr class="products__line" />

      <BaseSorting
        class="products__sorting"
        :dropdown="true"
      />

      <div
        class="products__list"
        v-if="products"
      >
        <BaseCardProduct
          class="products__item"
          :key="product.id"
          v-bind="product"
          v-for="product in products"
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

      <div
        class="products__empty"
        v-if="products && products.length === 0"
      >
        <span class="products__empty-title">404</span>
        <p class="products__empty-description">{{ $t("pages.products.notFound") }}</p>
      </div>

      <BasePagination
        class="products__pagination"
        v-bind="pagination"
        v-if="pagination"
        @updatePage="setProducts({ category: getSelectedCategory, page: $event })"
      />
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import type { Pagination, Product, Products, RequestProducts } from "../../interfaces"
import { ref, watch, onMounted } from "vue"
import { storeToRefs } from "pinia"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "../../stores"
import Translation from "../../i18n/translation"

import BaseInner from "../Base/BaseInner.vue"
import BaseCardProduct from "../Base/BaseCardProduct.vue"
import BaseSorting from "../Base/BaseSorting.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseCategoriesSelect from "../Base/BaseCategoriesSelect.vue"
import BasePagination from "../Base/BasePagination.vue"

import SkeletonCardProduct from "../Skeleton/SkeletonCardProduct.vue"

const products = ref<Product[]>()
const pagination = ref<Pagination>()
const firstUpdateCategory = ref(true)

const route = useRoute()
const router = useRouter()

const store = useStore()
const { setSelectedCategory, setCurrentPage, setSelectedTag } = store
const { getSelectedTag, getSelectedCategory, getCurrentPage } = storeToRefs(store)

const setRouter = ({ category, page }: RequestProducts) => {
  router.push({ path: route.path, query: { category, page } })
}

const setProducts = async ({ category, attr, page }: RequestProducts) => {
  const queryParams = { category, page: page ? page : 1 }
  const response = (await store.getSortingProducts({
    attr: attr ? attr : undefined,
    category,
    count: 8,
    page: page ? page : undefined,
    pagination: true
  })) as Products

  products.value = response.data
  pagination.value = response.pagination

  setCurrentPage(queryParams.page)
  setRouter(queryParams)
}

const addQueryParams = () => {
  const selectedCategory = route.query.category ? route.query.category : "all"
  const currentPage = route.query.page ? route.query.page : 1
  const queryParams = { category: `${selectedCategory}`, page: +currentPage }

  if (selectedCategory === "all") firstUpdateCategory.value = false

  setSelectedCategory(queryParams.category)
  setCurrentPage(queryParams.page)
  setProducts(queryParams)
  setRouter(queryParams)
}

const updateSortingByCategory = async () => {
  const queryParams = { category: getSelectedCategory.value, page: 1 }

  firstUpdateCategory.value ? (firstUpdateCategory.value = false) : setProducts(queryParams)

  setSelectedTag("all")
  setRouter(queryParams)
}

const updateSortingByTag = () => {
  const queryParams = {
    category: getSelectedCategory.value,
    attr: getSelectedTag.value,
    page: getCurrentPage.value
  }

  setProducts(queryParams)
}

watch(getSelectedTag, updateSortingByTag)
watch(getSelectedCategory, updateSortingByCategory)

onMounted(addQueryParams)
</script>

<style scoped lang="scss">
.products {
  &__inner {
    display: grid;
    gap: 3rem 3rem;
    align-items: center;
    margin-top: 4rem;
    @media (min-width: 1021px) {
      grid-template-columns: minmax(24.3rem, auto) auto 1fr;
    }
    @media (max-width: 1020px) {
      grid-template-columns: minmax(24.3rem, auto) 1fr;
    }
  }

  &__title {
    grid-area: 1 / 1 / 2 / 3;
    @media (min-width: 769px) {
      height: 3.5rem;
    }
  }

  &__line {
    width: 100%;
    height: 0.1rem;
    border: none;
    background-color: var(--color-gray-400);
    @media (min-width: 1021px) {
      grid-area: 2 / 1 / 3 / 4;
    }
    @media (max-width: 1020px) {
      grid-area: 2 / 1 / 3 / 3;
    }
  }

  &__categories {
    @media (min-width: 1021px) {
      grid-area: 3 / 1 / 4 / 2;
      align-self: flex-start;
    }
    @media (max-width: 1020px) {
      grid-area: 3 / 1 / 4 / 2;
    }
  }

  &__sorting {
    margin-left: auto;
    @media (min-width: 1021px) {
      grid-area: 1 / 3 / 2 / 4;
    }
    @media (max-width: 1020px) {
      grid-area: 3 / 2 / 4 / 3;
    }
  }

  &__list {
    display: grid;
    gap: 1.5rem;
    height: 100%;

    @media (min-width: 1201px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1200px) and (min-width: 769px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1021px) {
      grid-area: 3 / 2 / 4 / 4;
    }
    @media (max-width: 1020px) and (min-width: 576px) {
      grid-area: 4 / 1 / 5 / 3;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 575px) {
      grid-area: 5 / 1 / 6 / 3;
    }
  }

  &__pagination {
    @media (min-width: 1021px) {
      grid-area: 4 / 2 / 5 / 4;
    }
    @media (max-width: 1020px) and (min-width: 576px) {
      grid-area: 5 / 1 / 6 / 3;
    }
    @media (max-width: 575px) {
      grid-area: 6 / 1 / 7 / 3;
    }
  }

  &__empty {
    text-align: center;
    @media (min-width: 1021px) {
      grid-area: 3 / 2 / 4 / 4;
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
