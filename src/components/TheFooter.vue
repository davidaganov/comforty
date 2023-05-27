<template>
  <footer
    class="footer"
    id="footer"
  >
    <BaseInner class="footer__inner">
      <div class="footer__left">
        <BaseLogo class="footer__logo" />
        <p
          class="footer__description"
          v-html="$t('blocks.footer.description')"
        />
        <BaseSocial class="footer__social" />
      </div>

      <div class="footer__info">
        <h3 class="footer__title">{{ $t("blocks.footer.categoriesTitle") }}</h3>
        <ul class="footer__list">
          <li
            class="footer__item"
            :key="slug"
            v-for="{ title, slug } in store.getCategories"
          >
            <RouterLink
              class="footer__link"
              :to="Translation.i18nRoute({ name: 'products', query: { category: slug } })"
              :aria-label="title[Translation.currentLocale]"
              :title="title[Translation.currentLocale]"
              @click="store.setSelectedCategory(slug)"
            >
              {{ title[Translation.currentLocale] }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="footer__info">
        <h3 class="footer__title">{{ $t("blocks.footer.supportTitle") }}</h3>
        <ul class="footer__list">
          <li
            class="footer__item"
            :key="link"
            v-for="{ link, title } in $tm('blocks.footer.list.support')"
          >
            <a
              class="footer__link"
              :href="$rt(link)"
            >
              {{ $rt(title) }}
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__right">
        <h3 class="footer__title">{{ $t("blocks.footer.newsletterTitle") }}</h3>
        <FormNewsletter class="footer__newsletter" />
        <p class="footer__subtitle">{{ $t("blocks.footer.newsletterSubtitle") }}</p>
      </div>
    </BaseInner>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import { useStore } from "../stores"
import Translation from "../i18n/translation"

import BaseInner from "./Base/BaseInner.vue"
import BaseLogo from "./Base/BaseLogo.vue"
import BaseSocial from "./Base/BaseSocial.vue"
import FormNewsletter from "./Form/FormNewsletter.vue"

const store = useStore()
</script>

<style scoped lang="scss">
.footer {
  margin-top: 10rem;
  border-top: 0.1rem solid var(--color-gray-400);
  &__inner {
    display: grid;
    width: 100%;
    @media (min-width: 1201px) {
      grid-template-columns: repeat(4, auto);
      gap: 1.5rem;
      justify-content: space-between;
    }
    @media (max-width: 1200px) and (min-width: 576px) {
      grid-template-columns: repeat(2, auto);
      gap: 3rem 1.5rem;
    }
    @media (min-width: 769px) {
      padding-top: 8rem;
      padding-bottom: 6rem;
    }
    @media (max-width: 768px) {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    @media (max-width: 575px) {
      gap: 3rem;
    }
  }

  &__left {
    display: grid;
    gap: 2.4rem;
    @media (min-width: 576px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  &__right {
    @media (min-width: 576px) {
      grid-area: 1 / 2 / 2 / 3;
    }
    @media (max-width: 575px) {
      grid-area: 2 / 1 / 3 / 2;
    }
  }

  &__title {
    margin-bottom: 2rem;
    font: 500 1.4rem/110% var(--main-font);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-gray-200);
  }

  &__description {
    font: 400 1.6rem/150% var(--main-font);
    color: var(--color-black);
    opacity: 0.6;
    @media (min-width: 1201px) {
      max-width: 35rem;
    }
    @media (max-width: 1200px) and (min-width: 576px) {
      max-width: 90%;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    @media (min-width: 1201px) {
      max-width: 17.5rem;
    }
  }

  &__link {
    padding: 0 0.2rem;
    margin: 0 -0.2rem;
    font: 400 1.6rem/140% var(--main-font);
    color: var(--color-black);
    &:focus-visible {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
    @media (min-width: 576px) {
      transition: all 0.2s;
      &:hover {
        text-decoration: underline;
        color: var(--color-accent-hover);
      }
    }
  }

  &__subtitle {
    max-width: 42.4rem;
    margin-top: 1.5rem;
    font: 400 1.5rem/150% var(--main-font);
    color: var(--color-black);
    opacity: 0.6;
  }
}
</style>
