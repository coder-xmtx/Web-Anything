<script setup>
import Avatar from '@/components/Avatar.vue';
import Collapse from '@/components/Collapse.vue';
import TextRotate from '@/components/TextRotate.vue';


</script>

<template>
    <h1 class="text-center text-3xl font-bold">About Me</h1>
    <div class="divider w-3/4 mx-auto"></div>
    <div class="flex flex-col items-center gap-6 w-full">
        <Avatar />
        <TextRotate />
        <Collapse />
    </div>
</template>

<style scoped></style>