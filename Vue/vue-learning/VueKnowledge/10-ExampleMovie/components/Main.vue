<script setup>
import PopularMovie from './PopularMovie.vue';
import WatchedMovie from './WatchedMovie.vue';

import { ref } from "vue";

// 定义看过的电影列表
const watchedMovies = ref([])

// 定义添加电影的方法
const addMovie = (movie) => {
    const isExist = watchedMovies.value.some(item => item.id === movie.id)
    if (!isExist) {
        watchedMovies.value.push(movie)
    }
}

// 定义删除电影的方法
const deleteMovie = (movie) => {
    watchedMovies.value = watchedMovies.value.filter(item => item.id !== movie.id)
}

</script>

<template>
    <main class="flex gap-4">
        <PopularMovie :addMovie="addMovie" />
        <WatchedMovie :watchedMovies="watchedMovies" :deleteMovie="deleteMovie" />
    </main>
</template>

<style scoped></style>