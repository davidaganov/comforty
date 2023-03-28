<template>
  <div class="gallery">
    <div class="gallery__big">
      <Carousel
        id="gallery"
        :settings="bigCarouselSettings"
        v-model="currentSlide"
      >
        <Slide
          :key="img"
          v-for="img in gallery"
        >
          <div class="gallery__big-slide">
            <img
              class="gallery__picture"
              width="300"
              height="300"
              :src="getImageUrl({ fileName: img, folder: 'images/products' })"
              :alt="title[Translation.currentLocale]"
            />
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="gallery__small">
      <Carousel
        id="thumbnails"
        ref="carousel"
        :settings="smallCarouselSettings"
        v-model="currentSlide"
      >
        <Slide
          :key="img"
          v-for="(img, index) in gallery"
        >
          <div class="gallery__small-slide">
            <img
              class="gallery__thumbnail"
              width="150"
              height="150"
              :class="{ 'gallery__thumbnail--active': index === currentSlide }"
              :src="getImageUrl({ fileName: img, folder: 'images/products' })"
              :alt="title[Translation.currentLocale]"
              @click="slideTo(index)"
            />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Carousel, Slide } from "vue3-carousel"
import { getImageUrl } from "../../utils/getImageUrl"
import Translation from "../../i18n/translation"

defineProps<{ gallery: string[]; title: { [key: string]: string } }>()

const currentSlide = ref(0)
const carousel = ref()

const slideTo = (index: number) => {
  currentSlide.value = index
}

const bigCarouselSettings = {
  itemsToShow: 1,
  snapAlign: "start"
}
const smallCarouselSettings = {
  itemsToShow: 3,
  snapAlign: "start"
}
</script>

<style scoped lang="scss">
.gallery {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: -0.5rem;

  &__small {
    max-width: 30rem;
    &-slide {
      margin: 0.5rem;
    }
  }

  &__big {
    max-width: 30rem;
    margin-bottom: 0.8rem;
    &-slide {
      margin: 0 0.5rem;
    }
  }

  &__thumbnail {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem;
    &--active {
      box-shadow: 0 0 0 0.2rem var(--color-accent);
    }
  }

  &__picture {
    width: 29rem;
    height: 29rem;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }
}
</style>
