# watchEffect

在`watch()`监听中，我们需要在第一个参数写入我们想要监听的对象，但是如果我们想要同时监听十几个对象，用数组全部都写在第一个参数是不是也不大好，所以就有了`watchEffect()`<br />

`watchEffect()`不需要写入监视对象数据，它可以自动的寻找上面定义的数据，只需在函数体里写回调函数和自己想要处理的逻辑即可

```Vue
<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

// 数据
const temp = ref(0);
const height = ref(10);

// 方法
const changeTemp = () => {
    temp.value += 10;
}
const changeHeight = () => {
    height.value += 10;
}

// watch监视
// watch([temp, height], (value) => {
//     const [temp, height] = value;
//     if (temp >= 100 || height >= 100) {
//         console.log("温度或高度已经超过100了，不能再加了");
//     }
// })

// watchEffect监视
watchEffect(() => {
    if (temp.value >= 100 || height.value >= 100) {
        console.log("温度或高度已经超过100了，不能再加了");
    }
})

</script>

<template>
    <div>
        <p>当前温度：{{ temp }}</p>
        <p>当前高度：{{ height }}</p>
        <div>
            <button @click="changeTemp" >温度+10</button>
            <button @click="changeHeight" >高度+10</button>
        </div>
    </div>
</template>
```

但是我们注意到，如上面的例子

- 用`watch()`监听数据时，当温度超过 100 度会打印输出提示，这时候如果点击另一个改变高度的按钮，也会打印输出提示
- 改用`watchEffect()`时，当温度超过 100 度会打印输出提示，这时候如果点击另一个改变高度的按钮，不会打印输出提示，也就是说造成了逻辑短路，需要注意这个点
