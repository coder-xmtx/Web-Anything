# ref

## ref()能干什么

用 `ref()` 可以定义响应式数据（基本变量或者对象），在 `<script>`块里用 `数据.value` 来访问数据，在`<template>`块里直接用插值语法访问数据，不需要加`.value`

## 解构

解构响应式对象时，解构后会丢失响应式属性，所以要用 `toRefs()` 来转为响应式对象

> [!note] 我的理解
> 使用解构赋值后，`let { name } = toRefs(obj.value);`可以理解为`let name = obj.value.name`，相当于传递了值而非引用，使得解构后的`name`失去了响应式属性，在`<template>`块里的`name`也随之变成了一个固定的值

```Vue
<script setup lang="ts">
// 导入所需模块
import { ref, toRefs } from 'vue';

// typescript 类型说明
interface UserInfo {
    name: string;
    age: number;
    profession: string;
}

// 定义对象
let obj = ref<UserInfo>({ name: "xmtx", age: 20,profession: "student" });
const games = ref([
    { name: "minecraft", price: 100 },
    { name: "moment valley", price: 200 },
    { name: "pubg", price: 300 },
]);

// 解构obj.value;
let { name, age, profession } = toRefs(obj.value);

// 改变年龄
function changeAge() {
    age.value++;
}

</script>

<template>
    <div>
        <h1>xmtx的个人信息 - 对象版</h1>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <p>职业: {{ profession }}</p>
        <p v-for="game in games" :key="game.name">游戏: {{ game.name }} - {{ game.price }}元</p>
        <div>
            <button @click="changeAge">年龄加1</button>
        </div>
    </div>
</template>
```

## reactive()

博主认为直接用 `ref()` 一把梭，关于`reactive()`的知识暂且不提，毕竟`ref()`在处理对象类型的数据时也是调用的`reactive()`
