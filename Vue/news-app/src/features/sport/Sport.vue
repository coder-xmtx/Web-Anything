<script setup>
import { getSportNews } from '@/services/api-SportNews';
import { onMounted, ref } from 'vue';
import NewList from '@/ui/NewList.vue';

const news = ref([])

onMounted(async () => {
    const data = await getSportNews()
    news.value = data
})
</script>

<template>
    <newList :news="news" />
</template>

<style scoped></style>