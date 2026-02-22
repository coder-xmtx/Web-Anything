<script setup>
import { computed } from 'vue';
const props = defineProps(['toggle', 'showBookmark'])

const leftText = computed(() => props.showBookmark ? '返回' : '收藏');

const handleRefresh = () => {
    window.location.reload()
}
</script>

<template>
    <van-nav-bar title="新闻资讯" right-text="刷新" :left-text="leftText" @click-right="handleRefresh" @click-left="toggle" />
</template>