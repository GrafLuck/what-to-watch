<template>
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
</template>
