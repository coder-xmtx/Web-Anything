<script setup>
defineProps(["circleProperty"]);
</script>

<template>
    <label class="text-white flex gap-4 items-center">
        <slot />
        <input type="number" class="border-2 p-1 rounded-md text-white" :value="circleProperty"
            @input="$emit('update:circleProperty', +$event.target.value)" />
    </label>

</template>

<style scoped></style>