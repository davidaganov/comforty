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
          <BaseCardCategory
            class="categories__item"
            v-bind="category"
          />
        </Slide>
      </Carousel>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Carousel, Slide } from "vue3-carousel"

import BaseCardCategory from "../Base/BaseCardCategory.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

defineProps<{
  categories: {
    id: number
    title: { [key: string]: string }
    productsCount: number
    cover: string
    link: string
  }[]
}>()

const refCarousel = ref()

const settings = {
  itemsToShow: 1.94,
  snapAlign: "center"
}

const breakpoints = {
  769: {
    itemsToShow: 2.94
  }
}
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

  &__item {
    margin-right: 2.4rem;
  }
}
</style>
