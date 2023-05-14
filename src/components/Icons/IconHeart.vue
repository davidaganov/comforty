<template>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    d="M2.6 10.6c-1-3 .2-6.5 3.4-7.6a5.5 5.5 0 0 1 5 .8c1.3-1 3.3-1.3 5-.8 3.2 1 4.3 4.6 3.4 7.6-1.6 4.9-8.4 8.6-8.4 8.6s-6.8-3.6-8.4-8.6v0Z"
    clip-rule="evenodd"
    v-if="!remove"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.4 16.4a.7.7 0 1 0 1.1 1l1.2-1.3a24.3 24.3 0 0 0 4 2.7l.3-.6-.4.7h.8l-.4-.7.4.7a10.3 10.3 0 0 0 1-.7c.8-.5 1.7-1 2.7-1.9 1.9-1.5 4.1-3.8 5-6.5.7-2.4.3-5.3-1.5-7l1.2-1.4a.7.7 0 1 0-1.1-1l-1.3 1.4a6 6 0 0 0-1.2-.5 6.7 6.7 0 0 0-5.2.6 6.2 6.2 0 0 0-5.2-.6C1 2.6-.2 6.5.8 9.8c.8 2.1 2.2 4 3.7 5.3l-1.1 1.3ZM6.7 15a22.9 22.9 0 0 0 3.3 2.3 23.7 23.7 0 0 0 3.1-2.1c1.9-1.6 3.9-3.6 4.6-5.8.6-2 .2-4.2-1.1-5.6L6.6 15Zm8.7-12L5.5 14C4.1 12.7 3 11.1 2.3 9.4c-.9-2.7.2-5.8 3-6.7a4.8 4.8 0 0 1 4.3.7c.2.2.6.2.9 0a5 5 0 0 1 4.9-.4Z"
    clip-rule="evenodd"
    v-else
  />
</template>

<script setup lang="ts">
defineProps<{ remove?: boolean }>()
</script>
