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
interface Props {
  id: number
  title: { [key: string]: string }
  cover: string
  slug: string
  category: string
  attr: {
    newest: boolean
    trending: boolean
    bestsellers: boolean
    featured: boolean
  }
  price: {
    regular: number
    discount?: number | null
  }
}
</script>

<script setup lang="ts">
import { ref } from "vue"
import { Carousel, Slide } from "vue3-carousel"

import BaseInner from "../Base/BaseInner.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseCardProduct from "../Base/BaseCardProduct.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

defineProps<{ name: string; products: Props[] }>()

const refCarousel = ref()

const settings = {
  itemsToShow: 2,
  snapAlign: "start"
}

const breakpoints = {
  769: {
    itemsToShow: 3
  },
  1021: {
    itemsToShow: 4
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
    padding: 0 1.2rem;
  }
}
</style>
