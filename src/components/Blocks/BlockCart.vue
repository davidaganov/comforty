<template>
  <section
    class="cart"
    id="cart"
  >
    <BaseInner class="cart__inner">
      <BaseBreadcrumbs
        class="cart__breadcrumbs"
        page="cart"
      />

      <div class="cart__top">
        <BaseTitle class="cart__title">
          {{ $t("pages.cart.title")
          }}<span class="cart__count">{{ $t("pages.cart.count", cart.length) }}</span>
        </BaseTitle>
        <BaseButton
          class="cart__clear"
          appearance="ghost"
          :disabled="cart.length === 0"
          @click="openDialog"
        >
          {{ $t("pages.cart.clear") }}
        </BaseButton>

        <Transition name="dialog">
          <BaseDialog
            :open="open"
            :title="$t('pages.cart.modal.title')"
            :content="$t('pages.cart.modal.description')"
            v-show="open"
            @closeDialog="closeDialog"
            @confirmDialog="store.clearCart"
            @canselDialog="() => null"
          />
        </Transition>
      </div>

      <ul
        class="cart__list"
        v-if="cart.length !== 0"
      >
        <BaseProductItem
          name="cart"
          :key="product.id"
          v-bind="product"
          v-for="product in cart"
        />
      </ul>

      <div
        class="cart__empty"
        v-if="cart.length === 0"
      >
        <span class="cart__empty-title">404</span>
        <p class="cart__empty-description">{{ $t("pages.cart.empty") }}</p>
      </div>

      <BaseButton
        class="cart__link"
        :to="Translation.i18nRoute({ name: 'products' })"
      >
        {{ $t("pages.cart.products") }}
      </BaseButton>
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
const { getCart } = storeToRefs(store)

const cart = getCart

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

.cart {
  margin-top: 4rem;

  &__inner {
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
