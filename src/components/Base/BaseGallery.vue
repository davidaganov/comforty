<template>
  <div
    class="gallery"
    v-if="gallery.length > 1"
  >
    <div class="gallery__big">
      <Swiper
        id="gallery"
        ref="gallery"
        :slides-per-view="1"
        :effect="'fade'"
        :thumbs="{ swiper: thumbnailsSwiper }"
        :allowTouchMove="false"
        :modules="modules"
      >
        <SwiperSlide
          :key="img"
          v-for="img in gallery"
        >
          <div class="gallery__big-slide">
            <img
              class="gallery__picture"
              width="290"
              height="290"
              :src="getImageUrl({ fileName: img, folder: 'images/products' })"
              :alt="title[Translation.currentLocale]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="gallery__small">
      <Swiper
        id="thumbnails"
        ref="thumbnailsSwiper"
        :slides-per-view="3"
        :freeMode="true"
        :watch-slides-progress="true"
        @swiper="onSwiperThumbnails"
        @slideChange="changeCurrentSlide"
        :modules="modules"
        v-if="gallery.length > 1"
      >
        <SwiperSlide
          :key="img"
          v-for="(img, index) in gallery"
          @click="slideTo(index)"
        >
          <div class="gallery__small-slide">
            <img
              class="gallery__thumbnail"
              width="150"
              height="150"
              :class="{ 'gallery__thumbnail--active': index === currentSlide }"
              :src="getImageUrl({ fileName: img, folder: 'images/products' })"
              :alt="title[Translation.currentLocale]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>

  <div
    class="gallery"
    v-else
  >
    <img
      class="gallery__image"
      width="290"
      height="290"
      :src="
        getImageUrl({
          fileName: gallery.length > 0 ? gallery[0] : 'nopic.jpg',
          folder: 'images/products'
        })
      "
      :alt="title[Translation.currentLocale]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { EffectFade, Thumbs, FreeMode } from "swiper"
import { getImageUrl } from "../../utils/getImageUrl"
import Translation from "../../i18n/translation"

defineProps<{ gallery: string[]; title: Record<string, string> }>()

const thumbnailsSwiper = ref()
const currentSlide = ref<number>(0)

const onSwiperThumbnails = (swiper: any) => {
  thumbnailsSwiper.value = swiper
}

const changeCurrentSlide = () => {
  if (thumbnailsSwiper.value.realIndex) {
    currentSlide.value = thumbnailsSwiper.value.realIndex
  }
}

const slideTo = (index: number) => {
  currentSlide.value = index
}

const modules = [EffectFade, Thumbs, FreeMode]
</script>

<style scoped lang="scss">
.gallery {
  position: relative;
  display: flex;
  flex-direction: column;

  &__small {
    max-width: 30rem;
    margin-left: -0.5rem;
    &-slide {
      margin: 0.5rem;
    }
  }

  &__big {
    max-width: 30rem;
    margin-bottom: 0.8rem;
  }

  &__thumbnail {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem;
    cursor: pointer;
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

  &__image {
    width: 100%;
    max-width: 29rem;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }
}
</style>
