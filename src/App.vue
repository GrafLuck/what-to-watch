<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Main</RouterLink>
        <RouterLink to="/login">SignIn</RouterLink>
        <RouterLink to="/mylist">MyList</RouterLink>
        <RouterLink to="/films/:id">Film</RouterLink>
        <RouterLink to="/films/:id/review">Review</RouterLink>
        <RouterLink to="/player/:id">Player</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
