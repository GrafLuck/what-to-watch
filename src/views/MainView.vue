<script setup lang="ts">
import FilterList from '../components/FilterList.vue'
import { films } from '../mock'
import FilmCard from '../components/FilmCard.vue'
</script>

<template>
  <section class="film-card">
    <div class="film-card__bg">
      <img src="../assets/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
    </div>

    <h1 class="visually-hidden">WTW</h1>

    <header class="page-header film-card__head">
      <div class="logo">
        <a class="logo__link">
          <span class="logo__letter logo__letter--1">W</span>
          <span class="logo__letter logo__letter--2">T</span>
          <span class="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <ul class="user-block">
        <li class="user-block__item">
          <div class="user-block__avatar">
            <img src="../assets//img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li class="user-block__item">
          <a class="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>

    <div class="film-card__wrap">
      <div class="film-card__info">
        <div class="film-card__poster">
          <img
            src="../assets/img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>

        <div class="film-card__desc">
          <h2 class="film-card__title">The Grand Budapest Hotel</h2>
          <p class="film-card__meta">
            <span class="film-card__genre">Drama</span>
            <span class="film-card__year">2014</span>
          </p>

          <div class="film-card__buttons">
            <button class="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlink:href="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button class="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlink:href="#add"></use>
              </svg>
              <span>My list</span>
              <span class="film-card__count">9</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="page-content">
    <section class="catalog">
      <h2 class="catalog__title visually-hidden">Catalog</h2>

      <FilterList />

      <div class="catalog__films-list">
        <FilmCard :name="films[0].name" :imageSrc="films[0].imageSrc" />
        <!-- Film List -->
      </div>

      <div class="catalog__more">
        <button class="catalog__button" type="button">Show more</button>
      </div>
    </section>

    <footer class="page-footer">
      <div class="logo">
        <a class="logo__link logo__link--light">
          <span class="logo__letter logo__letter--1">W</span>
          <span class="logo__letter logo__letter--2">T</span>
          <span class="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div class="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
</template>
