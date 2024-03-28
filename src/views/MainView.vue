<script setup lang="ts">
import FilterList from '@/components/FilterList.vue'
import { films } from '../mock'
import FilmList from '@/components/FilmList.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ShowMoreButton from '@/components/ShowMoreButton.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FilmCard from '@/components/FilmCard.vue'
</script>

<template>
  <section class="film-card">
    <div class="film-card__bg">
      <img src="../assets/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
    </div>

    <h1 class="visually-hidden">WTW</h1>
    <HeaderComponent />
    <film-card />
  </section>

  <div class="page-content">
    <section class="catalog">
      <h2 class="catalog__title visually-hidden">Catalog</h2>
      <FilterList />
      <FilmList />
      <ShowMoreButton />
    </section>
    <FooterComponent />
  </div>
</template>
