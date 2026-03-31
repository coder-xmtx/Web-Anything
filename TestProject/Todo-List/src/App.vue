<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <nav class="px-4 sm:px-6 lg:px-8">
    <NavBar />
  </nav>

  <main class="px-4 sm:px-6 lg:px-8">
    <RouterView />
  </main>
</template>

<style scoped></style>
