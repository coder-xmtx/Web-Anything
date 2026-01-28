# setup

## 为什么要使用 Vue3

在传统 JavaScript 的写法中，我们想对元素进行操作必须进行 DOM 操作，建立 HTML 和 JavaScript 之间的联系，但是长期下来代码量会变得很大，而且也会导致代码管理混乱，所以 Vue3 等 JavaScript 框架的出现就很好的解决了传统 JavaScript 的痛点。

## setup 的好处

直接在`setup()`函数里面定义变量和对象，然后将值返回，在`<template>`块里用 `{{ }}` 来调用

> 注意：`setup()`中的`this`是`undefined`，所以说在 Vue3 弱化了`this` 的概念

```Vue
<script lang="ts">
export default {
    setup() {
        let name = "xmtx";
        let age = 20;
        let profession = "student";

        return {
            name,
            age,
            profession,
        };
    }
}
</script>

<template>
    <div>
        <h1>xmtx的个人信息</h1>
        <p>姓名: {{ name }}</p>
        <p>年龄: {{ age }}</p>
        <p>职业: {{ profession }}</p>
    </div>
</template>
```

## setup 语法糖

我们注意到，上述写法还是过于麻烦了，有很多时候自己都忘记`return`，所以我们使用`setup`的语法糖来进行简化操作 <br />
只需要在`<script>`块里加一个`setup`，就能简化成以下写法，该语法糖默认对外暴露变量和对象，在`<template>`块中可直接利用插值语法进行调用

```Vue
<script setup lang="ts">
let name = "xmtx";
let age = 20;
let profession = "student";
</script>
```
