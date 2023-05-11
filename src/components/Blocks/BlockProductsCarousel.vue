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
        :prevEl="`${name}__prev`"
        :nextEl="`${name}__next`"
      />

      <div class="block__carousel">
        <Swiper
          :slides-per-view="2"
          :space-between="12"
          :breakpoints="{ 769: { slidesPerView: 3 }, 1021: { slidesPerView: 4 } }"
          :navigation="{ prevEl: `.${name}__prev`, nextEl: `.${name}__next` }"
          :modules="modules"
          :aria-label="$t(`blocks.${name}.carouselAria`)"
        >
          <SwiperSlide
            :key="product.id"
            v-for="product in products"
          >
            <BaseCardProduct v-bind="product" />
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
  cover: string
  gallery: string[]
  description: Record<string, string>
  slug: string
  category: string
  attr: Record<string, boolean>
  price: {
    regular: number
    discount?: number | null
  }
}
</script>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper"

import BaseInner from "../Base/BaseInner.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseCardProduct from "../Base/BaseCardProduct.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

defineProps<{ name: string; products: Props[] }>()

const modules = [Navigation]
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
}
</style>
