<template>
  <div
    class="sorting"
    role="listbox"
  >
    <span
      id="sortLabel"
      class="visually-hidden"
    >
      Sorting products:
    </span>
    <button
      type="button"
      class="sorting__tag"
      role="option"
      :id="slug"
      :class="{ 'sorting__tag--active': store.isSelectedSortingTag(slug) }"
      :aria-selected="false"
      :aria-labelledby="`sortLabel ${slug}`"
      :key="id"
      v-for="{ id, slug, tag } in tags"
      @click="store.setSelectedSortingTag(slug)"
    >
      {{ tag[Translation.currentLocale] }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../stores"
import Translation from "../../i18n/translation"

const store = useStore()
const tags = store.getSortingTags
</script>

<style scoped lang="scss">
.sorting {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1.6rem;
  &__tag {
    padding: 0.8rem;
    text-transform: uppercase;
    font: 500 1.6rem/110% var(--main-font);
    letter-spacing: 0.05em;
    color: #9a9caa;
    cursor: pointer;
    transition: all 0.2s;
    &--active {
      color: var(--color-black);
      box-shadow: inset 0px -0.2rem 0px #038053;
      &:hover {
        box-shadow: inset 0px -0.2rem 0px var(--color-accent);
      }
      &:focus-visible {
        background-color: #038053;
        color: var(--color-white);
      }
    }
    &:not(&--active) {
      &:hover {
        color: var(--color-black);
      }
      &:focus-visible {
        background-color: var(--color-accent);
        color: var(--color-white);
      }
    }
  }
}
</style>
