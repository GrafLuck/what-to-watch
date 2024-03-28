<script setup lang="ts">
import { films } from '../mock'
import SmallFilmCard from '@/components/SmallFilmCard.vue'
</script>

<template>
  <div class="catalog__films-list">
    <SmallFilmCard v-for="film in films" :name="film.name" :imageSrc="film.imageSrc" />
  </div>
</template>
