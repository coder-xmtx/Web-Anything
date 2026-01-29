<script setup lang="ts">
import Aside from '@/components/Aside.vue';

</script>

<template>
    <el-container class="main-container">
        <!-- <el-aside width="200px">Aside</el-aside> -->
        <Aside />
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.main-container {
    height: 100%;
}
</style>