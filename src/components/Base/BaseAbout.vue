<template>
  <ul class="about">
    <li
      class="about__item"
      :key="id"
      v-for="{ id, name, icon, width, height } in aboutList"
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
  position: absolute;
  display: flex;
  justify-content: space-between;
  gap: 3.3rem;
  width: 100%;
  height: 15rem;
  padding: 5rem 7rem;
  left: 0;
  right: 0;
  bottom: -7.5rem;
  background-color: var(--color-white);
  border-radius: 1.2rem;
  box-shadow: 0px 2.4rem 10rem rgba(22, 25, 50, 0.07);

  &__item {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  &__icon {
    min-width: min-content;
    color: var(--color-black);
  }
  &__title {
    margin-bottom: 0.6rem;
    font: 500 1.8rem/110% var(--main-font);
    color: var(--color-black);
  }
  &__description {
    font: 400 1.5rem/110% var(--main-font);
    color: #9a9caa;
  }
}
</style>
