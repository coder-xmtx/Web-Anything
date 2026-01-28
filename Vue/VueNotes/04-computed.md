# computed 计算属性

可以在`setup`语法糖里使用计算属性，使得`<template>`模板的输出更加简单 <br />
`computed()`函数里面接收一个函数

```Vue
<script setup lang="ts">
import { computed, ref } from 'vue';
let firstName = ref("张");
let lastName = ref("三");
let name = computed(() => firstName.value + " " + lastName.value);
</script>

<template>
    <div >
        <div>
            请输入姓：<input type="text" placeholder="姓" v-model="firstName">
        </div>
        <div>
            请输入名：<input type="text" placeholder="名" v-model="lastName">
        </div>
        <div>
            显示全名：{{ name }}
        </div>
    </div>
</template>
```

`computed()`计算属性的结果是有缓存的，举个例子：<br />
如下列代码所示，我们在`computed()`函数中输出一个 1，在模板中调用了 3 次，但是这时候的控制台只输出了一个 1 而不是 3 个 1，这就表明了计算属性的结果是有缓存的。<br />
相反，如果将该计算属性换成函数方法的形式，那么控制台就会输出 3 个 1 了。

```Vue
<script setup lang="ts">
import { computed, ref } from 'vue';
let firstName = ref("张");
let lastName = ref("三");
let name = computed(() => {
    console.log(1);
    return firstName.value + " " + lastName.value
});
</script>

<template>
    <div>
        <div>
            请输入姓：<input type="text" placeholder="姓" v-model="firstName">
        </div>
        <div>
            请输入名：<input type="text" placeholder="名" v-model="lastName">
        </div>
        <div>
            显示全名：{{ name }}
        </div>
        <div>
            显示全名：{{ name }}
        </div>
        <div>
            显示全名：{{ name }}
        </div>
    </div>
</template>
```

`computed()`的计算结果是可读不可写的，这也很好理解，毕竟是计算出来的。<br />
不知道后面会不会遇到要修改计算属性的案例，如果遇到了，可以使用`get()`和`set()`<br />
相关视频：[尚硅谷](https://www.bilibili.com/video/BV1Za4y1r7KE?spm_id_from=333.788.player.switch&vd_source=21f360114493f624d2e07f7b8b3617fe&p=16)
