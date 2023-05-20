<template>
  <BlockFavorites />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue"
import { useHead } from "@unhead/vue"
import { useI18n } from "vue-i18n"
import Translation from "../i18n/translation"

import BlockFavorites from "../components/Blocks/BlockFavorites.vue"

const { t } = useI18n()

const changeTitle = () => {
  useHead({
    title: t("meta.favorites.title"),
    meta: [
      { name: "description", content: t("meta.favorites.description") },
      { property: "og:title", content: t("meta.favorites.title") },
      { property: "og:description", content: t("meta.favorites.description") }
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
