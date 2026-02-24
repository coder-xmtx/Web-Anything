<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
    <van-grid :border="false" :column-num="3">
        <van-grid-item @click="router.push('/temperature')">
            <van-image src="temperature.svg" width="48" />
            <p>温度转换</p>
        </van-grid-item>
        <van-grid-item>
            <van-image src="length.svg" width="48" />
        </van-grid-item>
        <van-grid-item>
            <van-image src="weight.svg" width="48" />
        </van-grid-item>
        <van-grid-item>
            <van-image src="currency.svg" width="48" />
        </van-grid-item>
        <van-grid-item>
            <van-image src="memo.svg" width="48" />
        </van-grid-item>
    </van-grid>
</template>

<style scoped></style>