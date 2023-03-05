<template>
  <div
    class="navbar"
    id="navbar"
  >
    <div class="navbar__top">
      <div class="navbar__inner inner">
        <p class="navbar__info">{{ $t("nav.top.info") }}</p>
        <div class="navbar__right">
          <BaseLanguageSwitcher />
          <a
            href="#"
            class="navbar__info"
          >
            {{ $t("nav.top.faq") }}
          </a>
          <a
            href="#"
            class="navbar__info"
          >
            <IconBase
              :width="16"
              :height="16"
              :stroke="true"
            >
              <IconAttention />
            </IconBase>
            {{ $t("nav.top.help") }}
          </a>
        </div>
      </div>
    </div>
    <div class="navbar__middle">
      <div class="navbar__middle-inner inner">
        <BaseButton
          class="navbar__burger"
          appearance="white"
        >
          <IconBase
            :width="18"
            :height="15"
            box="0 0 18 15"
          >
            <IconMenu />
          </IconBase>
        </BaseButton>
        <BaseLogo :hiddenText="true" />
        <FormSearch class="navbar__search" />
        <div class="navbar__control">
          <BaseCart />
          <BaseButton
            appearance="white"
            :aria-label="$t('nav.middle.favorite')"
          >
            <IconBase
              box="0 0 22 22"
              :width="22"
              :height="22"
              :stroke="true"
            >
              <IconHeart />
            </IconBase>
          </BaseButton>
        </div>
      </div>
    </div>
    <div class="navbar__bottom">
      <div class="navbar__inner inner">
        <div class="navbar__left">
          <BaseListCategories />
          <nav class="navbar__menu">
            <ul class="navbar__list">
              <li
                v-for="{ id, name, anchor, link } in store.getNavbar"
                :key="id"
                class="navbar__item"
              >
                <RouterLink
                  v-if="link"
                  :to="Translation.i18nRoute({ name: link })"
                  class="navbar__link"
                >
                  {{ name[Translation.currentLocale] }}
                </RouterLink>
                <a
                  v-if="anchor"
                  :href="anchor"
                  class="navbar__link"
                >
                  {{ name[Translation.currentLocale] }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p class="navbar__phone">
          {{ $t("nav.bottom.contact") }}:
          <a href="tel:8085550111">(808) 555-0111</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { useStore } from "@/stores"
import Translation from "@/i18n/translation"

import BaseLanguageSwitcher from "./Base/BaseLanguageSwitcher.vue"
import BaseLogo from "./Base/BaseLogo.vue"
import FormSearch from "./Form/FormSearch.vue"
import BaseButton from "./Base/BaseButton.vue"
import BaseListCategories from "./Base/BaseListCategories.vue"
import BaseCart from "./Base/BaseCart.vue"
import IconBase from "./Icons/IconBase.vue"
import IconAttention from "./Icons/IconAttention.vue"
import IconMenu from "./Icons/IconMenu.vue"
import IconHeart from "./Icons/IconHeart.vue"

const store = useStore()
</script>

<style scoped lang="scss">
.navbar {
  $parent: &;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__top {
    padding: 1.4rem 0;
    background-color: var(--color-black);
  }

  &__info {
    font: 400 1.3rem/110% var(--main-font);
    text-transform: capitalize;
    color: var(--color-white);
    opacity: 0.7;
    @media (max-width: 575px) {
      margin: 0 auto;
    }
  }

  &__right {
    @media (min-width: 576px) {
      display: flex;
      align-items: center;
      gap: 2.4rem;
      a {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.1em 0.3rem;
        margin-left: -0.3rem;
        margin-right: -0.3rem;
        transition: all 0.2s;
        &:hover {
          color: var(--color-accent);
          opacity: 1;
        }
        &:focus-visible {
          background-color: var(--color-accent);
          opacity: 1;
        }
      }
    }
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__middle {
    padding: 2rem 0;
    @media (min-width: 576px) {
      background-color: #f0f2f3;
    }
    &-inner {
      @media (min-width: 576px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
      }
      @media (max-width: 575px) {
        display: grid;
        grid-template-columns: auto auto 1fr auto;
        gap: 2rem 1rem;
      }
    }
  }

  &__burger {
    @media (min-width: 576px) {
      display: none;
    }
    @media (max-width: 575px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  &__logo {
    @media (max-width: 575px) {
      grid-area: 1 / 2 / 2 / 3;
    }
  }

  &__search {
    @media (min-width: 576px) {
      max-width: 41.3rem;
    }
    @media (max-width: 575px) {
      grid-area: 2 / 1 / 3 / 5;
    }
  }

  &__control {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    @media (max-width: 575px) {
      grid-area: 1 / 4 / 2 / 5;
    }
  }

  &__bottom {
    @media (min-width: 576px) {
      position: relative;
      padding: 1.4rem 0;
    }
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__left {
    @media (min-width: 769px) {
      gap: 3.2rem;
    }
    @media (max-width: 768px) and (min-width: 576px) {
      gap: 1.5rem;
    }
    @media (min-width: 576px) {
      display: flex;
      align-items: center;
    }
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__list {
    @media (min-width: 769px) {
      gap: 3.2rem;
    }
    @media (max-width: 768px) and (min-width: 576px) {
      gap: 1.5rem;
    }
    @media (min-width: 576px) {
      display: flex;
    }
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__link {
    @media (min-width: 576px) {
      padding: 0 0.3rem;
      margin-top: 0 -0.3rem;
      font: 500 1.4rem/110% var(--main-font);
      text-transform: capitalize;
      color: #636270;
      transition: all 0.2s;
      &:hover {
        color: var(--color-accent);
        text-decoration: underline;
        text-underline-offset: 0.2rem;
      }
      &:focus-visible {
        background-color: var(--color-accent);
        color: var(--color-white);
      }
    }
  }

  &__phone {
    @media (min-width: 1021px) {
      display: block;
      font: 400 1.4rem/110% var(--main-font);
      color: #636270;
      a {
        padding: 0 0.3rem;
        margin-top: 0 -0.3rem;
        font-weight: 500;
        color: var(--color-black);
        transition: all 0.2s;
        &:hover {
          color: var(--color-accent-hover);
          text-decoration: underline;
        }
        &:focus-visible {
          background-color: var(--color-accent);
          color: var(--color-white);
        }
      }
    }
    @media (max-width: 1020px) {
      display: none;
    }
  }
}
</style>
