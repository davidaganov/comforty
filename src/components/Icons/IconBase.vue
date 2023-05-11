<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    :viewBox="box"
    role="presentation"
  >
    <title
      v-if="iconName"
      lang="ru"
    >
      {{ iconName }}
    </title>
    <g
      :fill="stroke === false ? iconColor : 'none'"
      :stroke="stroke ? iconColor : 'none'"
    >
      <slot></slot>
    </g>
  </svg>
</template>

<script setup lang="ts">
import type { Icon } from "../../interfaces"

withDefaults(defineProps<Icon>(), {
  iconColor: "currentColor",
  stroke: false,
  width: 18,
  height: 18
})
</script>
