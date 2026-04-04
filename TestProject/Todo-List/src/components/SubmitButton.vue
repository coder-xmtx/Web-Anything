<script setup>
const emit = defineEmits(['click']);

const handleClick = () => {
    emit('click');
}
</script>

<template>
    <button type="button" class="btn btn-soft btn-primary" @click="handleClick">Submit</button>
</template>