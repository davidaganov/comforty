<template>
  <div
    class="select"
    @blur="open = false"
  >
    <button
      type="button"
      class="select__selected"
      :class="{ open: open }"
      :aria-label="$t('locale.ariaOpenList')"
      :aria-expanded="open"
      @click="open = !open"
    >
      {{ Translation.currentLocale }}
      <IconBase
        :stroke="true"
        :width="8"
        :height="4"
        box="0 0 9 5"
      >
        <IconChevron />
      </IconBase>
    </button>
    <div
      class="select__items"
      role="listbox"
      :class="{ selectHide: !open }"
    >
      <button
        type="button"
        :id="`lang-${sLocale}`"
        role="option"
        :key="sLocale"
        :aria-selected="sLocale === Translation.currentLocale"
        :aria-label="`${$t('locale.ariaChoose')} ${$t(`locale.${sLocale}`)}`"
        @click="switchLanguage(sLocale), (open = false)"
        v-for="sLocale in supportedLocales"
      >
        {{ sLocale }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router"
import Translation from "@/i18n/translation"

export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<script setup lang="ts">
import IconBase from "../Icons/IconBase.vue"
import IconChevron from "../Icons/IconChevron.vue"

const supportedLocales = Translation.supportedLocales
const router = useRouter()

const switchLanguage = async (newLocale: string) => {
  await Translation.switchLanguage(newLocale)

  try {
    await router.replace({
      params: { locale: newLocale }
    })
  } catch (e) {
    console.error(e)
    router.push("/")
  }
}
</script>

<style scoped lang="scss">
.select {
  position: relative;
  outline: none;
  &__selected {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 0.3rem;
    font: 400 1.3rem/130% var(--main-font);
    color: var(--color-white);
    text-transform: capitalize;
    opacity: 0.7;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      color: var(--color-accent);
      opacity: 1;
    }
    &:focus-visible {
      background-color: var(--color-accent);
      opacity: 1;
    }
  }
  &__items {
    position: absolute;
    font: 400 1.3rem/130% var(--main-font);
    background-color: var(--color-black);
    border: 0.1rem solid var(--color-accent);
    color: var(--color-white);
    top: 2rem;
    left: 0;
    right: 0;
    z-index: 1;
    button {
      display: block;
      padding: 0.3rem 0;
      width: 100%;
      font: 400 1.3rem/130% var(--main-font);
      color: var(--color-white);
      text-transform: capitalize;
      cursor: pointer;
      &:hover,
      &:focus-visible {
        background-color: var(--color-accent-hover);
      }
    }
  }
}

.selectHide {
  display: none;
}
</style>
