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
        class="block__control"
        prevEl="reviews__prev"
        nextEl="reviews__next"
      />
      <div class="reviews__carousel">
        <Swiper
          :slides-per-view="1"
          :space-between="12"
          :loop="true"
          :autopalay="{
            delay: 2000,
            disableOnInteraction: false
          }"
          :speed="500"
          :breakpoints="{ 1021: { slidesPerView: 2 } }"
          :navigation="{ prevEl: '.reviews__prev', nextEl: '.reviews__next' }"
          :modules="modules"
          :aria-label="$t(`blocks.reviews.carouselAria`)"
        >
          <SwiperSlide
            :key="review.id"
            v-for="review in reviews"
          >
            <BaseCardReview v-bind="review" />
          </SwiperSlide>
        </Swiper>
      </div>
    </BaseInner>
  </section>
</template>

<script lang="ts">
interface Props {
  id: number
  text: { [key: string]: string }
  avatar: string
  userName: { [key: string]: string }
  job: { [key: string]: string }
}
</script>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Autoplay } from "swiper"

import BaseInner from "../Base/BaseInner.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseCardReview from "../Base/BaseCardReview.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

defineProps<{ reviews: Props[] }>()

const modules = [Navigation, Autoplay]
</script>

<style scoped lang="scss">
.reviews {
  $parent: &;
  margin: 8rem 0;
  padding: 8rem 0;
  background-color: var(--color-light-gray);

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
}
</style>
