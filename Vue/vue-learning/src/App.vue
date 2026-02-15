<script setup>
import { ref, computed } from "vue";
import TogglePurple from "./components/TogglePurple.vue";
import CircleSize from "./components/CircleSize.vue";
import SelectCircleTextColor from "./components/SelectCircleTextColor.vue";
import CircleRotate from "./components/CircleRotate.vue";

const isPurple = ref(false);
const circleColor = ref("text-white");
const circleSize = ref(200);
const circleAngle = ref(0);

const purple = computed(() =>
  isPurple.value ? "bg-purple-500" : "bg-blue-300",
);

const handlePurple = () => {
  isPurple.value = !isPurple.value;
};


const circleStyle = computed(() => {
  return {
    width: `${circleSize.value}px`,
    height: `${circleSize.value}px`,
    transform: `rotate(${circleAngle.value}deg)`,
  };
});
</script>

<template>
  <h1 class="text-3xl text-white">07 - Example2-动态圆圈</h1>
  <div id="case" class="border-2 border-blue-500 rounded-md w-full flex flex-col gap-4 p-4">
    <TogglePurple :isPurple="isPurple" @toggle="handlePurple" />
    <SelectCircleTextColor v-model:circleColor="circleColor" />
    <CircleSize v-model:circleSize="circleSize" />
    <CircleRotate v-model:circleAngle="circleAngle"> Circle Rotate </CircleRotate>

    <div class="rounded-full flex justify-center items-center font-bold" :class="[purple, circleColor]"
      :style="circleStyle">
      HELLO
    </div>
  </div>
  <div>
    <p class="text-white">练习 v-bind 和 computed</p>
  </div>
</template>

<style scoped></style>
