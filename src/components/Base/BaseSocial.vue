<template>
  <ul class="social">
    <li
      class="social__item"
      :key="title"
      v-for="{ title, icon, link } in socialList"
    >
      <a
        class="social__link"
        :href="link"
        :aria-label="`${$t('social.aria')} ${title}`"
      >
        <IconBase
          class="social__icon"
          box="0 0 16 16"
          :width="16"
          :height="16"
        >
          <component :is="icon" />
        </IconBase>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import IconBase from "../Icons/IconBase.vue"
import IconTwitter from "../Icons/IconTwitter.vue"
import IconInstagram from "../Icons/IconInstagram.vue"
import IconPinterest from "../Icons/IconPinterest.vue"
import IconYoutube from "../Icons/IconYoutube.vue"
import IconFacebook from "../Icons/IconFacebook.vue"

const socialList = [
  {
    id: 1,
    title: "facebook",
    icon: IconFacebook,
    link: "https://www.facebook.com/"
  },
  {
    id: 2,
    title: "twitter",
    icon: IconTwitter,
    link: "https://twitter.com/"
  },
  {
    id: 3,
    title: "instagram",
    icon: IconInstagram,
    link: "https://www.instagram.com/"
  },
  {
    id: 4,
    title: "pinterest",
    icon: IconPinterest,
    link: "https://www.pinterest.com/"
  },
  {
    id: 5,
    title: "youtube",
    icon: IconYoutube,
    link: "https://www.youtube.com/"
  }
]
</script>

<style scoped lang="scss">
.social {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  @media (max-width: 575px) {
    justify-content: space-between;
    width: 80%;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 3.8rem;
    border: 0.1rem solid transparent;
    color: var(--color-gray);
    &:focus-visible {
      color: var(--color-white);
      background-color: var(--color-accent-hover);
      border-color: var(--color-accent-hover);
    }
    @media (min-width: 576px) {
      transition: all 0.2s;
      &:hover {
        color: var(--color-accent-hover);
        border-color: var(--color-accent-hover);
      }
    }
    @media (max-width: 575px) {
      transform: scale(1.5);
    }
  }
}
</style>
