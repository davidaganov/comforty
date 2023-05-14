<template>
  <div
    class="dialog"
    role="dialog"
    :aria-modal="open"
    aria-labelledby="titleId"
    aria-describedby="descriptionId"
  >
    <div class="dialog__content">
      <div class="dialog__top">
        <h3
          id="titleId"
          class="dialog__title"
        >
          {{ props.title }}
        </h3>
        <BaseButtonClose
          :aria-label="$t('pages.cart.modal.ariaClose')"
          :title="$t('pages.cart.modal.ariaClose')"
          @click="closeModal"
        />
      </div>

      <div
        id="descriptionId"
        class="dialog__description"
      >
        {{ props.content }}
      </div>

      <div class="dialog__bottom">
        <BaseButton @click="confirmDialog">
          {{ $t("pages.cart.modal.confirm") }}
        </BaseButton>
        <BaseButton
          class="dialog__cansel"
          appearance="attention"
          @click="closeModal"
        >
          {{ $t("pages.cart.modal.cancel") }}
        </BaseButton>
      </div>
    </div>

    <button
      type="button"
      class="dialog__overlay"
      @click="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue"
import BaseButtonClose from "./BaseButtonClose.vue"

const props = defineProps<{ open: boolean; title: string; content: string }>()

const emits = defineEmits(["closeDialog", "confirmDialog"])

const closeModal = () => {
  emits("closeDialog")
}

const confirmDialog = () => {
  closeModal()

  emits("confirmDialog")
}
</script>

<style scoped lang="scss">
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;

  &__content {
    position: fixed;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 2rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-white);
    border-radius: 0.8rem;
    @media (min-width: 576px) {
      width: 40rem;
      height: 23rem;
    }
    @media (max-width: 575px) {
      width: calc(100% - 2rem);
      height: 23rem;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  &__title {
    color: var(--color-black);
    @media (min-width: 376px) {
      font: 600 2.4rem/110% var(--main-font);
    }
    @media (max-width: 375px) {
      font: 600 2rem/110% var(--main-font);
    }
  }

  &__description {
    color: var(--color-gray);
    font: 400 1.8rem/110% var(--main-font);
  }

  &__bottom {
    display: flex;
    gap: 2rem;
    margin-top: auto;
    button {
      min-width: calc(50% - 1rem);
      font-weight: 500;
    }
  }

  &__cansel {
    padding: 1.7rem 2.4rem;
  }

  &__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(39, 35, 67, 0.4);
    z-index: -1;
  }
}
</style>
