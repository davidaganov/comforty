<template>
  <form
    class="search"
    id="search"
  >
    <label
      for="input-search"
      class="visually-hidden"
    >
      {{ $t("nav.middle.search.inputAria") }}
    </label>
    <input
      id="input-search"
      class="search__input"
      type="search"
      name="search"
      :placeholder="$t('nav.middle.search.inputPlaceholder')"
    />
    <button
      type="submit"
      class="search__btn"
      :aria-label="$t('nav.middle.search.buttonAria')"
    >
      <IconBase
        box="0 0 22 22"
        :height="22"
        :width="22"
        :stroke="true"
      >
        <IconSearch />
      </IconBase>
    </button>
  </form>
</template>

<script setup lang="ts">
import IconBase from "../Icons/IconBase.vue"
import IconSearch from "../Icons/IconSearch.vue"
</script>

<style scoped lang="scss">
.search {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 4.7rem;
  background-color: var(--color-white);
  border-radius: 0.5rem;
  @media (max-width: 575px) {
    background-color: #f0f2f3;
  }

  &__input {
    display: block;
    width: 100%;
    height: 100%;
    padding-left: 1.6rem;
    font: 400 1.6rem/120% var(--main-font);
    border-radius: 0.5rem 0 0 0.5rem;
    color: var(--color-black);
    &:hover {
      &::placeholder {
        color: var(--color-black);
      }
    }
    &:focus-visible {
      box-shadow: 0 0 0 0.2rem var(--color-accent);
    }
    &::placeholder {
      color: #9a9caa;
      transition: all 0.2s;
    }
    &[type="search"]::-webkit-search-decoration,
    &[type="search"]::-webkit-search-cancel-button,
    &[type="search"]::-webkit-search-results-button,
    &[type="search"]::-webkit-search-results-decoratio {
      display: none;
    }
  }

  &__btn {
    height: 100%;
    padding: 0 1.6rem;
    color: var(--color-black);
    border-radius: 0 0.5rem 0.5rem 0;
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
      color: var(--color-accent);
    }
    &:focus-visible {
      box-shadow: 0 0 0 0.2rem var(--color-accent);
    }
  }
}
</style>
