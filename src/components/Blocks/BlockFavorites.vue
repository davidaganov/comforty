<template>
  <section
    class="favorites"
    id="favorites"
  >
    <BaseInner class="favorites__inner">
      <BaseBreadcrumbs
        class="favorites__breadcrumbs"
        page="favorites"
      />

      <div class="favorites__content">
        <div class="favorites__top">
          <BaseTitle class="favorites__title">
            {{ $t("pages.favorites.title")
            }}<span class="favorites__count">{{
              $t("pages.favorites.count", favorites.length)
            }}</span>
          </BaseTitle>
          <BaseButton
            class="favorites__clear"
            appearance="ghost"
            :disabled="favorites.length === 0"
            @click="openDialog"
          >
            {{ $t("pages.favorites.clear") }}
          </BaseButton>

          <Transition name="dialog">
            <BaseDialog
              :open="open"
              :title="$t('pages.favorites.modal.title')"
              :content="$t('pages.favorites.modal.description')"
              v-show="open"
              @closeDialog="closeDialog"
              @confirmDialog="store.clearFavorites"
              @canselDialog="() => null"
            />
          </Transition>
        </div>

        <ul
          class="favorites__list"
          v-if="favorites.length !== 0"
        >
          <BaseProductItem
            name="favorites"
            :key="product.slug"
            v-bind="product"
            v-for="product in favorites"
          />
        </ul>

        <div
          class="favorites__empty"
          v-if="favorites.length === 0"
        >
          <span class="favorites__empty-title">404</span>
          <p class="favorites__empty-description">{{ $t("pages.favorites.empty") }}</p>
        </div>

        <BaseButton
          class="favorites__link"
          :to="Translation.i18nRoute({ name: 'products' })"
        >
          {{ $t("pages.favorites.products") }}
        </BaseButton>
      </div>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { useStore } from "../../stores"
import Translation from "../../i18n/translation"

import BaseInner from "../Base/BaseInner.vue"
import BaseBreadcrumbs from "../Base/BaseBreadcrumbs.vue"
import BaseTitle from "../Base/BaseTitle.vue"
import BaseButton from "../Base/BaseButton.vue"
import BaseProductItem from "../Base/BaseProductItem.vue"
import BaseDialog from "../Base/BaseDialog.vue"

const open = ref(false)

const store = useStore()
const { getFavorites } = storeToRefs(store)

const favorites = getFavorites

const openDialog = () => {
  open.value = true
  document.body.classList.add("no-scroll")
}

const closeDialog = () => {
  open.value = false
  document.body.classList.remove("no-scroll")
}
</script>

<style scoped lang="scss">
.dialog {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

.favorites {
  margin-top: 4rem;

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 0.1rem solid var(--color-gray-400);
  }

  &__count {
    @media (min-width: 576px) {
      color: var(--color-gray);
      &::before {
        content: ", ";
        color: var(--color-black);
      }
    }
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__clear {
    padding: 1.2rem 2rem;
    &:not(:disabled) {
      &:hover,
      &:focus-visible {
        background-color: var(--color-attention);
        border-color: var(--color-attention);
      }
    }
  }

  &__list {
    display: grid;
    gap: 2rem;
    width: 100%;
  }

  &__empty {
    margin-top: 2.4rem;
    text-align: center;
    &-title {
      display: block;
      margin-bottom: 1rem;
      font: 600 4rem/110% var(--main-font);
      color: var(--color-black);
    }
    &-description {
      font: 600 2rem/110% var(--main-font);
      color: var(--color-black);
    }
  }

  &__link {
    margin: 4rem auto 0;
    @media (max-width: 575px) {
      width: 100%;
    }
  }
}
</style>
