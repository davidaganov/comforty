<template>
  <BlockPromo />

  <BlockCompanies />

  <BlockProductsCarousel name="featured" />

  <BlockCategories />

  <BlockProductsGrid />

  <BlockReviews />

  <BlockProductsCarousel name="newest" />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue"
import { useHead } from "@unhead/vue"
import { useI18n } from "vue-i18n"
import Translation from "../i18n/translation"

import BlockPromo from "../components/Blocks/BlockPromo.vue"
import BlockCompanies from "../components/Blocks/BlockCompanies.vue"
import BlockProductsCarousel from "../components/Blocks/BlockProductsCarousel.vue"
import BlockCategories from "../components/Blocks/BlockCategories.vue"
import BlockProductsGrid from "../components/Blocks/BlockProductsGrid.vue"
import BlockReviews from "../components/Blocks/BlockReviews.vue"

const { t } = useI18n()

const changeTitle = () => {
  useHead({
    title: t("meta.home.title"),
    meta: [
      { name: "description", content: t("meta.home.description") },
      { property: "og:url", content: "https://aganov.dev/comforty" },
      { property: "og:title", content: t("meta.home.title") },
      { property: "og:description", content: t("meta.home.description") }
    ]
  })
}

watch(
  () => Translation.currentLocale,
  () => changeTitle()
)

onMounted(() => {
  changeTitle()
})
</script>
