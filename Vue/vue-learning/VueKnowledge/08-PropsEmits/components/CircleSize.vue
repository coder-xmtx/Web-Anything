<script setup>
defineProps(["circleSize"]);

</script>

<template>
    <label class="text-white flex gap-4 items-center">Circle Size
        <input type="number" class="border-2 p-1 rounded-md text-white" :value="circleSize"
            @input="$emit('update:circleSize', +$event.target.value)" />
    </label>
</template>

<style scoped></style>