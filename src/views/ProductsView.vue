<template>
  <BlockProducts />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue"
import { useHead } from "@unhead/vue"
import { useI18n } from "vue-i18n"
import Translation from "../i18n/translation"

import BlockProducts from "../components/Blocks/BlockProducts.vue"

const { t } = useI18n()

const changeTitle = () => {
  useHead({
    title: t("meta.products.title"),
    meta: [
      { name: "description", content: t("meta.products.description") },
      { property: "og:title", content: t("meta.products.title") },
      { property: "og:description", content: t("meta.products.description") }
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

<style scoped lang="scss"></style>
