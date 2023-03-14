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

<script lang="ts">
interface Props {
  iconName?: string
  iconColor?: string
  stroke?: boolean
  box?: string
  width?: number
  height?: number
}
</script>

<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  iconColor: "currentColor",
  stroke: false,
  box: "0 0 18 18",
  width: 18,
  height: 18
})
</script>
