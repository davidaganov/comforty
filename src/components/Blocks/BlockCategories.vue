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
        :carousel="refCarousel"
      />
    </BaseInner>

    <Carousel
      class="categories__carousel"
      ref="refCarousel"
      :settings="settings"
      :breakpoints="breakpoints"
      :aria-label="$t('blocks.categories.carouselAria')"
    >
      <Slide
        v-for="category in categories"
        :key="category.id"
      >
        <BaseCardCategorie
          class="categories__item"
          v-bind="category"
        />
      </Slide>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
import type { Category } from "@/interfaces"
import { ref } from "vue"
import { Carousel, Slide } from "vue3-carousel"

import BaseCardCategorie from "../Base/BaseCardCategorie.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

defineProps<{ categories: Category[] }>()

const refCarousel = ref()

const settings = {
  itemsToShow: 2,
  snapAlign: "center"
}

const breakpoints = {
  769: {
    itemsToShow: 3
  },

  1021: {
    itemsToShow: 5
  }
}
</script>

<style scoped lang="scss">
.categories {
  margin: 8rem 0;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__carousel {
    margin-top: 4rem;
  }

  &__item {
    margin-right: 2.4rem;
  }
}

.carousel {
  &__slide {
    transition: opacity 0.2s;
    &:not(&--prev, &--next, &--active) {
      opacity: 0.5;
    }
  }
}
</style>
