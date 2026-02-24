<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router';

// 用来导航
const router = useRouter();

// 用来获取当前路由
const route = useRoute();

const goHome = () => {
  router.push('/');
}

</script>

<template>
  <nav>
    <van-nav-bar title="Mixsu Tools" />
  </nav>

  <main>
    <router-view />

    <van-floating-bubble icon="setting-o" @click="goHome" v-if="route.path !== '/'" />

  </main>
</template>

<style scoped></style>
