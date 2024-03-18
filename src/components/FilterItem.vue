<script setup lang="ts">
const props = defineProps<{
  type: string
  isActive: boolean
}>()
</script>

<template>
  <li class="catalog__genres-item" :class="{ 'catalog__genres-item--active': isActive }">
    <a href="#" class="catalog__genres-link">{{ props.type }}</a>
  </li>
</template>
