<template>
  <ul class="about">
    <li
      class="about__item"
      :key="name"
      v-for="{ name, icon, width, height } in aboutList"
    >
      <IconBase
        class="about__icon"
        :width="width"
        :height="height"
      >
        <component :is="icon" />
      </IconBase>
      <div class="about__text">
        <h4 class="about__title">
          {{ $t(`blocks.promo.about.${name}.title`) }}
        </h4>
        <p class="about__description">
          {{ $t(`blocks.promo.about.${name}.description`) }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import IconBase from "../Icons/IconBase.vue"
import IconDiscount from "../Icons/IconDiscount.vue"
import IconDelivery from "../Icons/IconDelivery.vue"
import IconSupport from "../Icons/IconSupport.vue"
import IconPayment from "../Icons/IconPayment.vue"

const aboutList = [
  { id: 1, name: "discount", icon: IconDiscount, width: 46, height: 46 },
  { id: 2, name: "delivery", icon: IconDelivery, width: 64, height: 39 },
  { id: 3, name: "support", icon: IconSupport, width: 50, height: 50 },
  { id: 4, name: "payment", icon: IconPayment, width: 50, height: 50 }
]
</script>

<style scoped lang="scss">
.about {
  @media (min-width: 1201px) {
    height: 15rem;
    padding: 1rem 7rem;
    bottom: -7.5rem;
    border-radius: 1.2rem;
  }
  @media (max-width: 1200px) and (min-width: 1021px) {
    border-radius: 0 0 1.2rem 1.2rem;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    height: 10rem;
    padding: 1rem 3rem;
    bottom: -5rem;
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(4, auto);
  }
  @media (max-width: 768px) and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    height: 16.9rem;
    padding: 2rem;
    bottom: -10rem;
  }
  @media (min-width: 576px) {
    position: absolute;
    display: grid;
    align-items: center;
    gap: 3.3rem;
    width: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    box-shadow: 0 2.4rem 10rem rgba(22, 25, 50, 0.07);
    z-index: 1;
  }
  @media (max-width: 575px) {
    display: none;
  }

  &__item {
    @media (min-width: 576px) {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__icon {
    @media (max-width: 768px) {
      min-width: 6.4rem;
      transform: scale(0.8);
    }
    @media (min-width: 576px) {
      color: var(--color-black);
      min-width: min-content;
    }
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__title {
    @media (min-width: 1201px) {
      margin-bottom: 0.6rem;
    }
    @media (min-width: 1021px) {
      font: 500 1.8rem/110% var(--main-font);
    }
    @media (max-width: 1020px) {
      font: 500 1.6rem/110% var(--main-font);
    }
    @media (min-width: 576px) {
      color: var(--color-black);
    }
    @media (max-width: 575px) {
      display: none;
    }
  }

  &__description {
    @media (min-width: 1201px) {
      font: 400 1.5rem/110% var(--main-font);
      color: var(--color-gray-200);
    }
    @media (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
