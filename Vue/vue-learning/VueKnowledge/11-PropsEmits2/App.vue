<script setup>
import Child from './Child.vue';

const handleMessage = (message) => {
    console.log(message);
}

</script>

<template>
    <Child @response="handleMessage" />
</template>

<style scoped></style>
