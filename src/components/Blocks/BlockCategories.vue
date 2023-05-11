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
        class="block__control"
        prevEl="categories__prev"
        nextEl="categories__next"
      />

      <div class="categories__carousel">
        <Swiper
          :slides-per-view="1"
          :space-between="12"
          :breakpoints="{ 500: { slidesPerView: 2 }, 769: { slidesPerView: 3 } }"
          :navigation="{ prevEl: '.categories__prev', nextEl: '.categories__next' }"
          :modules="modules"
          :aria-label="$t('blocks.categories.carouselAria')"
        >
          <SwiperSlide
            :key="category.id"
            v-for="category in categories"
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

<script lang="ts">
interface Props {
  id: number
  title: Record<string, string>
  productsCount: number
  cover: string
  slug: string
}
</script>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper"

import BaseInner from "../Base/BaseInner.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseCardCategory from "../Base/BaseCardCategory.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

defineProps<{ categories: Props[] }>()

const modules = [Navigation]
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
