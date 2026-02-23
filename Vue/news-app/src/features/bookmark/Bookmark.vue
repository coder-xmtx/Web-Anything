<script setup>
import { inject } from 'vue';
import NewList from '@/ui/NewList.vue';

const bookmarkNews = inject('bookmarkNews');
</script>

<template>
    <NewList :news="bookmarkNews" isEmptyText="true" />
</template>