<template>
  <div class="product">
    <div class="product__left">
      <span class="product__subtitle">
        {{ subtitle[Translation.currentLocale] }}
      </span>
      <h3
        class="product__title"
        :title="title[Translation.currentLocale]"
      >
        {{ title[Translation.currentLocale] }}
      </h3>
      <BaseButton
        class="product__btn"
        :to="Translation.i18nRoute({ name: 'product', params: { slug } })"
        :arrow="true"
        :tabindex="active ? 0 : -1"
      >
        {{ $t("blocks.promo.link") }}
      </BaseButton>
    </div>
    <div class="product__right">
      <div class="product__picture">
        <img
          class="product__image"
          width="475"
          height="649"
          :src="getImageUrl({ fileName: img, folder: 'images/promo' })"
          :alt="title[Translation.currentLocale]"
        />
      </div>
      <div class="product__discount">
        <span>{{ discount }}%</span>
        {{ $t("blocks.promo.discount") }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PromoProduct } from "../../interfaces"
import { getImageUrl } from "../../utils/getImageUrl"
import Translation from "../../i18n/translation"

import BaseButton from "../Base/BaseButton.vue"

interface Props extends PromoProduct {
  active: boolean
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.product {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--color-gray-600);
  isolation: isolate;

  @media (min-width: 769px) {
    margin: 8rem 0 12rem;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    margin: 8rem 0 20rem;
  }
  @media (min-width: 576px) {
    justify-content: space-between;
    gap: 3.5rem;
  }
  @media (max-width: 575px) {
    flex-direction: column-reverse;
    gap: 2rem;
    min-height: 45rem;
    margin: 3rem 0 5rem;
  }

  &__right {
    &::before {
      position: absolute;
      content: "";
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='747' height='747' fill='none'%3E%3Ccircle cx='373.5' cy='373.5' r='373.5' fill='%23E1E3E6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
      z-index: -1;
    }
    @media (min-width: 1201px) {
      &::before {
        width: 75rem;
        height: 75rem;
        top: -30rem;
      }
    }
    @media (max-width: 1200px) and (min-width: 769px) {
      &::before {
        width: 50rem;
        height: 50rem;
        top: -20rem;
      }
    }
    @media (min-width: 769px) {
      &::before {
        right: 0;
      }
    }
    @media (max-width: 768px) and (min-width: 576px) {
      &::before {
        width: 25rem;
        height: 25rem;
        top: -5rem;
        right: 5rem;
      }
    }
    @media (min-width: 576px) {
      position: relative;
    }
    @media (max-width: 575px) {
      &::before {
        width: 30rem;
        height: 30rem;
        margin: 0 auto;
        top: -8rem;
        left: 0;
        right: 0;
      }
    }
  }

  &__title {
    margin-bottom: 2.4rem;
    color: var(--color-black);
    @media (min-width: 1201px) {
      font: 700 6.8rem/110% var(--main-font);
    }
    @media (max-width: 1200px) and (min-width: 1021px) {
      font: 700 6rem/110% var(--main-font);
    }
    @media (min-width: 1021px) {
      max-width: 70rem;
    }
    @media (max-width: 1021px) and (min-width: 576px) {
      max-width: 50rem;
      font: 700 3.7rem/110% var(--main-font);
    }
    @media (min-width: 576px) {
      word-wrap: anywhere;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    @media (max-width: 575px) {
      text-align: center;
      font: 700 2.4rem/110% var(--main-font);
    }
  }

  &__subtitle {
    display: block;
    text-transform: uppercase;
    font: 400 1.4rem/100% var(--main-font);
    color: var(--color-black);
    @media (min-width: 1021px) {
      margin-bottom: 0.8rem;
    }
    @media (max-width: 1020px) {
      margin-bottom: 1.5rem;
    }
    @media (max-width: 575px) {
      text-align: center;
    }
  }

  &__picture {
    height: auto;
    @media (min-width: 1201px) {
      width: 47.5rem;
    }
    @media (max-width: 1200px) and (min-width: 769px) {
      width: 100%;
      max-width: 30rem;
    }
    @media (max-width: 768px) and (min-width: 576px) {
      width: 16rem;
    }
    @media (min-width: 576px) {
      margin-right: 10rem;
    }
    @media (max-width: 575px) {
      max-width: 17rem;
    }
  }

  &__btn {
    @media (max-width: 575px) {
      display: flex;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__discount {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-white);
    border-radius: 47% 53% 47% 53% / 57% 53% 47% 43%;
    font: 500 1.4rem/110% var(--main-font);
    color: var(--color-black);
    @media (min-width: 1201px) {
      right: 5rem;
    }
    @media (max-width: 1200px) and (min-width: 576px) {
      right: 0rem;
    }
    @media (min-width: 576px) {
      padding: 3.3rem 3.1rem 3.4rem 3rem;
      top: 0;
      span {
        font: 700 3.6rem/110% var(--main-font);
        color: var(--color-attention);
      }
    }
    @media (max-width: 575px) {
      padding: 2.3rem 2.1rem 2.4rem 2rem;
      top: 2rem;
      right: 5rem;
      span {
        font: 700 2.5rem/110% var(--main-font);
        color: var(--color-attention);
      }
    }
  }
}
</style>
