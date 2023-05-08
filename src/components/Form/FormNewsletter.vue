<template>
  <form
    class="newsletter"
    id="newsletter"
  >
    <label
      for="input-newsletter"
      class="visually-hidden"
    >
      {{ $t("newsletter.inputAria") }}
    </label>
    <input
      id="input-newsletter"
      class="newsletter__input"
      type="email"
      name="newsletter"
      :placeholder="$t('newsletter.inputPlaceholder')"
    />
    <BaseButton
      type="submit"
      class="newsletter__btn"
      :aria-label="$t('newsletter.buttonText')"
    >
      <span class="newsletter__btn-text">{{ $t("newsletter.buttonText") }}</span>
      <span class="newsletter__btn-icon">
        <IconBase
          :width="24"
          :height="24"
          box="0 0 24 24"
        >
          <IconArrow />
        </IconBase>
      </span>
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import BaseButton from "../Base/BaseButton.vue"
import IconArrow from "../Icons/IconArrow.vue"
import IconBase from "../Icons/IconBase.vue"
</script>

<style scoped lang="scss">
.newsletter {
  display: flex;
  gap: 1.2rem;
  max-height: 4.6rem;
  &__input {
    width: 100%;
    padding: 1.5rem 2rem;
    border: 0.1rem solid var(--color-gray);
    border-radius: 0.8rem;
    font: 400 1.6rem var(--main-font);
    color: var(--color-black);
    transition: all 0.2s;
    &:hover {
      border-color: var(--color-accent);
    }
    &:focus-visible {
      border-color: var(--color-accent);
    }
    &::placeholder {
      color: var(--color-dark-gray);
    }
  }

  &__btn {
    @media (max-width: 768px) {
      padding: 1rem 1.5rem !important;
    }
    &-text {
      @media (max-width: 768px) {
        display: none;
      }
    }
    &-icon {
      margin-top: 0.3rem;
      @media (min-width: 769px) {
        display: none;
      }
    }
  }
}
</style>
