<template>
  <section
    class="companies"
    id="companies"
  >
    <BaseInner class="companies__inner">
      <ul class="companies__list">
        <li
          class="companies__item"
          v-for="{ id, name, logo } in companies"
          :key="id"
        >
          <img
            class="companies__logo"
            :alt="name"
            :src="getImageUrl({ fileName: logo, folder: 'images/companies' })"
          />
        </li>
      </ul>
    </BaseInner>
  </section>
</template>

<script setup lang="ts">
import type { Company } from "@/interfaces"
import { getImageUrl } from "@/utils/getImageUrl"

defineProps<{ companies: Company[] }>()
</script>

<style scoped lang="scss">
.companies {
  &__list {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    gap: 6.2rem;
  }

  &__logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: inherit;
  }
}
</style>
