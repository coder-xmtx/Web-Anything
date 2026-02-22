<script setup>
import { ref } from 'vue'

import NavBar from './components/NavBar.vue';
import Hot from './components/Hot.vue';
import Sport from './components/Sport.vue';
import Finance from './components/Finance.vue';
import Entertainment from './components/Entertainment.vue';
import Bookmark from './components/Bookmark.vue';
import { useBookmark } from './composables/bookmark';

const currentComponent = ref('Hot');
const componentMap = {
  Hot,
  Sport,
  Finance,
  Entertainment
}

const { showBookmark, toggleBookmark } = useBookmark()
</script>

<template>
  <!-- 导航栏 -->
  <NavBar :toggle="toggleBookmark" :showBookmark="showBookmark" />

  <!-- 标签页 -->
  <div v-show="!showBookmark">
    <van-tabs v-model:active="currentComponent">
      <van-tab title="热点" name="Hot"></van-tab>
      <van-tab title="运动" name="Sport"></van-tab>
      <van-tab title="金融" name="Finance"></van-tab>
      <van-tab title="娱乐" name="Entertainment"></van-tab>
    </van-tabs>

    <!-- 动态组件渲染 -->
    <KeepAlive>
      <component :is="componentMap[currentComponent]" />
    </KeepAlive>
  </div>

  <div v-show="showBookmark">
    <Bookmark />
  </div>

  <van-back-top />

</template>

<style scoped></style>
