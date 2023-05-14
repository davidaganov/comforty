<template>
  <div class="menu">
    <BaseUserCart @click="toggleCart(!cart)" />
    <BaseUserFavorites @click="toggleFavorites(!favorites)" />

    <Transition name="menu">
      <div
        class="menu__container"
        v-show="cart"
      >
        <div class="menu__top">
          <h3 class="menu__title">{{ $t("nav.middle.cart.text") }} sss</h3>
          <button
            type="button"
            class="menu__close"
            :aria-label="$t('nav.middle.cart.ariaClose')"
            :title="$t('nav.middle.cart.ariaClose')"
            @click="toggleCart(!cart)"
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
          class="menu__list"
          v-if="getCart.length !== 0"
        >
          <li
            class="menu__item"
            :key="id"
            v-for="{ id, title, cover, price, slug } in getCart.slice(0, 3)"
          >
            <div class="menu__picture">
              <img
                width="50"
                height="50"
                :src="getImageUrl({ fileName: cover, folder: 'images/products' })"
                :alt="title[Translation.currentLocale]"
              />
              <BaseButton
                appearance="gray"
                class="menu__delete"
                :aria-label="$t('nav.middle.cart.ariaDelete')"
                :title="$t('nav.middle.cart.ariaDelete')"
                @click="toggleProduct(id, 'cart')"
              >
                <IconBase
                  box="0 0 24 24"
                  :width="24"
                  :height="24"
                >
                  <IconClose />
                </IconBase>
              </BaseButton>
            </div>
            <div class="menu__text">
              <RouterLink
                class="menu__name"
                :to="Translation.i18nRoute({ name: 'product', params: { slug } })"
                :title="title[Translation.currentLocale]"
              >
                {{ title[Translation.currentLocale] }}
              </RouterLink>
              <div class="menu__price">
                <span class="menu__price-regular">${{ price.regular }}</span>
                <s
                  class="menu__price-old"
                  v-if="price.discount"
                >
                  ${{ price.discount }}
                </s>
              </div>
            </div>
          </li>
          <li
            class="menu__item--more"
            v-if="getCart.length > 3"
          >
            ... {{ $t("nav.middle.cart.more", getCart.length - 3) }}
          </li>
        </ul>

        <BaseButton
          class="menu__link"
          :to="Translation.i18nRoute({ name: 'products' })"
          @click="toggleCart(!cart)"
          v-if="getCart.length !== 0"
        >
          {{ $t("nav.middle.cart.link") }}
        </BaseButton>

        <div
          class="menu__empty"
          v-if="getCart.length === 0"
        >
          <BaseButton
            :to="Translation.i18nRoute({ name: 'products' })"
            @click="toggleCart(!cart)"
          >
            {{ $t("nav.middle.cart.add") }}
          </BaseButton>
        </div>
      </div>
    </Transition>

    <Transition name="menu">
      <div
        class="menu__container"
        v-show="favorites"
      >
        Favorites
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { storeToRefs } from "pinia"
import { useStore } from "../../stores"
import { getImageUrl } from "../../utils/getImageUrl"
import Translation from "../../i18n/translation"

import BaseUserCart from "../Base/BaseUserCart.vue"
import BaseUserFavorites from "../Base/BaseUserFavotires.vue"
import BaseButton from "../Base/BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconClose from "../Icons/IconClose.vue"

const cart = ref(false)
const favorites = ref(false)

const store = useStore()
const { getCart } = storeToRefs(store)
const { toggleProduct } = store

const toggleCart = (value: boolean) => {
  cart.value = value
  favorites.value = false
}

const toggleFavorites = (value: boolean) => {
  favorites.value = value
  cart.value = false
}
</script>

<style scoped lang="scss">
.menu {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &__container {
    position: absolute;
    width: min(100%, 35rem);
    padding: 1.5rem 2rem;
    top: 5.6rem;
    background-color: var(--color-white);
    border-radius: 0.8rem;
    box-shadow: 0 1rem 3rem 0 rgba(39, 35, 67, 0.05);
    border: 0.1rem solid var(--color-gray-400);
    z-index: 3;
    @media (min-width: 1461px) {
      right: 0;
    }
    @media (max-width: 1460px) {
      right: 2rem;
    }
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
    background-color: var(--color-attention) !important;
    color: var(--color-white);
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
    gap: 1.5rem;
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
