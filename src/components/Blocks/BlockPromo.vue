<template>
  <section
    class="promo"
    id="promo"
  >
    <div class="promo__container">
      <div class="promo__content">
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

        <BaseInner class="promo__inner">
          <Swiper
            ref="promoSwiper"
            :loop="true"
            :slides-per-view="1"
            :space-between="50"
            :effect="'fade'"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false
            }"
            :speed="400"
            :navigation="{ prevEl: '.promo__prev', nextEl: '.promo__next' }"
            :pagination="{ el: '.promo__pagination', clickable: true, type: 'custom' }"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="changeCurrentSlide"
          >
            <SwiperSlide
              :key="product.id"
              v-for="product in store.promoProducts"
            >
              <BaseCardPromo
                :active="currentSlide === product.id - 1"
                v-bind="product"
              />
            </SwiperSlide>
          </Swiper>
          <BaseAbout />
        </BaseInner>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { EffectFade, Navigation, Autoplay } from "swiper"
import { useStore } from "../../stores"

import BaseInner from "../Base/BaseInner.vue"
import BaseCardPromo from "../Base/BaseCardPromo.vue"
import BaseAbout from "../Base/BaseAbout.vue"
import IconBase from "../Icons/IconBase.vue"
import IconArrow from "../Icons/IconArrow.vue"

const promoSwiper = ref()
const currentSlide = ref<number>(0)

const onSwiper = (swiper: any) => {
  promoSwiper.value = swiper
}

const changeCurrentSlide = () => {
  currentSlide.value = promoSwiper.value.realIndex
}

const modules = [EffectFade, Navigation, Autoplay]

const store = useStore()
</script>

<style scoped lang="scss">
.promo {
  @media (min-width: 576px) {
    margin-bottom: 10rem;
  }
  &__container {
    @media (max-width: 1800px) and (min-width: 1021px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    @media (min-width: 1021px) {
      width: 100%;
      max-width: 174rem;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__content {
    position: relative;
    background-color: var(--color-gray-600);
    @media (min-width: 1021px) {
      border-radius: 0 0 4.8rem 4.8rem;
    }
  }

  &__inner {
    position: relative;
  }

  &__arrow {
    @media (min-width: 1721px) {
      margin: auto 0;
      top: 0;
      bottom: 0;
    }
    @media (max-width: 1720px) {
      margin: 0 auto;
    }
    @media (max-width: 1720px) and (min-width: 1201px) {
      bottom: 10rem;
    }
    @media (max-width: 1200px) and (min-width: 576px) {
      bottom: 8.5rem;
    }
    @media (min-width: 769px) {
      &:hover {
        background-color: var(--color-accent-hover);
        color: var(--color-white);
      }
    }
    @media (min-width: 576px) {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5.2rem;
      height: 5.2rem;
      border-radius: 10rem;
      background-color: var(--color-white);
      color: var(--color-accent);
      transition: all 0.2s;
      cursor: pointer;
      z-index: 2;
      &:focus-visible {
        background-color: var(--color-accent-hover);
        color: var(--color-white);
      }
    }
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__prev {
    transform: rotate(180deg);
    @media (min-width: 1721px) {
      left: 8.8rem;
    }
    @media (max-width: 1720px) and (min-width: 576px) {
      left: 0;
      right: 10rem;
    }
  }

  &__next {
    @media (min-width: 1721px) {
      right: 8.8rem;
    }
    @media (max-width: 1720px) and (min-width: 576px) {
      left: 10rem;
      right: 0;
    }
  }
}
</style>
