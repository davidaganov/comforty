<template>
  <section
    class="product"
    :id="`product-${product.slug}`"
    v-if="product"
  >
    <BaseInner>
      <h3 class="product__title">{{ product.title[Translation.currentLocale] }}</h3>
    </BaseInner>
  </section>
</template>

<script lang="ts">
export interface Product {
  id: number
  title: { [key: string]: string }
  cover: string
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
import { useRoute } from "vue-router"
import { useStore } from "../stores"
import Translation from "../i18n/translation"

import BaseInner from "../components/Base/BaseInner.vue"

const store = useStore()
const product = store.getProduct(`${useRoute().params.slug}`)
</script>

<style scoped></style>
