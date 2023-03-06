<template>
  <h2 class="title">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
.title {
  text-transform: capitalize;
  color: var(--color-black);
  @media (min-width: 769px) {
    font: 600 3.2rem/110% var(--main-font);
  }
  @media (max-width: 768px) {
    font: 600 2.4rem/110% var(--main-font);
  }
}
</style>
