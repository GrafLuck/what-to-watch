<script setup lang="ts">
const props = defineProps<{
  isLight: boolean
}>()
</script>

<template>
  <div class="logo">
    <a class="logo__link" :class="{ 'logo__link--light': isLight }">
      <span class="logo__letter logo__letter--1">W</span>
      <span class="logo__letter logo__letter--2">T</span>
      <span class="logo__letter logo__letter--3">W</span>
    </a>
  </div>
</template>
