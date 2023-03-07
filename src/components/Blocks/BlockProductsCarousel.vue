<template>
  <section
    class="block"
    :id="name"
  >
    <BaseInner class="block__inner">
      <BaseTitle class="block__title">
        {{ $t(`blocks.${name}.title`) }}
      </BaseTitle>

      <BaseCarouselControl
        class="block__control"
        :carousel="refCarousel"
      />

      <Carousel
        class="block__carousel"
        ref="refCarousel"
        :settings="settings"
        :breakpoints="breakpoints"
        :aria-label="$t(`blocks.${name}.carouselAria`)"
      >
        <Slide
          v-for="product in products"
          :key="product.id"
        >
          <BaseCardProduct
            class="block__product"
            v-bind="product"
          />
        </Slide>
      </Carousel>
    </BaseInner>
  </section>
</template>

<script lang="ts">
import type { Product } from "@/interfaces"

interface Props {
  name: string
  products: Product[]
}
</script>

<script setup lang="ts">
import { ref } from "vue"
import { Carousel, Slide } from "vue3-carousel"

import BaseCardProduct from "../Base/BaseCardProduct.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

defineProps<Props>()

const refCarousel = ref()

const settings = {
  itemsToShow: 1.86,
  snapAlign: "start"
}

const breakpoints = {
  500: {
    itemsToShow: 1.94
  },
  769: {
    itemsToShow: 2.94
  },

  1021: {
    itemsToShow: 3.94
  }
}
</script>

<style scoped lang="scss">
.block {
  margin: 3rem 0;

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

  &__product {
    padding-right: 2.4rem;
  }
}
</style>
