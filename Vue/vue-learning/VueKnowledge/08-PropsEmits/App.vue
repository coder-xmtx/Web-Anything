<script setup>
import { ref, computed } from "vue";
import TogglePurple from "./components/TogglePurple.vue";
import SelectCircleTextColor from "./components/SelectCircleTextColor.vue";
import CircleProperty from "./components/CircleProperty.vue";
import Circle from "./components/Circle.vue";

const isPurple = ref(false);
const circleColor = ref("text-white");
const circleSize = ref(200);
const circleAngle = ref(0);



const handlePurple = () => {
    isPurple.value = !isPurple.value;
};



</script>

<template>
    <h1 class="text-3xl text-white">07 - Example2-动态圆圈</h1>
    <div id="case" class="border-2 border-blue-500 rounded-md w-full flex flex-col gap-4 p-4">
        <TogglePurple :isPurple="isPurple" @toggle="handlePurple" />
        <SelectCircleTextColor v-model:circleColor="circleColor" />
        <CircleProperty v-model:circleProperty="circleSize">Circle Size </CircleProperty>
        <CircleProperty v-model:circleProperty="circleAngle">Circle Rotate </CircleProperty>
        <Circle :isPurple="isPurple" :circleColor="circleColor" :circleSize="circleSize" :circleAngle="circleAngle" />

    </div>
    <div>
        <p class="text-white">Props and Emits</p>
    </div>
</template>

<style scoped></style>
