<script setup>
const { comingMovies, handleMovieClick } = defineProps(['comingMovies', 'handleMovieClick'])
</script>

<template>
    <div v-for="movie in comingMovies" :key="movie.id"
        class="flex justify-center items-center gap-4 hover:bg-gray-800 rounded-md cursor-pointer transition-all"
        @click="handleMovieClick(movie)">
        <img :src="movie.img" :alt="movie.nm" class="w-1/2 rounded-md cursor-pointer">
        <div class="flex flex-col space-between">
            <p class="text-orange-400 font-bold">{{ movie.nm }}</p>
            <p>{{ movie.rt }}</p>
            <p>主演：{{ movie.star }}</p>
            <p>评分：{{ movie.sc === 0 ? '暂无评分' : movie.sc }}</p>
        </div>
    </div>
</template>

<style scoped></style>