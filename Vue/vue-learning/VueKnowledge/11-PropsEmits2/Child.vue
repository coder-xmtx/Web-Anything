<script setup>
const emit = defineEmits(["response"]);

const sendMessage = () => {
    emit("response", "hello");
}

</script>

<template>
    <button @click="sendMessage"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer duration-150">发送</button>
</template>

<style scoped></style>