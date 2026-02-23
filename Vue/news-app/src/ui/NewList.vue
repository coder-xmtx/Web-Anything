<script setup>
import { inject, ref } from 'vue';
import Loading from './Loading.vue';

const props = defineProps({
    news: Array,
    isEmptyText: {
        type: Boolean,
        default: false
    }
}); // 当前分类的新闻列表

const toggleBookmark = inject('toggleBookmark');
const bookmarkNews = inject('bookmarkNews', ref([])); // 提供默认值，避免未提供时出错

// 判断某条新闻是否已收藏
const isBookmarked = (newsId) => {
    return bookmarkNews.value.some(item => item.newsId === newsId);
};
</script>

<template>

    <div v-if="!news.length" class="empty-wrapper">
        <loading v-if="!isEmptyText" />
        <div v-else class="empty-tip">暂无收藏</div>
    </div>

    <van-card v-else v-for="item in news" :key="item.newsId" :price="item.source" :desc="item.digest"
        :title="item.title" currency="" :thumb="item.imgList?.[0]">
        <template #footer>
            <van-button size="small" :type="isBookmarked(item.newsId) ? 'danger' : 'primary'"
                @click="toggleBookmark(item)">
                {{ isBookmarked(item.newsId) ? '取消收藏' : '收藏' }}
            </van-button>
            <van-button size="small">隐藏</van-button>
        </template>
    </van-card>
</template>

<style scoped>
.empty-wrapper {
    padding: 20px;
    text-align: center;
}

.empty-tip {
    color: #999;
    font-size: 14px;
}
</style>