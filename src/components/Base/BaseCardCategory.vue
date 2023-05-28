<template>
  <article
    class="card"
    :id="`category-card-${slug}`"
  >
    <div class="card__bottom">
      <span class="card__text">
        {{ title[Translation.currentLocale] }}
      </span>
      <span class="card__products">
        {{ $t("categories.count", productsCount) }}
      </span>
    </div>
    <RouterLink
      class="card__link"
      :to="Translation.i18nRoute({ name: 'products', query: { category: slug } })"
      :aria-label="title[Translation.currentLocale]"
      :title="title[Translation.currentLocale]"
      @click="store.setSelectedCategory(slug)"
    />
  </article>
</template>

<script setup lang="ts">
import type { Category } from "../../interfaces"
import { RouterLink } from "vue-router"
import { useStore } from "../../stores"
import { getImageUrl } from "../../utils/getImageUrl"
import Translation from "../../i18n/translation"

const props = defineProps<Category>()
const bgImage = `url(${getImageUrl({
  fileName: props.slug !== "all" ? `${props.slug}-cover.jpg` : "all-category-cover.jpg",
  folder: props.slug !== "all" ? `images/products/${props.slug}` : "images/products"
})})`

const store = useStore()
</script>

<style scoped lang="scss">
.card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  background-size: cover;
  background-position: center center;
  border-radius: 1rem;
  background-image: v-bind(bgImage);

  &__bottom {
    position: absolute;
    padding: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 1rem 1rem;
  }

  &__text {
    text-transform: capitalize;
    color: var(--color-white);
    word-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media (min-width: 1201px) {
      font: 600 2rem/110% var(--main-font);
    }
    @media (max-width: 1200px) {
      font: 600 1.6rem/110% var(--main-font);
    }
  }

  &__products {
    display: block;
    margin-top: 0.8rem;
    font: 400 1.4rem/110% var(--main-font);
    color: var(--color-white);
    opacity: 0.7;
  }

  &__link {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    color: var(--color-black);
    border-radius: 1rem;
    &:focus-visible {
      border: 0.3rem solid var(--color-accent);
    }
  }
}
</style>
