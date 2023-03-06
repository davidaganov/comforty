<template>
  <BaseButton
    class="cart"
    appearance="white"
    :aria-label="$t('nav.middle.cart.aria')"
  >
    <IconBase
      box="0 0 22 22"
      :width="22"
      :height="22"
      :stroke="true"
    >
      <IconCart />
    </IconBase>
    <span class="cart__text">{{ $t("nav.middle.cart.text") }}</span>
    <span class="cart__counter">0</span>
  </BaseButton>
</template>

<script setup lang="ts">
import IconBase from "../Icons/IconBase.vue"
import IconCart from "../Icons/IconCart.vue"
</script>

<style scoped lang="scss">
.cart {
  $parent: &;
  position: relative;
  gap: 0;
  &:hover,
  &:focus-visible {
    #{$parent}__counter {
      background-color: white;
      color: var(--color-accent);
    }
  }
  &__text {
    @media (min-width: 769px) {
      margin: 0 1.2rem 0 0.8rem;
      font: 500 1.2rem/110% var(--main-font);
      color: currentColor;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  &__counter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background-color: var(--color-accent);
    border-radius: 2rem;
    font: 500 1rem/100% var(--main-font);
    color: var(--color-white);
    transition: all 0.2s;
    @media (max-width: 768px) {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
    }
  }
}
</style>
