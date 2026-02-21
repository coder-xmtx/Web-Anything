<script setup>
const { popularMovies, handleMovieClick } = defineProps(['popularMovies', 'handleMovieClick'])
</script>

<template>
    <div v-for="movie in popularMovies" :key="movie.id"
        class="flex items-center gap-4 hover:bg-gray-800 rounded-md transition-all">
        <img :src="movie.img" :alt="movie.nm" class="w-1/2 rounded-md">
        <div class="flex flex-col space-between gap-2">
            <p class="text-orange-400 font-bold">{{ movie.nm }}</p>
            <p>{{ movie.rt }}</p>
            <p>主演：{{ movie.star }}</p>
            <p>评分：{{ movie.sc === 0 ? '暂无评分' : movie.sc }}</p>
            <button @click="handleMovieClick(movie)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-1 cursor-pointer duration-150">添加</button>
        </div>
    </div>
</template>

<style scoped></style>