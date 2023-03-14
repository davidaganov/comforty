<template>
  <div class="control">
    <button
      type="button"
      class="control__arrow control__prev"
      :class="currentSlide === minSlide && !wrapAround ? 'disabled' : ''"
      :tabindex="currentSlide === minSlide && !wrapAround ? '-1' : '0'"
      :aria-label="$t('carousel.prevAria')"
      @click="prev"
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
      :class="currentSlide === maxSlide && !wrapAround ? 'disabled' : ''"
      :tabindex="currentSlide === maxSlide && !wrapAround ? '-1' : '0'"
      :aria-label="$t('carousel.nextAria')"
      @click="next"
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
import { ref, watchEffect } from "vue"
import IconBase from "../Icons/IconBase.vue"
import IconArrow from "../Icons/IconArrow.vue"

const props = defineProps<{ carousel?: any }>()
const wrapAround = ref<boolean>(false)
const currentSlide = ref<number>(0)
const minSlide = ref<number>(0)
const maxSlide = ref<number>(1)

const next = () => (props.carousel ? props.carousel.next() : null)
const prev = () => (props.carousel ? props.carousel.prev() : null)

watchEffect(() => {
  if (props.carousel) {
    wrapAround.value = props.carousel.data.config.wrapAround
    currentSlide.value = props.carousel.data.currentSlide.value
    maxSlide.value = props.carousel.data.maxSlide.value
  }
})
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
    &:not(&.disabled) {
      &:hover,
      &:focus-visible {
        background-color: var(--color-accent-hover);
        color: var(--color-white);
      }
    }
    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__prev {
    transform: rotate(180deg);
  }
}
</style>
