<template>
  <section
    class="categories"
    id="categories"
  >
    <BaseInner class="categories__inner">
      <BaseTitle class="categories__title">
        {{ $t("blocks.categories.title") }}
      </BaseTitle>

      <BaseCarouselControl
        class="categories__control"
        prevEl="categories__prev"
        nextEl="categories__next"
      />

      <div class="categories__carousel">
        <Swiper
          :slides-per-view="2"
          :space-between="12"
          :breakpoints="{ 769: { slidesPerView: 3 } }"
          :navigation="{ prevEl: '.categories__prev', nextEl: '.categories__next' }"
          :modules="modules"
          :aria-label="$t('blocks.categories.carouselAria')"
        >
          <SwiperSlide
            :key="category.id"
            v-for="category in store.getCategories"
          >
            <BaseCardCategory
              class="categories__item"
              v-bind="category"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper"
import { useStore } from "../../stores"

import BaseInner from "../Base/BaseInner.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseCardCategory from "../Base/BaseCardCategory.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

const modules = [Navigation]

const store = useStore()
</script>

<style scoped lang="scss">
.categories {
  margin: 8rem 0;

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
