<template>
  <section
    class="product"
    :id="`product-${slug}`"
  >
    <BaseInner>
      <div class="product__gallery">
        <div class="product__gallery-small">
          <Carousel :settings="smallCarouselSettings">
            <Slide
              :key="img"
              v-for="img in gallery"
            >
              <img
                class="product__thumbnail"
                width="150"
                height="150"
                :src="getImageUrl({ fileName: img, folder: 'images/products' })"
                :alt="title[Translation.currentLocale]"
              />
            </Slide>
          </Carousel>
        </div>
        <div class="product__gallery-big">
          <Carousel :settings="bigCarouselSettings">
            <Slide
              :key="img"
              v-for="img in gallery"
            >
              <img
                class="product__picture"
                width="300"
                height="300"
                :src="getImageUrl({ fileName: img, folder: 'images/products' })"
                :alt="title[Translation.currentLocale]"
              />
            </Slide>
          </Carousel>
        </div>
      </div>
      <div class="product__info">
        <h2 class="product__title">{{ title[Translation.currentLocale] }}</h2>
        <p class="product__description">{{ description[Translation.currentLocale] }}</p>
        <div class="product__price">
          <span class="product__price-regular">${{ price.regular }}</span>
          <span
            class="product__price-discount"
            v-if="price.discount"
          >
            ${{ price.discount }}
          </span>
        </div>
        <BaseAddedCart
          class="product__cart"
          v-bind="product"
        />
        <BaseAddedFavorite
          class="product__favorite"
          v-bind="product"
        />
      </div>
    </BaseInner>
  </section>
</template>

<script lang="ts">
export interface Props {
  id: number
  title: { [key: string]: string }
  cover: string
  gallery: string[]
  description: { [key: string]: string }
  slug: string
  category: string
  attr: {
    newest: boolean
    trending: boolean
    bestsellers: boolean
    featured: boolean
  }
  price: {
    regular: number
    discount?: number | null
  }
}
</script>

<script setup lang="ts">
// import { ref } from "vue"
import { Carousel, Slide } from "vue3-carousel"
import { getImageUrl } from "../../utils/getImageUrl"
import Translation from "../../i18n/translation"

import BaseInner from "../Base/BaseInner.vue"
import BaseAddedCart from "../Base/BaseAddedCart.vue"
import BaseAddedFavorite from "../Base/BaseAddedFavorite.vue"

const product = defineProps<Props>()

// const refCarouselBig = ref()

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
.product {
  &__gallery {
    position: relative;
    display: flex;
    max-height: 30rem;
    &-small {
      max-width: 30rem;
      /* height: 100%; */
      /* max-width: 45rem; */
      /* transform: rotate(90deg); */
    }
    &-big {
      width: 30rem;
    }
  }

  &__thumbnail {
    width: 9rem;
    height: 9rem;
    margin: 0 0.5rem;
    object-fit: cover;
    object-position: center;
  }
  &__picture {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    object-position: center;
  }
}
</style>
