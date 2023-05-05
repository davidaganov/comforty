<template>
  <section
    class="promo"
    id="promo"
  >
    <div class="promo__container">
      <div class="promo__content">
        <BaseInner class="promo__inner">
          <swiper
            ref="promoSwiper"
            :loop="true"
            :slides-per-view="1"
            :space-between="50"
            :effect="'fade'"
            :speed="600"
            :navigation="{ prevEl: '.promo__prev', nextEl: '.promo__next' }"
            :pagination="{ el: '.promo__pagination', clickable: true, type: 'custom' }"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="changeCurrentSlide"
          >
            <swiper-slide
              :key="product.id"
              v-for="product in products"
            >
              <BaseCardPromo v-bind="product" />
            </swiper-slide>
          </swiper>
          <BaseAbout />
        </BaseInner>
        <div class="promo__navigation">
          <button
            type="button"
            class="promo__arrow promo__prev"
            :aria-label="$t('carousel.prevAria')"
          >
            <IconBase
              :width="24"
              :height="24"
              box="0 0 24 24"
            >
              <IconArrow />
            </IconBase>
          </button>
          <button
            type="button"
            class="promo__arrow promo__next"
            :aria-label="$t('carousel.nextAria')"
          >
            <IconBase
              :width="24"
              :height="24"
              box="0 0 24 24"
            >
              <IconArrow />
            </IconBase>
          </button>
        </div>
        <div class="promo__pagination">
          <button
            type="button"
            class="promo__dot"
            :class="{ 'promo__dot--active': currentSlide === index - 1 }"
            :aria-label="`go to slide ${index}`"
            :key="index"
            v-for="index in products.length"
            @click="slideTo(index - 1)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface Props {
  id: number
  title: { [key: string]: string }
  subtitle: { [key: string]: string }
  img: string
  slug: string
  discount: number
}
</script>

<script setup lang="ts">
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { EffectFade, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/effect-fade"

import BaseInner from "../Base/BaseInner.vue"
import BaseCardPromo from "../Base/BaseCardPromo.vue"
import BaseAbout from "../Base/BaseAbout.vue"
import IconBase from "../Icons/IconBase.vue"
import IconArrow from "../Icons/IconArrow.vue"

defineProps<{ products: Props[] }>()

const promoSwiper = ref()
const currentSlide = ref<number>(0)

const onSwiper = (swiper: any) => {
  promoSwiper.value = swiper
}

const slideTo = (index: number) => {
  promoSwiper.value.slideTo(index)
}

const changeCurrentSlide = () => {
  currentSlide.value = promoSwiper.value.realIndex
}

const modules = [EffectFade, Navigation, Pagination]
</script>

<style scoped lang="scss">
.promo {
  margin-bottom: 10rem;
  &__container {
    width: 100%;
    max-width: 174rem;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1800px) and (min-width: 375px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    @media (max-width: 374px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  &__content {
    position: relative;
    background-color: var(--color-gray);
    border-radius: 0px 0px 4.8rem 4.8rem;
  }

  &__inner {
    position: relative;
  }

  &__arrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.2rem;
    height: 5.2rem;
    margin: auto 0;
    top: 0;
    bottom: 0;
    border-radius: 10rem;
    background-color: var(--color-white);
    color: var(--color-accent);
    transition: all 0.2s;
    cursor: pointer;
    z-index: 1;
    &:hover,
    &:focus-visible {
      background-color: var(--color-accent-hover);
      color: var(--color-white);
    }
  }

  &__prev {
    left: 8.8rem;
    transform: rotate(180deg);
  }

  &__next {
    right: 8.8rem;
  }

  &__pagination {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin: 0 auto;
    left: 0;
    bottom: 11.1rem;
    right: 0;
  }

  &__dot {
    width: 1.2rem;
    height: 1.2rem;
    background-color: #9a9caa;
    border-radius: 1.2rem;
    cursor: pointer;
    z-index: 1;
    &:focus-visible {
      background-color: var(--color-accent-hover);
    }
    &--active {
      background-color: var(--color-black);
      &:focus-visible {
        background-color: var(--color-accent);
      }
    }
  }
}
</style>
