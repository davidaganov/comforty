<template>
  <BlockCart />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue"
import { useHead } from "@unhead/vue"
import { useI18n } from "vue-i18n"
import Translation from "../i18n/translation"

import BlockCart from "../components/Blocks/BlockCart.vue"

const { t } = useI18n()

const changeTitle = () => {
  useHead({
    title: t("meta.cart.title"),
    meta: [
      { name: "description", content: t("meta.cart.description") },
      { property: "og:title", content: t("meta.cart.title") },
      { property: "og:description", content: t("meta.cart.description") }
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
