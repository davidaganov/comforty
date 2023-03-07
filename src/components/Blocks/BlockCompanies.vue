<template>
  <section
    class="companies"
    id="companies"
  >
    <BaseInner class="companies__inner">
      <Carousel
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide
          class="companies__item"
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
        </Slide>
      </Carousel>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel"

import type { Company } from "@/interfaces"
import { getImageUrl } from "@/utils/getImageUrl"

defineProps<{ companies: Company[] }>()

const settings = {
  itemsToShow: 3,
  wrapAround: true,
  autoplay: 2000,
  transition: 800,
  snapAlign: "start"
}

const breakpoints = {
  576: {
    itemsToShow: 5
  },

  1021: {
    itemsToShow: 7
  }
}
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
