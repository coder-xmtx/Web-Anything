<script setup>
import { ref } from 'vue';

const celsius = ref(0);
const fahrenheit = ref(0);

const celsiusToFahrenheit = () => {
    fahrenheit.value = Number((celsius.value * 1.8 + 32).toFixed(2));
}

const fahrenheitToCelsius = () => {
    celsius.value = Number(((fahrenheit.value - 32) / 1.8).toFixed(2));
}

</script>

<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="celsius" type="number" name="celsius" label="摄氏度" placeholder="°C"
                @blur="celsiusToFahrenheit" />
            <van-field v-model="fahrenheit" type="number" name="fahrenheit" label="华氏度" placeholder="°F"
                @blur="fahrenheitToCelsius" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary">
                转换
            </van-button>
        </div>
    </van-form>
</template>

<style scoped></style>