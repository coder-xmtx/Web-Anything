<script setup>
import { ref, computed } from "vue";

const isPurple = ref(false);
const circleColor = ref("text-white");
const circleSize = ref(200);
const circleAngle = ref(0);

const purple = computed(() =>
  isPurple.value ? "bg-purple-500" : "bg-blue-300",
);

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
    <label class="text-white flex gap-4"><input type="checkbox" v-model="isPurple" />Purple</label>
    <select name="color" id="" class="border-2 p-1 rounded-md text-white" v-model="circleColor">
      <option value="text-white" class="text-black">White</option>
      <option value="text-green-500" class="text-black">Green</option>
      <option value="text-orange-500" class="text-black">Orange</option>
    </select>
    <label class="text-white flex gap-4 items-center">Circle Size<input type="number"
        class="border-2 p-1 rounded-md text-white" v-model="circleSize" /></label>
    <label class="text-white flex gap-4 items-center">Circle Rotate<input type="number"
        class="border-2 p-1 rounded-md text-white" v-model="circleAngle" /></label>
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
