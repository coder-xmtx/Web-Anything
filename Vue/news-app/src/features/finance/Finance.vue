<script setup>
import { getFinanceNews } from '@/services/api-FinanceNews';
import { onMounted, ref } from 'vue';
import NewList from '@/ui/NewList.vue';


const news = ref([])

onMounted(async () => {
    const data = await getFinanceNews()
    news.value = data
})
</script>

<template>
    <NewList :news="news" />

</template>

<style scoped></style>