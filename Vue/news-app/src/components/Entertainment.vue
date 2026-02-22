<script setup>
import { getEntertainmentNews } from '@/services/api-EntertainmentNews';
import { onMounted, ref } from 'vue';

const news = ref([])

onMounted(async () => {
    const data = await getEntertainmentNews()
    news.value = data
})
</script>

<template>
    <van-card v-for="item in news" :key="item.newsId" :price="item.source" :desc="item.digest" :title="item.title"
        currency="" :thumb="item.imgList[0]" />

</template>

<style scoped></style>