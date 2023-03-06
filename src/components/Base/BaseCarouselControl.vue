<template>
  <div class="control">
    <button
      type="button"
      :class="slide === 0 ? 'disabled' : ''"
      class="control__prev"
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
      class="control__next"
      :class="slide === maxSlide ? 'disabled' : ''"
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
import { ref } from "vue"
import IconArrow from "../Icons/IconArrow.vue"
import IconBase from "../Icons/IconBase.vue"

const props = defineProps<{ carousel: any }>()
const slide = ref(0)
const maxSlide = ref(1)

const next = () => {
  props.carousel.next()
  slide.value = props.carousel.data.currentSlide.value
}

const prev = () => {
  props.carousel.prev()
  slide.value = props.carousel.data.currentSlide.value
}
</script>

<style scoped lang="scss">
.control {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  &__prev,
  &__next {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 5rem;
    background-color: var(--color-gray);
    transition: all 0.2s;
    cursor: pointer;
    &:hover,
    &:focus-visible {
      background-color: var(--color-accent-hover);
      color: var(--color-white);
    }
  }

  &__prev {
    transform: rotate(180deg);
  }
}
</style>
