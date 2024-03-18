<script setup lang="ts">
const props = defineProps<{
  imageSrc: string
  name: string
}>()
</script>

<template>
  <article class="small-film-card catalog__films-card">
    <div class="small-film-card__image">
      <img :src="props.imageSrc" :alt="props.name" width="280" height="175" />
    </div>
    <h3 class="small-film-card__title">
      <a class="small-film-card__link" href="film-page.html">{{ props.name }}</a>
    </h3>
  </article>
</template>
