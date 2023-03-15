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
        ></p>
        <BaseSocial class="footer__social" />
      </div>
      <div class="footer__middle"></div>
      <div class="footer__right">
        <FormNewsletter class="footer__newsletter" />
      </div>
    </BaseInner>
  </footer>
</template>

<script setup lang="ts">
import BaseInner from "./Base/BaseInner.vue"
import BaseLogo from "./Base/BaseLogo.vue"
import BaseSocial from "./Base/BaseSocial.vue"
import FormNewsletter from "./Form/FormNewsletter.vue"
</script>

<style scoped lang="scss">
.footer {
  margin-top: 10rem;
  border-top: 0.1rem solid #e1e3e6;
  &__inner {
    display: flex;
    justify-content: space-between;
    padding: 8rem 0 6rem;
  }

  &__left {
    display: grid;
    gap: 2.4rem;
  }

  &__middle {
  }

  &__right {
  }

  &__description {
    max-width: 35rem;
    font: 400 1.6rem/150% var(--main-font);
    color: #272343;
    opacity: 0.6;
  }
}
</style>
