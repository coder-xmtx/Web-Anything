<script setup>
import { getHotNews } from '@/services/api-HotNews';
import { onMounted, ref } from 'vue';

const news = ref([])

onMounted(async () => {
    const data = await getHotNews()
    news.value = data
})
</script>

<template>
    <van-card v-for="item in news" :key="item.newsId" :price="item.source" :desc="item.digest" :title="item.title"
        currency="" :thumb="item.imgList[0]" />

</template>

<style scoped></style>