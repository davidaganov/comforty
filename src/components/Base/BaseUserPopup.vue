<template>
  <div class="popup">
    <div class="popup__top">
      <RouterLink
        class="popup__title"
        :to="Translation.i18nRoute({ name: 'cart' })"
      >
        {{ $t("pages.cart.title") }}
      </RouterLink>
      <button
        type="button"
        class="popup__close"
        :aria-label="$t('nav.middle.cart.ariaClose')"
        :title="$t('nav.middle.cart.ariaClose')"
        @click="togglePopup"
      >
        <IconBase
          box="0 0 24 24"
          :width="24"
          :height="24"
        >
          <IconClose />
        </IconBase>
      </button>
    </div>

    <ul
      class="popup__list"
      v-if="getCart.length !== 0"
    >
      <li
        class="popup__item"
        :key="id"
        v-for="{ id, title, cover, price, slug } in getCart.slice(0, 3)"
      >
        <div class="popup__picture">
          <img
            width="50"
            height="50"
            :src="getImageUrl({ fileName: cover, folder: 'images/products' })"
            :alt="title[Translation.currentLocale]"
          />
          <BaseButton
            appearance="attention"
            class="popup__delete"
            :aria-label="$t('pages.cart.ariaDelete')"
            :title="$t('pages.cart.ariaDelete')"
            @click="toggleProduct(slug, 'cart')"
          >
            <IconBase
              box="0 0 24 24"
              :width="24"
              :height="24"
            >
              <IconTrash />
            </IconBase>
          </BaseButton>
        </div>
        <div class="popup__text">
          <RouterLink
            class="popup__name"
            :to="Translation.i18nRoute({ name: 'product', params: { slug } })"
            :title="title[Translation.currentLocale]"
          >
            {{ title[Translation.currentLocale] }}
          </RouterLink>
          <div class="popup__price">
            <span class="popup__price-regular">${{ getDivisors(price.regular) }}</span>
            <s
              class="popup__price-old"
              v-if="price.discount"
            >
              ${{ getPercent(price.regular, price.discount) }}
            </s>
          </div>
        </div>
      </li>
      <li
        class="popup__item--more"
        v-if="getCart.length > 3"
      >
        ... {{ $t("nav.middle.cart.more", getCart.length - 3) }}
      </li>
    </ul>

    <BaseButton
      class="popup__link"
      :to="Translation.i18nRoute({ name: 'cart' })"
      @click="togglePopup"
      v-if="getCart.length !== 0"
    >
      {{ $t("nav.middle.cart.link") }}
    </BaseButton>

    <div
      class="popup__empty"
      v-if="getCart.length === 0"
    >
      {{ $t("pages.cart.empty") }}
      <BaseButton
        :to="Translation.i18nRoute({ name: 'products' })"
        @click="togglePopup"
      >
        {{ $t("pages.cart.products") }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { RouterLink } from "vue-router"
import { getImageUrl } from "../../utils/getImageUrl"
import { getDivisors } from "../../utils/getDivisors"
import { getPercent } from "../../utils/getPercent"
import { useStore } from "../../stores"
import Translation from "../../i18n/translation"

import BaseButton from "../Base/BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconClose from "../Icons/IconClose.vue"
import IconTrash from "../Icons/IconTrash.vue"

const store = useStore()
const { getCart } = storeToRefs(store)
const { toggleProduct } = store

const emits = defineEmits(["togglePopup"])

const togglePopup = () => {
  emits("togglePopup")
}
</script>

<style scoped lang="scss">
.popup {
  @media (min-width: 1461px) {
    right: 0;
  }
  @media (max-width: 1460px) and (min-width: 576px) {
    right: 2rem;
  }
  @media (min-width: 576px) {
    position: absolute;
    width: 35rem;
    padding: 1.5rem 2rem;
    top: 5.6rem;
    background-color: var(--color-white);
    box-shadow: 0 1rem 3rem 0 rgba(39, 35, 67, 0.05);
    border: 0.1rem solid var(--color-gray-400);
    border-radius: 0.8rem;
    z-index: 3;
  }
  @media (max-width: 575px) {
    display: none;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 0.1rem solid var(--color-gray-400);
  }

  &__title {
    font: 400 1.8rem/100% var(--main-font);
    color: var(--color-black);
    transition: all 0.2s;
    &:hover {
      color: var(--color-accent);
    }
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.1rem;
    border-radius: 0.4rem;
    transition: all 0.2s;
    cursor: pointer;
    &:hover,
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
  }

  &__list {
    display: grid;
    gap: 2rem;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    &--more {
      font: 400 1.5rem/100% var(--main-font);
      color: var(--color-gray);
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__picture {
    position: relative;
    min-width: 5.5rem;
    height: 5.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 0.4rem;
    }
  }

  &__delete {
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    left: 0;
    top: 0;
    border-radius: 0.4rem;
    opacity: 0;
    &:hover,
    &:focus-visible {
      opacity: 1;
    }
  }

  &__name {
    font: 400 1.5rem/100% var(--main-font);
    color: var(--color-black);
    word-wrap: anywhere;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: all 0.2s;
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
    @media (min-width: 576px) {
      &:hover {
        color: var(--color-accent-hover);
      }
    }
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &-regular {
      font: 600 1.4rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-old {
      margin-left: 0.4rem;
      font: 400 1.2rem/110% var(--main-font);
      color: var(--color-gray-200);
      text-decoration: line-through;
    }
  }

  &__empty {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    font: 500 1.6rem/100% var(--main-font);
    color: var(--color-black);
  }

  &__link {
    margin-top: 2rem;
    width: 100%;
  }
}
</style>
