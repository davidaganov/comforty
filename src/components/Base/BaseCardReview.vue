<template>
  <article
    class="review"
    :id="`review-${id}`"
  >
    <div class="review__wrapper">
      <p class="review__text">{{ text[Translation.currentLocale] }}</p>
      <div class="review__bottom">
        <img
          class="review__avatar"
          width="60"
          height="60"
          aria-hidden="true"
          alt=""
          :src="getImageUrl({ fileName: avatar, folder: 'images/users' })"
        />
        <p class="review__name">{{ userName[Translation.currentLocale] }}</p>
        <p class="review__job">{{ job[Translation.currentLocale] }}</p>
      </div>
      <IconBase
        class="review__quotes"
        box="0 0 163 163"
        :width="163"
        :height="163"
      >
        <IconQuotes />
      </IconBase>
    </div>
  </article>
</template>

<script lang="ts">
interface Props {
  id: number
  text: { [key: string]: string }
  avatar: string
  userName: { [key: string]: string }
  job: { [key: string]: string }
}
</script>

<script setup lang="ts">
import Translation from "../../i18n/translation"
import { getImageUrl } from "../../utils/getImageUrl"

import IconBase from "../Icons/IconBase.vue"
import IconQuotes from "../Icons/IconQuotes.vue"

defineProps<Props>()
</script>

<style scoped lang="scss">
.review {
  height: 100%;
  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    text-align: left;
    border-radius: 1.2rem;
    background-color: var(--color-white);
    @media (min-width: 1021px) {
      height: 100%;
      max-height: 34.5rem;
    }
  }
  &__text {
    position: relative;
    margin-bottom: auto;
    padding-left: 2.4rem;
    color: #636270;
    border-left: 0.1rem solid var(--color-accent);
    @media (min-width: 1021px) {
      word-wrap: anywhere;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    @media (min-width: 769px) {
      font: 400 2rem/150% var(--main-font);
    }
    @media (max-width: 768px) {
      font: 400 1.6rem/150% var(--main-font);
    }
  }

  &__bottom {
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: flex-start;
    gap: 0.2rem 1.2rem;
    margin-top: 2.5rem;
    z-index: 1;
  }

  &__avatar {
    grid-area: 1 / 1 / 3 / 2;
    border-radius: 10rem;
    @media (min-width: 769px) {
      width: 6rem;
      height: 6rem;
    }
    @media (max-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
  }

  &__name {
    grid-area: 1 / 2 / 2 / 3;
    text-transform: capitalize;
    color: var(--color-black);
    @media (min-width: 769px) {
      font: 500 2rem/140% var(--main-font);
    }
    @media (max-width: 768px) {
      font: 500 1.6rem/140% var(--main-font);
    }
  }

  &__job {
    grid-area: 2 / 2 / 3 / 3;
    text-transform: capitalize;

    color: #9a9caa;
    @media (min-width: 769px) {
      font: 400 1.6rem/140% var(--main-font);
    }
    @media (max-width: 768px) {
      font: 400 1.3rem/140% var(--main-font);
    }
  }

  &__quotes {
    position: absolute;
    right: -1rem;
    bottom: -1rem;
    color: var(--color-gray);
  }
}
</style>
