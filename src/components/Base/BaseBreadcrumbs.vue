<template>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb__item">
        <RouterLink
          class="breadcrumb__link"
          :to="Translation.i18nRoute({ name: 'home' })"
        >
          <span>{{ $t("nav.breadcrumbs.home") }}</span>
        </RouterLink>
      </li>

      <template v-if="path">
        <li
          class="breadcrumb__item"
          :key="name"
          v-for="{ name, params } in path"
        >
          <RouterLink
            class="breadcrumb__link"
            :to="Translation.i18nRoute(params)"
          >
            <span>{{ name }}</span>
          </RouterLink>
        </li>
      </template>

      <li class="breadcrumb__item">
        <span
          class="breadcrumb__current"
          v-if="page"
        >
          {{ $t(`nav.breadcrumbs.${page}`) }}
        </span>
        <span
          class="breadcrumb__current"
          v-if="title"
        >
          {{ title }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router"
import Translation from "../../i18n/translation"

interface Breadcrumb {
  path?: { params: { name: string; query?: Record<string, string> }; name: string }[]
  page?: string
  title?: string
}

defineProps<Breadcrumb>()
</script>

<style scoped lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 6rem;

  &__item {
    font: 400 1.6rem var(--main-font);
  }

  &__link {
    font: inherit;
    span {
      color: var(--color-gray);
      transition: all 0.2s;
    }
    &::after {
      content: " >";
      padding-right: 0.5rem;
      color: var(--color-gray);
    }
    &:focus-visible span {
      background-color: var(--color-accent);
      color: var(--color-white);
    }
    @media (min-width: 769px) {
      &:hover span {
        color: var(--color-accent-hover);
      }
    }
  }

  &__current {
    color: var(--color-accent);
  }
}
</style>
