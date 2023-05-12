<template>
  <div class="inner">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.inner {
  width: 100%;
  max-width: 132rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1460px) and (min-width: 375px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: 375px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
