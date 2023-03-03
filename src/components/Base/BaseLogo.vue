<template>
  <a
    href="/"
    class="logo"
    :title="$t('nav.middle.logo')"
    :aria-label="$t('nav.middle.logo')"
  >
    <IconBase
      :width="40"
      :height="40"
      box="0 0 40 40"
      class="logo__icon"
    >
      <IconLogo />
    </IconBase>
    Comforty
  </a>
</template>

<script setup lang="ts">
import IconBase from "@/components/Icons/IconBase.vue"
import IconLogo from "../Icons/IconLogo.vue"
</script>

<style scoped lang="scss">
.logo {
  display: inline-flex;
  align-items: center;
  font: 500 2.6rem/120% var(--main-font);
  color: var(--color-black);
  &:focus-visible {
    box-shadow: 0 0 0 0.2rem var(--color-accent);
  }
  &__icon {
    margin-right: 0.8rem;
    color: var(--color-accent);
  }
}
</style>
