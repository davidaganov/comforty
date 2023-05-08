<template>
  <BaseButton appearance="gray">
    <IconBase
      box="0 0 24 24"
      :width="24"
      :height="24"
    >
      <IconClose />
    </IconBase>
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue"
import IconBase from "../Icons/IconBase.vue"
import IconClose from "../Icons/IconClose.vue"
</script>
