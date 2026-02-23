<script setup>
import { getEntertainmentNews } from '@/services/api-EntertainmentNews';
import { onMounted, ref } from 'vue';
import NewList from '@/ui/NewList.vue';


const news = ref([])

onMounted(async () => {
    const data = await getEntertainmentNews()
    news.value = data
})
</script>

<template>
    <NewList :news="news" />
</template>

<style scoped></style>