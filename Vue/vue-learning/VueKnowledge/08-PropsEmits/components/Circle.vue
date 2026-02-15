<script setup>
import { computed } from "vue";
const { isPurple, circleColor, circleSize, circleAngle } = defineProps(["isPurple", "circleColor", "circleSize", "circleAngle"]);

const purple = computed(() =>
    isPurple ? "bg-purple-500" : "bg-blue-300",
);

const circleStyle = computed(() => {
    return {
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        transform: `rotate(${circleAngle}deg)`,
    };
});
</script>

<template>
    <div class="rounded-full flex justify-center items-center font-bold" :class="[purple, circleColor]"
        :style="circleStyle">
        HELLO
    </div>
</template>

<style scoped></style>