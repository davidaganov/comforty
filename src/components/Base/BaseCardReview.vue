<template>
  <article
    class="review"
    :id="`review-${id}`"
  >
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
      <p class="review__name">{{ name[Translation.currentLocale] }}</p>
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
  </article>
</template>

<script setup lang="ts">
import type { Review } from "@/interfaces"
import Translation from "@/i18n/translation"
import { getImageUrl } from "@/utils/getImageUrl"

import IconBase from "../Icons/IconBase.vue"
import IconQuotes from "../Icons/IconQuotes.vue"

defineProps<Review>()
</script>

<style scoped lang="scss">
.review {
  position: relative;
  padding: 4rem;
  text-align: left;
  border-radius: 1.2rem;
  background-color: var(--color-white);
  &__text {
    position: relative;
    padding-left: 2.4rem;
    text-transform: capitalize;
    font: 400 2rem/150% var(--main-font);
    color: #636270;
    border-left: 0.1rem solid var(--color-accent);
  }

  &__bottom {
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: flex-start;
    gap: 0.2rem 1.2rem;
    margin-top: 2.5rem;
  }

  &__avatar {
    grid-area: 1 / 1 / 3 / 2;
    width: 6rem;
    height: 6rem;
    border-radius: 10rem;
  }

  &__name {
    grid-area: 1 / 2 / 2 / 3;
    text-transform: capitalize;
    font: 500 2rem/140% var(--main-font);
    color: var(--color-black);
  }

  &__job {
    grid-area: 2 / 2 / 3 / 3;
    text-transform: capitalize;
    font: 400 1.6rem/140% var(--main-font);
    color: #9a9caa;
  }

  &__quotes {
    position: absolute;
    right: 0;
    bottom: 0;
    color: var(--color-gray);
  }
}
</style>
