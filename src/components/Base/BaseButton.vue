<template>
  <a
    class="btn"
    :href="link"
    :class="`btn--${appearance} ${arrow ? 'btn--arrow' : ''}`"
    v-if="link"
  >
    <slot></slot>
    <span
      v-if="arrow"
      class="btn__arrow"
    >
      <IconBase
        :width="24"
        :height="24"
        box="0 0 24 24"
      >
        <IconArrow />
      </IconBase>
    </span>
  </a>
  <button
    class="btn"
    :class="`btn--${appearance} ${arrow ? 'btn--arrow' : ''}`"
    :type="type ? type : 'button'"
    v-else
  >
    <slot></slot>
    <span
      v-if="arrow"
      class="btn__arrow"
    >
      <IconBase
        :width="24"
        :height="24"
        box="0 0 24 24"
      >
        <IconArrow />
      </IconBase>
    </span>
  </button>
</template>

<script lang="ts">
export interface Props {
  link?: string
  type?: "button" | "submit" | "reset" | undefined
  appearance?: "primary" | "gray" | "white" | "ghost"
  arrow?: boolean
}
</script>

<script setup lang="ts">
import IconArrow from "../Icons/IconArrow.vue"
import IconBase from "../Icons/IconBase.vue"

withDefaults(defineProps<Props>(), {
  link: undefined,
  type: "button",
  appearance: "primary",
  arrow: false
})
</script>

<style scoped lang="scss">
.btn {
  $parent: &;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  border-radius: 0.8rem;
  font: 600 1.6rem/110% var(--main-font);
  transition: all 0.2s;
  cursor: pointer;

  &--arrow {
    padding: 1.4rem 2.4rem;
  }

  &--primary {
    background-color: var(--color-accent);
    color: var(--color-white);
    &:hover,
    &:focus-visible {
      background-color: var(--color-accent-hover);
    }
    &:not(#{$parent}--arrow) {
      padding: 1.7rem 2.4rem;
    }
  }

  &--white,
  &--gray {
    padding: 1.1rem;
    color: var(--color-black);
    &:hover,
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
  }

  &--ghost {
    padding: 1.6rem 2.4rem;
    font-weight: 500;
    border: 0.1rem solid #e1e3e5;
    background-color: var(--color-white);
    color: var(--color-black);
    &:hover,
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
      border-color: var(--color-accent);
    }
  }

  &--white {
    background-color: var(--color-white);
    color: var(--color-black);
  }

  &--gray {
    background-color: var(--color-gray);
    color: var(--color-black);
  }

  &__arrow {
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>
