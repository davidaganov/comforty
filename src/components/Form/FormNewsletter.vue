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
    >
      {{ $t("newsletter.buttonText") }}
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import BaseButton from "../Base/BaseButton.vue"
</script>

<style scoped lang="scss">
.newsletter {
  display: flex;
  gap: 1.2rem;
  max-height: 4.6rem;
  &__input {
    padding: 1.5rem 2rem;
    border: 0.1rem solid #e1e3e6;
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
      color: #9a9caa;
    }
  }
}
</style>
