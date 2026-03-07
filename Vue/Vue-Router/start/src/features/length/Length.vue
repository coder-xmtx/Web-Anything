<script setup>
import { ref } from 'vue';

// 公制 cm m mm 转 英制 in ft
const metricShowPicker = ref(false);
const metricColumns = [
    { text: 'mm', value: '0.1' },
    { text: 'cm', value: '1' },
    { text: 'm', value: '100' },
];
// 英制 in ft
const imperialShowPicker = ref(false);
const imperialColumns = [
    { text: 'in', value: '2.54' },
    { text: 'ft', value: '30.48' },
];
const imperialFieldValue = ref('in');
const imperialPickerValue = ref(['2.54']); // 默认选择in
const onConfirmImperial = ({ selectedValues, selectedOptions }) => {
    imperialPickerValue.value = selectedValues;
    imperialFieldValue.value = selectedOptions[0].text;
    imperialShowPicker.value = false;
};
const metric = ref(0);
const imperial = ref(0);
const fieldValue = ref('cm'); // 默认cm单位
const pickerValue = ref(['1']); // 默认选择cm
const onConfirm = ({ selectedValues, selectedOptions }) => {
    pickerValue.value = selectedValues;
    fieldValue.value = selectedOptions[0].text;
    metricShowPicker.value = false;
};

// 公制转英制
const metricToImperial = () => {
    if (metric.value === '' || metric.value == null) return;
    const metricFactor = parseFloat(pickerValue.value[0] || '1'); // 默认cm
    const imperialFactor = parseFloat(imperialPickerValue.value[0] || '2.54'); // 默认in

    // 转换：公制值 * 公制因子 (转换为cm) / 英制因子 (转换为目标英制单位)
    const valueInCm = Number(metric.value) * metricFactor;
    imperial.value = Number((valueInCm / imperialFactor).toFixed(2));
};

// 英制转公制
const imperialToMetric = () => {
    if (imperial.value === '' || imperial.value == null) return;
    const metricFactor = parseFloat(pickerValue.value[0] || '1'); // 默认cm
    const imperialFactor = parseFloat(imperialPickerValue.value[0] || '2.54'); // 默认in

    // 转换：英制值 * 英制因子 (转换为cm) / 公制因子 (转换为目标公制单位)
    const valueInCm = Number(imperial.value) * imperialFactor;
    metric.value = Number((valueInCm / metricFactor).toFixed(2));
};

// 表单提交处理
const onSubmit = () => {
    const hasMetric = metric.value !== '' && metric.value != null;
    const hasImperial = imperial.value !== '' && imperial.value != null;

    if (hasMetric && !hasImperial) {
        metricToImperial();
    } else if (!hasMetric && hasImperial) {
        imperialToMetric();
    } else if (hasMetric && hasImperial) {
        // 如果两个都有值，重新计算英制值（使用公制值覆盖）
        metricToImperial();
    }
};

</script>

<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="metric" type="number" name="metric" :label="fieldValue" placeholder="公制"
                @blur="metricToImperial" right-icon="more-o" @click-right-icon="metricShowPicker = true" />
            <van-popup v-model:show="metricShowPicker" destroy-on-close round position="bottom">
                <van-picker :model-value="pickerValue" :columns="metricColumns" @cancel="metricShowPicker = false"
                    @confirm="onConfirm" />
            </van-popup>
            <van-field v-model="imperial" type="number" name="imperial" :label="imperialFieldValue" placeholder="英制"
                @blur="imperialToMetric" right-icon="more-o" @click-right-icon="imperialShowPicker = true" />
            <van-popup v-model:show="imperialShowPicker" destroy-on-close round position="bottom">
                <van-picker :model-value="imperialPickerValue" :columns="imperialColumns" @cancel="imperialShowPicker = false"
                    @confirm="onConfirmImperial" />
            </van-popup>
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="submit" native-type="submit">
                转换
            </van-button>
        </div>
    </van-form>
</template>

<style scoped></style>