<script setup>
import { ref } from 'vue';

// 公制 cm m mm 转 英制 in ft
const metricShowPicker = ref(false);
const metricColumns = [
    { text: 'mm', value: '0.1' },
    { text: 'cm', value: '1' },
    { text: 'm', value: '100' },
];
const fieldValue = ref('');
const showPicker = ref(false);
const pickerValue = ref([]);
const onConfirm = ({ selectedValues, selectedOptions }) => {
    showPicker.value = false;
    pickerValue.value = selectedValues;
    fieldValue.value = selectedOptions[0].text;
};
</script>

<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="metric" type="number" name="celsius" label="cm" placeholder="公制"
                @blur="celsiusToFahrenheit" right-icon="more-o" @click-right-icon="metricShowPicker = true" />
            <van-popup v-model:show="metricShowPicker" destroy-on-close round position="bottom">
                <van-picker :model-value="pickerValue" :columns="metricColumns" @cancel="metricShowPicker = false"
                    @confirm="onConfirm" />
            </van-popup>
            <van-field v-model="imperial" type="number" name="fahrenheit" label="in" placeholder="英制"
                @blur="fahrenheitToCelsius" right-icon="more-o" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary">
                转换
            </van-button>
        </div>
    </van-form>
</template>

<style scoped></style>