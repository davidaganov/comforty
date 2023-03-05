<template>
  <BaseButton appearance="ghost">
    <IconBase
      :width="18"
      :height="15"
      box="0 0 18 15"
    >
      <IconMenu />
    </IconBase>
    {{ $t("nav.bottom.categories") }}
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "../Base/BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconMenu from "../Icons/IconMenu.vue"
</script>
