<template>
  <ul>
    <li
      :key="id"
      v-for="{ id, title, icon, link } in socialList"
    >
      <BaseButton
        :link="link"
        :aria-label="title"
      >
        <IconBase
          :width="24"
          :height="24"
          box="0 0 24 24"
        >
          {{ icon }}
        </IconBase>
      </BaseButton>
    </li>
  </ul>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconFacebook from "../Icons/IconFacebook.vue"
import IconTwitter from "../Icons/IconTwitter.vue"
import IconInstagram from "../Icons/IconInstagram.vue"
import IconPinterest from "../Icons/IconPinterest.vue"
import IconYoutube from "../Icons/IconYoutube.vue"

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
}
</style>
