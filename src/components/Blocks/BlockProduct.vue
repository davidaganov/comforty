<template>
  <section
    class="product"
    :id="`page-${slug}`"
  >
    <BaseInner class="product__inner">
      <BaseBreadcrumbs
        class="products__breadcrumbs"
        :path="[
          { name: $t(`nav.breadcrumbs.products`), params: { name: 'products' } },
          {
            name: currentCategory?.[Translation.currentLocale],
            params: { name: 'products', query: { category } }
          }
        ]"
        :title="title[Translation.currentLocale]"
      />

      <div class="product__content">
        <BaseGallery
          class="product__gallery"
          :title="title"
          :category="category"
          :gallery="gallery"
        />

        <div class="product__info">
          <h2 class="product__title">{{ title[Translation.currentLocale] }}</h2>

          <div class="product__category">
            <p class="product__category-title product__block-title">
              {{ $t("pages.product.category") }}:
            </p>
            <div class="product__block-container">
              <RouterLink
                class="product__category-text product__block-text"
                :to="Translation.i18nRoute({ name: 'products', query: { category } })"
                @click="store.setSelectedCategory(category)"
              >
                {{ currentCategory?.[Translation.currentLocale] }}
              </RouterLink>
            </div>
          </div>

          <div class="product__price">
            <span class="product__price-title product__block-title">
              {{ $t("pages.product.price") }}:
            </span>
            <div class="product__block-container">
              <span class="product__price-regular">${{ price.regular }}</span>
              <span
                class="product__price-discount"
                v-if="price.discount"
              >
                ${{ price.discount }}
              </span>
            </div>
          </div>
        </div>

        <div class="product__buttons">
          <BaseButtonCart
            class="product__cart"
            appearance="ghost"
            :slug="slug"
          >
            {{ $t("pages.product.cart") }}
          </BaseButtonCart>
          <BaseButtonFavorite
            class="product__favorite"
            appearance="ghost"
            :slug="slug"
          />
        </div>

        <div class="product__description">
          <p class="product__description-title product__block-title">
            {{ $t("pages.product.description") }}:
          </p>
          <div
            class="product__block-container"
            v-if="description"
          >
            <p class="product__description-text product__block-text">
              {{ description[Translation.currentLocale] }}
            </p>
          </div>
        </div>
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "../../interfaces"
import { onMounted, ref, watch } from "vue"
import { RouterLink } from "vue-router"
import Translation from "../../i18n/translation"
import { useStore } from "../../stores"

import BaseInner from "../Base/BaseInner.vue"
import BaseBreadcrumbs from "../Base/BaseBreadcrumbs.vue"
import BaseGallery from "../Base/BaseGallery.vue"
import BaseButtonCart from "../Base/BaseButtonCart.vue"
import BaseButtonFavorite from "../Base/BaseButtonFavorite.vue"

const props = defineProps<Product>()

const store = useStore()
const currentCategory = ref()

watch(
  () => store.getCategories,
  () => (currentCategory.value = store.getTitleCategory(props.category))
)

onMounted(() => {
  if (store.getCategories.length > 0) {
    currentCategory.value = store.getTitleCategory(props.category)
  }
})
</script>

<style scoped lang="scss">
.product {
  margin-top: 4rem;

  &__content {
    display: grid;
    @media (min-width: 769px) {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr;
      gap: 0 2rem;
    }
    @media (max-width: 768px) {
      grid-template-columns: 100%;
      gap: 3rem;
    }
  }

  &__gallery {
    @media (min-width: 769px) {
      grid-area: 1 / 1 / 3 / 2;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    @media (min-width: 769px) {
      grid-area: 1 / 2 / 2 / 3;
    }
    @media (max-width: 768px) {
      grid-area: 2 / 1 / 3 / 2;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 2rem;
    @media (min-width: 769px) {
      grid-area: 2 / 2 / 3 / 3;
      align-self: flex-start;
      margin-top: 4rem;
    }
    @media (max-width: 768px) {
      grid-area: 4 / 1 / 5 / 2;
    }
  }

  &__description {
    margin-top: 2rem;
    @media (min-width: 769px) {
      grid-area: 3 / 1 / 4 / 3;
    }
    @media (max-width: 768px) {
      grid-area: 3 / 1 / 4 / 2;
    }

    &-text {
      max-width: 90%;
    }
  }

  &__title {
    padding-bottom: 1.5rem;
    color: var(--color-black);
    border-bottom: 0.1rem solid var(--color-gray-400);
    @media (min-width: 769px) {
      font: 600 2.8rem/110% var(--main-font);
    }
    @media (max-width: 768px) {
      font: 600 2rem/110% var(--main-font);
    }
  }

  &__block {
    &-title {
      font: 500 1.8rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-container {
      margin-top: 1rem;
    }
    &-text {
      font: 400 1.6rem/150% var(--main-font);
      color: var(--color-gray-200);
    }
  }

  &__category {
    &-text {
      transition: all 0.2s;
      &:focus-visible {
        background-color: var(--color-accent);
        color: var(--color-white);
      }
      @media (min-width: 769px) {
        &:hover {
          color: var(--color-accent);
        }
      }
    }
  }

  &__price {
    &-regular {
      font: 600 1.6rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-discount {
      margin-left: 0.8rem;
      font: 400 1.6rem/110% var(--main-font);
      color: var(--color-gray-200);
      text-decoration-line: line-through;
    }
  }
}
</style>
