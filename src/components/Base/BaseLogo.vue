<template>
  <RouterLink
    class="logo"
    :to="Translation.i18nRoute({ name: 'home' })"
    :title="$t('nav.middle.logo')"
    :aria-label="$t('nav.middle.logo')"
  >
    <IconBase
      box="0 0 40 40"
      class="logo__icon"
      :width="40"
      :height="40"
    >
      <IconLogo />
    </IconBase>
    <span class="logo__text">Comforty</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import Translation from "../../i18n/translation"

import IconBase from "../../components/Icons/IconBase.vue"
import IconLogo from "../Icons/IconLogo.vue"
</script>

<style scoped lang="scss">
.logo {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem;
  margin: -0.3rem;
  border-radius: 0.5rem;
  color: var(--color-black);
  &:focus-visible {
    box-shadow: 0 0 0 0.2rem var(--color-accent);
  }
  &__icon {
    color: var(--color-accent);
    @media (min-width: 376px) {
      margin-right: 0.8rem;
    }
  }
  &__text {
    @media (min-width: 576px) {
      font: 500 2.6rem/120% var(--main-font);
    }
    @media (max-width: 575px) and (min-width: 376px) {
      font: 500 2rem/120% var(--main-font);
    }
    @media (min-width: 376px) {
      color: var(--color-black);
    }
    @media (max-width: 375px) {
      display: none;
    }
  }
}
</style>
