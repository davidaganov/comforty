<template>
  <section
    class="reviews"
    id="reviews"
  >
    <BaseInner class="reviews__inner">
      <BaseTitle class="reviews__title">
        {{ $t(`blocks.reviews.title`) }}
      </BaseTitle>

      <BaseCarouselControl
        class="reviews__control"
        :carousel="refCarousel"
      />

      <Carousel
        class="reviews__carousel"
        ref="refCarousel"
        :settings="settings"
        :breakpoints="breakpoints"
        :aria-label="$t(`blocks.reviews.carouselAria`)"
      >
        <Slide
          v-for="review in reviews"
          :key="review.id"
        >
          <BaseCardReview
            class="reviews__item"
            v-bind="review"
          />
        </Slide>
      </Carousel>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import type { Review } from "@/interfaces"
import { ref } from "vue"
import { Carousel, Slide } from "vue3-carousel"

import BaseCardReview from "../Base/BaseCardReview.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

defineProps<{ reviews: Review[] }>()

const refCarousel = ref()

const settings = {
  itemsToShow: 1,
  snapAlign: "start"
}

const breakpoints = {
  769: {
    itemsToShow: 2
  }
}
</script>

<style scoped lang="scss">
.reviews {
  margin: 8rem 0;
  padding: 8rem;
  background-color: var(--color-gray);

  &__inner {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 4rem 2rem;
  }

  &__title {
    grid-area: 1 / 1 / 2 / 2;
    align-self: center;
  }

  &__control {
    grid-area: 1 / 3 / 2 / 4;
  }

  &__carousel {
    grid-area: 2 / 1 / 3 / 4;
  }

  &__item {
    padding-right: 2.4rem;
  }
}
</style>
