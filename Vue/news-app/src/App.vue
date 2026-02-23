<script setup>
import { ref, provide } from 'vue';
import NavBar from './ui/NavBar.vue';
import Hot from './features/hot/Hot.vue';
import Sport from './features/sport/Sport.vue';
import Finance from './features/finance/Finance.vue';
import Entertainment from './features/entertainment/Entertainment.vue';
import Bookmark from './features/bookmark/Bookmark.vue';
import { useToggleBookmark } from './composables/bookmark';
import { useBookmark } from './composables/bookmark';  // 使用重构后的

const currentComponent = ref('Hot');
const componentMap = { Hot, Sport, Finance, Entertainment };

const { showBookmark, toggleBookmark: toggleView } = useToggleBookmark();
const { bookmarkNews, toggleBookmark } = useBookmark();

// 提供收藏相关能力给所有后代组件
provide('toggleBookmark', toggleBookmark);
provide('bookmarkNews', bookmarkNews);
</script>

<template>
  <NavBar :toggle="toggleView" :showBookmark="showBookmark" />

  <!-- 新闻列表页 -->
  <div v-show="!showBookmark">
    <van-tabs v-model:active="currentComponent">
      <van-tab title="热点" name="Hot" />
      <van-tab title="运动" name="Sport" />
      <van-tab title="金融" name="Finance" />
      <van-tab title="娱乐" name="Entertainment" />
    </van-tabs>
    <KeepAlive>
      <component :is="componentMap[currentComponent]" />
    </KeepAlive>
  </div>

  <!-- 收藏页 -->
  <div v-show="showBookmark">
    <Bookmark />
  </div>

  <van-back-top />
</template>