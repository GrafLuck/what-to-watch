<script setup>
import { Filters } from '../const'
import FilterItem from '../components/FilterItem.vue'
</script>

<template>
  <ul class="catalog__genres-list">
    <FilterItem v-for="filter in Filters" is-active :type="filter" :key="filter" />
  </ul>
</template>
