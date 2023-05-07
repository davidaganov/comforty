<template>
  <div
    class="sorting"
    role="listbox"
    :class="{ 'sorting--dropdown': dropdown, 'sorting--open': open }"
    :aria-expanded="open || !dropdown"
    @click="openDropdown()"
  >
    <span
      id="sortLabel"
      class="sorting__label"
      :class="!dropdown ? 'visually-hidden' : ''"
      :tabindex="dropdown ? '0' : '-1'"
    >
      {{ $t("sorting.label") }}
    </span>
    <Transition name="sorting--dropdown">
      <div
        v-show="open"
        class="sorting__container"
      >
        <button
          type="button"
          class="sorting__tag"
          role="option"
          :id="`tag-${slug}`"
          :class="{ 'sorting__tag--active': store.isSelectedSortingTag(slug) }"
          :aria-selected="store.isSelectedSortingTag(slug)"
          :aria-labelledby="`sortLabel tag-${slug}`"
          :key="id"
          v-for="{ id, slug, tag } in tags"
          @click="store.setSelectedSortingTag(slug)"
        >
          {{ tag[Translation.currentLocale] }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useStore } from "../../stores"
import Translation from "../../i18n/translation"

const props = defineProps<{ dropdown?: boolean }>()

const store = useStore()
const tags = store.getSortingTags
const dropdown = ref(props.dropdown)
const open = ref(false)

const openDropdown = () => {
  dropdown.value ? (open.value = !open.value) : null
}

onMounted(() => {
  if (!dropdown.value) open.value = true
})
</script>

<style scoped lang="scss">
.sorting {
  $parent: &;

  &__container {
    display: flex;
    justify-content: center;
  }

  &__tag {
    font: 400 1.6rem/110% var(--main-font);
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.2s;
  }

  &--open {
    #{$parent}__label {
      background-color: var(--color-accent);
      color: var(--color-white);
      border-color: var(--color-accent);
    }
  }

  &--dropdown {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 5rem;

    &-enter-active,
    &-leave-active {
      transition: opacity 0.2s ease;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
    }

    &:not(#{$parent}--open) {
      #{$parent}__label {
        color: var(--color-black);
        border-color: #e1e3e5;
      }
    }

    #{$parent}__container {
      position: absolute;
      flex-direction: column;
      width: 100%;
      left: 0;
      top: 5.5rem;
      border-radius: 1rem;
      box-shadow: 0px 1.9rem 3rem 0px rgba(39, 35, 67, 0.12);
      z-index: 3;
    }

    #{$parent}__label {
      padding: 1.6rem 2.4rem;
      font: 500 1.6rem/110% var(--main-font);
      border-radius: 0.8rem;
      border-width: 0.1rem;
      border-style: solid;
      transition: all 0.2s;
      user-select: none;
      cursor: pointer;
      &:hover,
      &:focus-visible {
        background-color: var(--color-accent);
        color: var(--color-white);
        border-color: var(--color-accent);
      }
    }

    #{$parent}__tag {
      padding: 1.2rem 1rem;
      background-color: var(--color-white);
      color: var(--color-black);
      &:first-of-type {
        border-radius: 1rem 1rem 0 0;
      }
      &:last-of-type {
        border-radius: 0 0 1rem 1rem;
      }
      &:hover,
      &:focus-visible {
        background-color: var(--color-accent-hover);
        color: var(--color-white);
      }
      &--active {
        color: var(--color-white);
        background-color: var(--color-accent);
      }
    }
  }

  &:not(&--dropdown) {
    #{$parent}__container {
      gap: 0.8rem;
    }

    #{$parent}__tag {
      padding: 0.8rem;
      color: var(--color-dark-gray);
      text-transform: uppercase;
      &:not(#{$parent}--active) {
        &:hover {
          color: var(--color-black);
        }
        &:focus-visible {
          background-color: var(--color-accent);
          color: var(--color-white);
        }
      }
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
    }
  }
}
</style>
