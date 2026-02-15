<script setup>
defineProps(["circleColor"]);
</script>

<template>
    <select name="color" id="" class="border-2 p-1 rounded-md text-white"
        @change="$emit('update:circleColor', $event.target.value)">
        <option value="text-white" class="text-black">White</option>
        <option value="text-green-500" class="text-black">Green</option>
        <option value="text-orange-500" class="text-black">Orange</option>
    </select>
</template>

<style scoped></style>