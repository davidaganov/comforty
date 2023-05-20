<template>
  <div class="card">
    <div class="card__picture skeleton"></div>
    <div class="card__bottom">
      <div class="card__title skeleton"></div>
      <div class="card__button skeleton"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  &__picture {
    margin-bottom: 1.4rem;
    border-radius: 0.6rem;
    @media (min-width: 769px) {
      height: 31rem;
    }
    @media (max-width: 768px) {
      height: 20rem;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    height: 4.6rem;
  }

  &__title {
    width: 100%;
    border-radius: 0.6rem;
  }

  &__button {
    min-width: 4.6rem;
    height: 4.6rem;
    border-radius: 0.6rem;
  }
}
</style>
