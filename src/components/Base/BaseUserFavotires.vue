<template>
  <BaseButton
    appearance="white"
    :to="to"
    :aria-label="$t('nav.middle.favorite')"
  >
    <IconBase
      box="0 0 22 22"
      :width="22"
      :height="22"
      :stroke="true"
    >
      <IconHeart />
    </IconBase>
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "../Base/BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconHeart from "../Icons/IconHeart.vue"

defineProps<{ to?: string }>()
</script>
