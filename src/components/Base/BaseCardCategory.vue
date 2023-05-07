<template>
  <article
    class="card"
    :style="{
      backgroundImage: `url(${getImageUrl({ fileName: cover, folder: 'images/categories' })})`
    }"
  >
    <div class="card__bottom">
      <span class="card__text">
        {{ title[Translation.currentLocale] }}
      </span>
      <span class="card__products">
        {{ productsCount ? productsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "" }}
        {{ $t("categories.title") }}
      </span>
    </div>
    <a
      class="card__link"
      :href="slug"
      :aria-label="title[Translation.currentLocale]"
    />
  </article>
</template>

<script lang="ts">
interface Props {
  id: number
  title: { [key: string]: string }
  productsCount: number
  cover: string
  slug: string
}
</script>

<script setup lang="ts">
import Translation from "../../i18n/translation"
import { getImageUrl } from "../../utils/getImageUrl"

defineProps<Props>()
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
    border-radius: 1rem;
    &:focus-visible {
      box-shadow: 0 0 0 0.5rem var(--color-accent);
    }
  }
}
</style>
