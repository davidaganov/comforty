<template>
  <div
    class="sorting"
    role="listbox"
    :class="{ 'sorting--dropdown': dropdown, 'sorting--open': open }"
    :aria-expanded="open || !dropdown"
    @click="toggleDropdown(!open)"
    @keydown.esc="open ? toggleDropdown(false) : null"
  >
    <span
      id="sortLabel"
      class="sorting__label"
    >
      {{ $t("pages.products.sorting.label") }}:
    </span>
    <button
      type="button"
      class="sorting__current"
      tabindex="0"
      :aria-label="$t('pages.products.sorting.aria')"
      v-if="dropdown"
      @keydown.shift.exact="(e: KeyboardEvent) => e.key === 'Tab' ? toggleDropdown(false) : null"
    >
      <span>
        {{
          store.getTitleSelectedTag()?.[Translation.currentLocale]
            ? store.getTitleSelectedTag()?.[Translation.currentLocale]
            : $t("pages.products.sorting.default")
        }}
      </span>
      <IconBase
        class="sorting__icon"
        box="0 0 9 5"
        :stroke="true"
        :width="12"
        :height="8"
      >
        <IconChevron />
      </IconBase>
      <IconBase
        class="sorting__settings"
        :width="24"
        :height="24"
      >
        <IconSettings />
      </IconBase>
    </button>

    <Transition name="sorting--dropdown">
      <div
        class="sorting__container"
        v-show="open"
      >
        <button
          type="button"
          class="sorting__tag"
          role="option"
          :id="`tag-${slug}`"
          :class="{ 'sorting__tag--active': store.isSelectedTag(slug) }"
          :aria-selected="store.isSelectedTag(slug)"
          :aria-labelledby="`sortLabel tag-${slug}`"
          :key="id"
          v-for="({ id, slug, tag }, index) in tags"
          @click="store.setSelectedTag(slug)"
          @keydown.tab.exact="index === tags.length - 1 ? toggleDropdown(false) : null"
        >
          {{ tag[Translation.currentLocale] }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { storeToRefs } from "pinia"
import { useStore } from "../../stores"
import Translation from "../../i18n/translation"

import IconBase from "../Icons/IconBase.vue"
import IconChevron from "../Icons/IconChevron.vue"
import IconSettings from "../Icons/IconSettings.vue"

const props = defineProps<{ dropdown?: boolean }>()

const store = useStore()
const { getTags } = storeToRefs(store)

const tags = ref(getTags)
const dropdown = ref(props.dropdown)
const open = ref(false)

const toggleDropdown = (value: boolean) => {
  dropdown.value ? (open.value = value) : null
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
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.2s;
  }

  &__current {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1.5rem;
    border-radius: 0.8rem;
    border-width: 0.1rem;
    border-style: solid;
    transition: all 0.2s;
    user-select: none;
    cursor: pointer;
    @media (min-width: 576px) {
      width: 20rem;
      span {
        font: 500 1.6rem/110% var(--main-font);
      }
    }
    @media (max-width: 575px) {
      font-size: 0.1rem;
      span {
        position: absolute;
        width: 0.1rem;
        height: 0.1rem;
        margin: -0.1rem;
        border: 0;
        padding: 0;
        clip: rect(0 0 0 0);
        overflow: hidden;
      }
    }
  }

  &__icon {
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__settings {
    @media (min-width: 576px) {
      display: none;
    }
  }

  &--open {
    #{$parent}__current {
      background-color: var(--color-accent);
      color: var(--color-white);
      border-color: var(--color-accent);
    }

    @media (min-width: 576px) {
      #{$parent}__icon {
        transform: rotate(180deg);
      }
    }
  }

  &:not(&--open) {
    #{$parent}__current {
      color: var(--color-black);
      border-color: var(--color-gray-400);
      &:hover,
      &:focus-visible {
        background-color: var(--color-accent);
        color: var(--color-white);
        border-color: var(--color-accent);
      }
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

    #{$parent}__container {
      position: absolute;
      flex-direction: column;
      max-width: 20rem;
      width: 100%;
      right: 0;
      top: 6rem;
      border-radius: 1rem;
      border: 0.1rem solid var(--color-gray-400);
      z-index: 3;
      @media (max-width: 575px) {
        width: 20rem;
      }
    }

    #{$parent}__label {
      @media (min-width: 769px) {
        margin-right: 1rem;
        font: 400 1.6rem/110% var(--main-font);
        color: var(--color-black);
      }
      @media (max-width: 768px) {
        position: absolute;
        width: 0.1rem;
        height: 0.1rem;
        margin: -0.1rem;
        border: 0;
        padding: 0;
        clip: rect(0 0 0 0);
        overflow: hidden;
      }
    }

    #{$parent}__tag {
      padding: 1.2rem 1rem;
      font: 400 1.6rem/110% var(--main-font);
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
      flex-wrap: wrap;
    }

    #{$parent}__label {
      position: absolute;
      width: 0.1rem;
      height: 0.1rem;
      margin: -0.1rem;
      border: 0;
      padding: 0;
      clip: rect(0 0 0 0);
      overflow: hidden;
    }

    #{$parent}__tag {
      color: var(--color-gray-200);
      text-transform: uppercase;
      &:not(#{$parent}--active) {
        &:focus-visible {
          background-color: var(--color-accent);
          color: var(--color-white);
        }
      }
      @media (min-width: 769px) {
        padding: 0.8rem;
        font: 500 1.6rem/110% var(--main-font);
      }
      @media (max-width: 768px) {
        padding: 0.4rem;
        font: 400 1.6rem/110% var(--main-font);
      }
      @media (min-width: 576px) {
        &:not(#{$parent}--active):hover {
          color: var(--color-black);
        }
      }
      &--active {
        color: var(--color-black);
        box-shadow: inset 0 -0.2rem 0 #038053;
        &:hover {
          box-shadow: inset 0 -0.2rem 0 var(--color-accent);
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
