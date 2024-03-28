<script setup lang="ts">
import LogoComponent from '@/components/LogoComponent.vue'
</script>

<template>
  <header class="page-header film-card__head">
    <LogoComponent :is-light="false" />

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
</template>
