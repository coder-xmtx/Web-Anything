<script setup lang="ts">

import TreeMenu from './TreeMenu.vue'

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <el-menu default-active="2" class="aside-container" @open="handleOpen" @close="handleClose">
        <h1>问诊系统</h1>
        <TreeMenu />
    </el-menu>
</template>

<style lang="less" scoped>
.aside-container {
    height: 100%;

    h1 {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 0;
    }
}
</style>