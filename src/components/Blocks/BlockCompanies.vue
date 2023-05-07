<template>
  <section
    class="companies"
    id="companies"
  >
    <BaseInner class="companies__inner">
      <Swiper
        :loop="true"
        :slides-per-view="3"
        :allowTouchMove="false"
        :autoplay="{
          delay: 5,
          disableOnInteraction: false
        }"
        :centered-slides="true"
        :speed="4000"
        :space-between="20"
        :breakpoints="{ 576: { slidesPerView: 5 }, 1021: { slidesPerView: 7 } }"
        :modules="modules"
      >
        <SwiperSlide
          v-for="{ id, name, logo } in companies"
          :key="id"
        >
          <img
            class="companies__logo"
            width="129"
            height="133"
            :alt="name"
            :src="getImageUrl({ fileName: logo, folder: 'images/companies' })"
          />
        </SwiperSlide>
      </Swiper>
    </BaseInner>
  </section>
</template>

<script lang="ts">
interface Props {
  id: number
  name: string
  logo: string
}
</script>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay } from "swiper"
import { getImageUrl } from "../../utils/getImageUrl"

import BaseInner from "../Base/BaseInner.vue"

defineProps<{ companies: Props[] }>()

const modules = [Autoplay]
</script>

<style scoped lang="scss">
.companies {
  &__item {
    @media (min-width: 1021px) {
      padding: 3rem;
    }
    @media (max-width: 1020px) and (min-width: 769px) {
      padding: 2rem;
    }
    @media (max-width: 768px) {
      padding: 0.5rem;
    }
  }

  &__logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: inherit;
  }
}
</style>
