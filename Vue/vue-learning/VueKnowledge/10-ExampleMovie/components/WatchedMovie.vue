<script setup>
import { ref, onMounted, computed } from "vue";

// 接收父组件传递过来的数据
const { watchedMovies, deleteMovie } = defineProps(['watchedMovies', 'deleteMovie'])

</script>

<template>
    <div class="flex flex-col gap-4 border-2 border-orange-400 text-white rounded-md w-sm p-2">
        <h2 class="text-white font-bold mx-auto cursor-pointer">看过的电影</h2>
        <div v-for="movie in watchedMovies" :key="movie.id" class="flex justify-between items-center gap-4">
            <img :src="movie.img" :alt="movie.nm" class="w-1/2 rounded-md cursor-pointer">
            <div class="flex flex-col space-between gap-4">
                <p class="text-orange-400 font-bold">{{ movie.nm }}</p>
                <button @click="deleteMovie(movie)"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer duration-150">删除</button>
            </div>
        </div>
        <div v-if="watchedMovies.length === 0" class="text-gray-400 font-bold mx-auto cursor-pointer">
            暂无看过的电影
        </div>
    </div>
</template>

<style scoped></style>