<template>
  <div
    class="navbar"
    id="navbar"
  >
    <div class="navbar__top">
      <BaseInner class="navbar__top-inner">
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
      </BaseInner>
    </div>

    <div class="navbar__middle">
      <BaseInner class="navbar__middle-inner">
        <BaseButton
          class="navbar__burger"
          appearance="white"
          @click="toggleMenu(true)"
        >
          <IconBase
            :width="18"
            :height="15"
            box="0 0 18 15"
          >
            <IconMenu />
          </IconBase>
        </BaseButton>

        <Transition name="navbar">
          <BaseNavbarMenu
            v-show="open"
            @toggleMenu="toggleMenu(!open)"
          />
        </Transition>

        <BaseLogo />
        <BaseUserMenu class="navbar__menu" />
      </BaseInner>
    </div>

    <div class="navbar__bottom">
      <BaseInner class="navbar__inner">
        <div class="navbar__left">
          <BaseListCategories />
          <nav class="navbar__container">
            <ul class="navbar__list">
              <li
                class="navbar__item"
                :key="title"
                v-for="{ title, anchor, link } in $tm('nav.bottom.list')"
              >
                <RouterLink
                  class="navbar__link"
                  :to="Translation.i18nRoute({ name: $rt(link), query: {} })"
                  v-if="link"
                >
                  {{ $rt(title) }}
                </RouterLink>
                <a
                  class="navbar__link"
                  :href="$rt(anchor)"
                  v-if="anchor"
                >
                  {{ $rt(title) }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <a
          href="tel:8085550111"
          class="navbar__phone"
        >
          {{ $t("nav.bottom.contact") }}:
          <strong>(808) 555-0111</strong>
        </a>
      </BaseInner>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import Translation from "../i18n/translation"

import BaseInner from "./Base/BaseInner.vue"
import BaseButton from "./Base/BaseButton.vue"
import BaseLanguageSwitcher from "./Base/BaseLanguageSwitcher.vue"
import BaseLogo from "./Base/BaseLogo.vue"
import BaseListCategories from "./Base/BaseListCategories.vue"
import BaseNavbarMenu from "./Base/BaseNavbarMenu.vue"
import BaseUserMenu from "./Base/BaseUserMenu.vue"
import IconBase from "./Icons/IconBase.vue"
import IconAttention from "./Icons/IconAttention.vue"
import IconMenu from "./Icons/IconMenu.vue"

const open = ref<boolean>(false)

const toggleMenu = (value: boolean) => {
  open.value = value
  value ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
}
</script>

<style scoped lang="scss">
.navbar {
  $parent: &;
  box-shadow: 0 0.1rem 0 var(--color-gray-400);

  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }

  &-enter-from {
    transform: translateX(-100%);
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(0);
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__top {
    position: relative;
    padding: 1.4rem 0;
    background-color: var(--color-black);
    z-index: 3;
    &-inner {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media (min-width: 769px) {
        gap: 2.4rem;
      }
      @media (max-width: 768px) {
        gap: 1rem;
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.1em 0.3rem;
    margin-left: -0.3rem;
    margin-right: -0.3rem;
    font: 400 1.3rem/110% var(--main-font);
    color: var(--color-white);
    opacity: 0.7;
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

  &__middle {
    padding: 2rem 0;
    z-index: 2;
    @media (min-width: 576px) {
      background-color: var(--color-gray-600);
    }
    &-inner {
      display: flex;
      position: relative;
      @media (min-width: 576px) {
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
      }
      @media (max-width: 575px) {
        gap: 1rem;
      }
    }
  }

  &__burger {
    @media (min-width: 576px) {
      display: none;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    @media (max-width: 575px) {
      margin-left: auto;
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
      margin: 0 -0.3rem;
      font: 500 1.4rem/110% var(--main-font);
      text-transform: capitalize;
      color: var(--color-gray);
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
      padding: 0 0.3rem;
      margin: 0 -0.3rem;
      font: 400 1.4rem/110% var(--main-font);
      color: var(--color-gray);
      strong {
        font-weight: 500;
        color: var(--color-black);
        transition: all 0.2s;
      }
      &:hover {
        strong {
          color: var(--color-accent-hover);
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
      &:focus-visible {
        strong {
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
