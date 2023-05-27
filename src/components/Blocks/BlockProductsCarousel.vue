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
          v-if="products"
        >
          <SwiperSlide
            :key="product.slug"
            v-for="product in products"
          >
            <BaseCardProduct v-bind="product" />
          </SwiperSlide>
        </Swiper>

        <div
          class="block__list"
          v-else
        >
          <SkeletonCardProduct
            class="block__list-item"
            :key="index"
            v-for="(_, index) in 4"
          />
        </div>
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "../../interfaces"
import { ref, onMounted } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper"
import { useStore } from "../../stores"

import BaseInner from "../Base/BaseInner.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseCardProduct from "../Base/BaseCardProduct.vue"
import BaseCarouselControl from "../Base/BaseCarouselControl.vue"

import SkeletonCardProduct from "../Skeleton/SkeletonCardProduct.vue"

const props = defineProps<{ name: string }>()

const modules = [Navigation]
const products = ref<Product[]>()

const store = useStore()
const { getSortingProducts } = store

const getProducts = async () => {
  products.value = (await getSortingProducts({ category: "all", attr: props.name })) as Product[]
}

onMounted(getProducts)
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

  &__list {
    display: grid;
    gap: 1.2rem;
    @media (min-width: 1021px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1020px) and (min-width: 769px) {
      grid-template-columns: repeat(3, 1fr);
      &-item:last-of-type {
        display: none;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      &-item:nth-last-child(-n + 2) {
        display: none;
      }
    }
  }
}
</style>
