<script setup>
import { ref, computed, onMounted } from "vue";
const advice = ref("There is no advice yet");

const isLoading = ref(false);
const isDisabled = computed(() => isLoading.value);

const getAdvice = async () => {
    isLoading.value = true;
    const response = await fetch("https://v1.hitokoto.cn/?c=d&c=i");
    const { hitokoto: data, from_who: author } = await response.json();
    advice.value = `${data} - ${author ? author : '佚名'}`;
    isLoading.value = false;
}

const message = computed(() =>
    isLoading.value ? 'Loading...' : advice.value
)

onMounted(() => getAdvice());
</script>

<template>
    <h1 class="text-3xl text-white">Example3 - 获取 API 数据</h1>
    <div id="case" class="border-2 border-blue-500 rounded-md w-full flex flex-col gap-4 p-4">
        <h2 class="text-white font-bold">Advices</h2>
        <p class="text-white">{{ message }}</p>
        <button @click="getAdvice" :disabled="isDisabled"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer duration-150 disabled:opacity-50 disabled:cursor-not-allowed">Get
            Advice</button>
    </div>
    <div>
        <p class="text-white">使用一言接口</p>
    </div>
</template>

<style scoped></style>
