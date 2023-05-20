<template>
  <div
    v-if="totalPages > 0"
    class="pagination"
  >
    <BaseButton
      appearance="ghost"
      class="pagination__btn"
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
    >
      {{ $t("pages.products.pagination.prev") }}
    </BaseButton>
    <button
      type="button"
      class="pagination__page"
      :class="{ 'pagination__page--active': currentPage === pageNumber }"
      :key="pageNumber"
      v-for="pageNumber in visiblePages"
      @click="goToPage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
    <BaseButton
      appearance="ghost"
      class="pagination__btn"
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
    >
      {{ $t("pages.products.pagination.next") }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import type { Pagination } from "../../interfaces"
import { ref, computed, onMounted, onUnmounted, watch } from "vue"

import BaseButton from "./BaseButton.vue"

const props = defineProps<Pagination>()

const currentPage = ref(props.page)
const totalPages = ref(props.pages)
const screenWidth = ref(window.innerWidth)
const maxVisiblePages = ref(8)

const emits = defineEmits(["updatePage"])

const visiblePages = computed(() => {
  const halfVisiblePages = Math.floor(maxVisiblePages.value / 2)

  let startPage = Math.max(currentPage.value - halfVisiblePages, 1)
  let endPage = Math.min(startPage + maxVisiblePages.value - 1, totalPages.value)

  if (endPage - startPage + 1 < maxVisiblePages.value) {
    startPage = Math.max(endPage - maxVisiblePages.value + 1, 1)
  }

  return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index)
})

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

const changeMaxVisiblePages = () => {
  if (screenWidth.value > 1021) maxVisiblePages.value = 8
  if (screenWidth.value < 1020 && screenWidth.value > 576) maxVisiblePages.value = 6
  if (screenWidth.value < 575) maxVisiblePages.value = 3
}

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    emits("updatePage", page)
  }
}

watch(props, () => {
  currentPage.value = props.page
  totalPages.value = props.pages
})

watch(screenWidth, () => {
  changeMaxVisiblePages()
})

onMounted(() => {
  window.addEventListener("resize", handleResize)
  changeMaxVisiblePages()
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;

  &__btn {
    @media (max-width: 575px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  &__page {
    width: 5.1rem;
    height: 5.1rem;
    font: 400 1.6rem var(--main-font);
    border-radius: 0.8rem;
    transition: all 0.2s;
    cursor: pointer;
    &:hover,
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
    &--active {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
  }
}
</style>
