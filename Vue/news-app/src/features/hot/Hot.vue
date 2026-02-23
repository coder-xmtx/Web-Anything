<script setup>
import { getHotNews } from '@/services/api-HotNews';
import { onMounted, ref } from 'vue';
import NewList from '@/ui/NewList.vue';

const news = ref([])

onMounted(async () => {
    const data = await getHotNews()
    news.value = data
})
</script>

<template>
    <NewList :news="news" />
</template>

<style scoped></style>