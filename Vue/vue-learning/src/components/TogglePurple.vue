<script setup>
defineProps(["isPurple"]);
defineEmits(["toggle"]);

</script>

<template>
    <label class="text-white flex gap-4"><input type="checkbox" :checked="isPurple"
            @change="$emit('toggle')" />Purple</label>
</template>

<style scoped></style>