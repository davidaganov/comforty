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
      <div class="navbar__inner inner">
        <BaseLogo />
        <FormSearch />
      </div>
    </div>
    <div class="navbar__bottom">
      <div class="navbar__inner inner">
        <div class="navbar__left">
          <BaseButton appearance="ghost">
            <IconBase
              :width="18"
              :height="15"
              box="0 0 18 15"
            >
              <IconMenu />
            </IconBase>
            {{ $t("nav.bottom.categories") }}
          </BaseButton>
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
import IconBase from "./Icons/IconBase.vue"
import IconAttention from "./Icons/IconAttention.vue"
import BaseLogo from "./Base/BaseLogo.vue"
import FormSearch from "./Form/FormSearch.vue"
import BaseButton from "./Base/BaseButton.vue"
import IconMenu from "./Icons/IconMenu.vue"

const store = useStore()
</script>

<style scoped lang="scss">
.navbar {
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__top {
    padding: 1.4rem 0;
    background-color: var(--color-black);
  }

  &__right {
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

  &__info {
    font: 400 1.3rem/110% var(--main-font);
    text-transform: capitalize;
    color: var(--color-white);
    opacity: 0.7;
  }

  &__middle {
    padding: 2rem 0;
    background-color: #f0f2f3;
  }

  &__bottom {
    padding: 1.4rem 0;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  &__list {
    display: flex;
    gap: 3.2rem;
  }

  &__link {
    font: 500 1.4rem/110% var(--main-font);
    text-transform: capitalize;
    color: #636270;
    transition: all 0.2s;
    &:hover {
      color: var(--color-accent-hover);
    }
    &:focus-visible {
      background-color: var(--color-accent-hover);
      color: var(--color-white);
    }
  }

  &__phone {
    display: block;
    font: 400 1.4rem/110% var(--main-font);
    color: #636270;
    a {
      font-weight: 500;
      color: var(--color-black);
      transition: all 0.2s;
      &:hover {
        color: var(--color-accent-hover);
        text-decoration: underline;
      }
      &:focus-visible {
        background-color: var(--color-accent-hover);
        color: var(--color-white);
      }
    }
  }
}
</style>
