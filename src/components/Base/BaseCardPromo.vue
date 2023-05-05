<template>
  <div class="product">
    <div class="product__left">
      <span class="product__subtitle">
        {{ subtitle[Translation.currentLocale] }}
      </span>
      <h3 class="product__title">
        {{ title[Translation.currentLocale] }}
      </h3>
      <BaseButton
        class="product__btn"
        :to="Translation.i18nRoute({ name: 'product', params: { slug } })"
        :arrow="true"
      >
        {{ $t("blocks.promo.link") }}
      </BaseButton>
    </div>
    <div class="product__right">
      <img
        class="product__picture"
        width="475"
        height="649"
        :src="getImageUrl({ fileName: img, folder: 'images/promo' })"
        :alt="title[Translation.currentLocale]"
      />
      <div class="product__discount">
        <span>{{ discount }}%</span>
        {{ $t("blocks.promo.discount") }}
      </div>
    </div>
  </div>
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
import { getImageUrl } from "../../utils/getImageUrl"
import Translation from "../../i18n/translation"

import BaseButton from "../Base/BaseButton.vue"

defineProps<Props>()
</script>

<style scoped lang="scss">
.product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 8rem 0 11.9rem;
  background-color: var(--color-gray);
  isolation: isolate;
  text-align: left;

  &__right {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 74.7rem;
      height: 74.7rem;
      right: 0;
      top: -8rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='747' height='551' fill='none'%3E%3Ccircle cx='373.5' cy='177.5' r='373.5' fill='%23E1E3E6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      z-index: -1;
    }
  }

  &__title {
    max-width: 65rem;
    margin-bottom: 2.4rem;
    font: 700 6.8rem/110% var(--main-font);
    color: var(--color-black);
    word-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__subtitle {
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    font: 400 1.4rem/100% var(--main-font);
    color: var(--color-black);
  }

  &__picture {
    margin-right: 10rem;
  }

  &__discount {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.3rem 3.1rem 3.4rem 3rem;
    top: 0;
    right: 5rem;
    background-color: var(--color-white);
    border-radius: 47% 53% 47% 53% / 57% 53% 47% 43%;
    font: 500 1.4rem/110% var(--main-font);
    color: var(--color-black);
    span {
      font: 700 3.6rem/110% var(--main-font);
      color: #f05c52;
    }
  }
}
</style>
