<script setup>
import { ref, onMounted } from "vue";
import PopularComponent from "./PopularComponent.vue";
import ComingComponent from "./ComingComponent.vue";
const popularMovies = ref([])
const comingMovies = ref([])
const toggleActive = ref(false)

// 接收父组件传递过来的数据
const { addMovie } = defineProps(['addMovie'])

const getPopularMovie = async () => {
    try {
        const response = await fetch('/movieOnInfoList')
        const { movieList } = await response.json()
        popularMovies.value = movieList
    } catch (error) {
        console.log(error)
    }
}

const getComingMovie = async () => {
    try {
        const response = await fetch('/comingList')
        const { coming } = await response.json()
        comingMovies.value = coming
    } catch (error) {
        console.log(error)
    }
}

// 点击电影调用父组件方法
const handleMovieClick = (movie) => {
    if (addMovie) {
        addMovie(movie)
    }
}

onMounted(() => {
    getPopularMovie()
    getComingMovie()
})
</script>

<template>
    <div class="flex flex-col gap-4 border-2 border-blue-400 text-white rounded-md w-sm p-2">
        <div class="flex gap-4">
            <h2 class="text-white font-bold mx-auto cursor-pointer hover:text-cyan-100 " @click="toggleActive = false"
                :class="{ 'border-b-2 border-blue-500': !toggleActive }">
                热播电影</h2>
            <h2 class="text-white font-bold mx-auto cursor-pointer hover:text-cyan-100" @click="toggleActive = true"
                :class="{ 'border-b-2 border-blue-500': toggleActive }">
                即将上映</h2>
        </div>
        <!-- <div v-show="!toggleActive" class="flex flex-col gap-4">
            <PopularComponent :popularMovies="popularMovies" :handleMovieClick="handleMovieClick" />
        </div>
        <div v-show="toggleActive" class="flex flex-col gap-4">
            <ComingComponent :comingMovies="comingMovies" :handleMovieClick="handleMovieClick" />
        </div> -->

        <!-- 动态组件 -->
        <div class="flex flex-col gap-4">
            <KeepAlive>
                <component :is="toggleActive ? ComingComponent : PopularComponent" :popularMovies="popularMovies"
                    :comingMovies="comingMovies" :handleMovieClick="handleMovieClick" />
            </KeepAlive>
        </div>
    </div>

</template>

<style scoped></style>