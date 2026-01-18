# 1. 代码风格

建议用展开格式来写，更加直观

```CSS
h3 {
	color: red;
	font-size: 20px;
}
```

# 2. CSS 引入方式

## 2.1 内部样式表

一般放在 `<head> </head>` 头里面

```HTML
<head>
	<style>
		.....
	</style>
</head>
```

## 2.2 行内样式表

直接在标签里面写 `style` 属性

```HTML
<p style="color: red;">...</p>
```

## 2.3 外部样式表

样式单独写到 CSS 文件里，用 `<link>` 标签引入 CSS 文件

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="example.css" />
</head>
<body>
    <p class="exam1">hhh</p>
</body>
</html>
```

```CSS
.exam1 {
    color: green;
}
```

# 3. Emmet 语法

- `tac` --> `text-align: center;`
- `ti2em` --> `text-indent: 2em`
- `w100px` --> `width: 100px`
- `tdnone` --> `text-decoration: none`

# 4. 块级元素和行内元素

## 4.1 块级元素

常见块元素： `<h1>` ... `<h6>`、 `<p>`、`<div>`、 `<ul>`、`<ol>`、 `<li>`等

- 特点：
  1.  独占一行
  2.  高度、宽度、外边距、内边距可以控制
  3.  宽度默认是容器的 100%
  4.  是一个容器及盒子，里面可以放行内或者块级元素

> [!warning] > `<p>`标签主要用于存放文字，里面不能放块级元素，`<h1>` ... `<h6>`同理

## 4.2 行内元素

常见行内元素：`<a>`、`<strong>`、`<span>`等

- 特点：
  1.  相邻行内元素在一行上，一行可以显示多个
  2.  直接设置宽高是无效的
  3.  默认宽度就是它本身的内容宽度
  4.  行内元素只能容纳文本或者其他行内元素
  5.  行内元素的左右外边距生效，上下外边距无效

> [!notice]
> 特殊情况 `<a>` 里面可以放块级元素，将 `<a>` 转换成块级模式

## 4.3 行内块元素

特殊的标签：`<img />`、`<input />`、`<td>`等

- 特点：
  1.  和相邻行内元素在一行上，但是他们之间会有空白缝隙
  2.  一行可以显示多个（行内元素特点）
  3.  默认宽度就是它本身内容的宽度（行内元素特点）
  4.  高度，行高、外边距以及内边距都可以控制（块级元素特点）

## 4.4 元素显示模式转换

1. 转换为块级元素： `display:block;` ^363227
2. 转换为行内元素： `display:inline;`
3. 转换为行内块： `display:inline-block;`

### 经验

`<a>`标签是行内元素，不能直接设置宽和高，但是在实际开发中我们需要增加 `<a>`标签的可触控范围，故将其转换为块级元素

```CSS
a {
	width:100px;
	height:100px;
	display:block;
}
```
