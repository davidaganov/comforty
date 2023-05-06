<template>
  <div class="control">
    <button
      type="button"
      class="control__arrow control__prev"
      :class="prevEl"
      :aria-label="$t('carousel.prevAria')"
    >
      <IconBase
        :width="24"
        :height="24"
        box="0 0 24 24"
      >
        <IconArrow />
      </IconBase>
    </button>
    <button
      type="button"
      class="control__arrow control__next"
      :class="nextEl"
      :aria-label="$t('carousel.nextAria')"
    >
      <IconBase
        :width="24"
        :height="24"
        box="0 0 24 24"
      >
        <IconArrow />
      </IconBase>
    </button>
  </div>
</template>

<script setup lang="ts">
import IconBase from "../Icons/IconBase.vue"
import IconArrow from "../Icons/IconArrow.vue"

defineProps<{ prevEl: string; nextEl: string }>()
</script>

<style scoped lang="scss">
.control {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  &__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 5rem;
    background-color: var(--color-gray);
    transition: all 0.2s;
    cursor: pointer;
    &:not(&.swiper-button-disabled) {
      &:hover,
      &:focus-visible {
        background-color: var(--color-accent-hover);
        color: var(--color-white);
      }
    }
    &.swiper-button-disabled {
      cursor: not-allowed;
    }
  }

  &__prev {
    transform: rotate(180deg);
  }
}
</style>
