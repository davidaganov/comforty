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
            <VueMagnifier
              className="gallery__picture"
              height="35rem"
              :zoomFactor="0.7"
              :mgShape="'square'"
              :mgWidth="250"
              :mgHeight="250"
              :src="getImageUrl({ fileName: `${img}.jpg`, folder: `images/products/${category}` })"
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
        :slides-per-view="gallery.length > 3 ? 3.5 : 3"
        :freeMode="true"
        :watch-slides-progress="true"
        :spaceBetween="8"
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
              :src="getImageUrl({ fileName: `${img}.jpg`, folder: `images/products/${category}` })"
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
      height="350"
      :src="
        getImageUrl({
          fileName: gallery.length > 0 ? `${gallery[0]}.jpg` : 'nopic.jpg',
          folder: `images/products/${category}`
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
import VueMagnifier from "@websitebeaver/vue-magnifier"
import { getImageUrl } from "../../utils/getImageUrl"
import Translation from "../../i18n/translation"
import "@websitebeaver/vue-magnifier/styles.css"

defineProps<{ gallery: string[]; title: Record<string, string>; category: string }>()

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

  &__inner {
    display: flex;
  }

  &__big {
    margin-bottom: 0.8rem;
    @media (min-width: 1021px) {
      max-width: 45rem;
    }
    @media (max-width: 1020px) and (min-width: 769px) {
      max-width: 35rem;
    }
    @media (max-width: 1020px) {
      width: 100%;
    }
    &-slide {
      @media (min-width: 1021px) {
        width: 45rem;
      }
      @media (max-width: 1020px) and (min-width: 769px) {
        width: 35rem;
      }
      @media (max-width: 1020px) {
        width: 100%;
      }
    }
  }

  &__small {
    @media (min-width: 1021px) {
      max-width: 45rem;
    }
    @media (max-width: 1020px) and (min-width: 769px) {
      max-width: 35rem;
    }
    @media (max-width: 768px) {
      max-width: 100%;
    }
    &-slide {
      margin: 0.1rem;
    }
  }

  &__thumbnail {
    width: 100%;
    height: 9rem;
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem;
    border: 0.1rem solid var(--color-gray-400);
    cursor: pointer;
    &--active {
      border-color: var(--color-accent);
    }
  }

  &__picture {
    :deep(img) {
      border: 0.1rem solid var(--color-gray-400);
      object-fit: cover;
      object-position: center;
      border-radius: 1rem;
    }
    :deep(div) {
      box-shadow: none;
      border-color: var(--color-accent);
      border-radius: 0.8rem;
    }
    @media (max-width: 768px) and (min-width: 576px) {
      height: 45rem !important;
    }
    @media (max-width: 575px) {
      height: 30rem !important;
    }
  }

  &__image {
    width: 45rem;
    max-height: 35rem;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }
}
</style>
