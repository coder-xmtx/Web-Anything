# 1. 字体属性

## 1.1 字体系列

`font-family` 定义字体系列

```CSS
body {
    font-family: 'Times New Roman', Times, serif;
}
```

## 1.2 字体大小

`font-size` 定义字体大小

```CSS
p {
	font-size: 18px;
}
```

## 1.3 字体粗细

`font-weight` 定义字体粗细，默认值 `normal`（`400`），`bold`(`700`)

```CSS
p {
	font-weight: 700;
}
```

## 1.4 文字样式

`font-style` 定义文字风格，经常给斜体标签改为不倾斜字体

```CSS
em {
	font-style: normal;
}
```

## 1.5 字体复合属性

`font: font-style font-weight/line-height font-size font-family`

> 必须保留 `font-size` 和 `font-family`，其余可不设置

```CSS
.exam {
	font: italic 700 16px 'Microsoft YaHei'
}
```

---

# 2. 文本属性

## 2.1 文本颜色 `color`

多用十六进制或者 RGB 值

## 2.2 对齐文本 `text-align`

属性值：`center` / `left` / `right`/`justify`（两端对齐）

## 2.3 装饰文本 `text-decoration`

- ❗`none` 默认（用来去除 `<a>`标签默认的下划线）
- `underline` 下划线（常用）
- `line-through` 删除线（不常用）

## 2.4 文本缩进 `text-indent`

设置段落首行缩进，值可以设为`xx em`

> `em` 相对单位，当前元素一个文字的大小，`2em`即为两个文字的距离

## 2.5 字间距 `letter-spacing`

调整字间距，值为 `xx px`

## 2.6 行高 `line-height`

设置行高，值可以为`px像素值`或者`纯数字`（表示字体大小的倍数）

> [!important]
> 让文字在盒子垂直居中，可以让`height`和`line-height`的值相等

<img src="image/行间距.png"  width=50% />

## 2.7 文字阴影

`text-shadow:h-shadow v-shadow blur color;`

---

# 3. 无序列表

去掉 `li` 前面的项目符号（小圆点）

```CSS
li {
	list-style:none;
}
```

---

# 4. 表单样式

## 4.1 表单轮廓线 `outline`

```CSS
/*去除表单轮廓线*/
input {
	outline: none;
}
```

## 4.2 防止拖动文本域 `resize`

默认的`<textarea>`文本框是可以进行拖拽的

```CSS
/*去除文本域右下角可拖拽样式*/
textarea {
	resize: none;
}
```

---

# 5. 鼠标样式 `cursor`

| 属性值        | 描述 |
| ------------- | ---- |
| `default`     | 指针 |
| `pointer`     | 小手 |
| `move`        | 移动 |
| `text`        | 文本 |
| `not-allowed` | 禁止 |
