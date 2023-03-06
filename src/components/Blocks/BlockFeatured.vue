<template>
  <section
    class="featured"
    id="featured"
  >
    <BaseInner class="featured__inner">
      <BaseTitle class="featured__title">
        {{ $t("blocks.featured.title") }}
      </BaseTitle>

      <BaseCarouselControl
        class="featured__control"
        :carousel="refCarousel"
      />

      <Carousel
        class="featured__carousel"
        ref="refCarousel"
        :settings="settings"
      >
        <Slide
          v-for="product in products"
          :key="product.id"
        >
          <BaseCardProduct
            class="featured__product"
            v-bind="product"
          />
        </Slide>
      </Carousel>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Carousel, Slide } from "vue3-carousel"
import { useStore } from "@/stores"

import BaseCardProduct from "../Base/BaseCardProduct.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

const store = useStore()
const products = store.getProducts
const refCarousel = ref()
const settings = {
  itemsToShow: 4,
  snapAlign: "start"
}
</script>

<style scoped lang="scss">
.featured {
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
