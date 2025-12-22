# 1. 什么是 HTML

HTML（HyperText Markup Language） 超文本标记语言

# 2. 骨架代码

在 VScode 中，按下英文模式下的`!`就会跳出`emmet`语法缩写，直接生成符合 HTML5 标准的骨架代码

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>
```

# 3. `<head>`头代码说明

## 3.1 `<!DOCTYPE>` 文档类型声明

**文档类型声明**标签，告诉浏览器使用 HTML5 来显示网页，必须写在首行

## 3.2 `lang` 语言种类

`lang="en"` 表示这是个英文网页，但是也可以写中文内容
`lang="zh-CN"` 表示这是个中文网页，但是也可以写英文内容

> 这个标签大概起到供浏览器识别的作用，若是外语网页可能会跳出翻译服务

## 3.3 `charset` 字符集

指定字符编码 `UTF-8`（也叫万国码），必须要写，以防乱码

## 3.4 该行为移动端适配准备，这里暂不深入

```HTML
<meta name="viewport" ...>
```

## 3.5 网页标签页小图标

设置`favicon.ico`，在`<head>`标签里面使用以下代码：

```HTML
<link rel="shortcut icon" href="favicon.ico">
```

## 3.6 `title` 网页标题

写网站的标题

---

# 4. Emmet 语法

- **生成标签：** 直接输入标签名，再按 `Tab`键
  > 比如 `div`，然后 `Tab`键，就可以生成 `<div></div>`
- **生成多个相同标签：**`标点名*数字`
  > 比如 `div*3`，生成三个 `<div></div>`
- **父子级关系的标签：** 可以用 `>`
  > 比如 `ul>li`
- **兄弟关系的标签：** 用 `+`
  > 比如 `div+p`
- **生成带有类名或者 id 名字的：** 直接写 `.类名` 或者 `#id名`（默认生成 `div` 标签）
  > 比如 `.demo` --> `<div class="demo"></div>`
  > 比如 `p.demo` --> `<p class="demo"></p>`
- **想要在生成的标签内部写内容：** 用 `{}`
  > 比如 `div{你好}` --> `<div>你好</div>`

---

# 5. 相对路径

如果目标文件位于该 HTML 文件的上一级，则用 `../`

```HTML
<img src="../图像名字" />
<a href="../目标文件">...</a>
```

---

# 6. 特殊字符实体

| 特殊字符 | 描述     | 字符代码 |
| -------- | -------- | -------- |
|          | 空格符   | `&nbsp;` |
| <        | 小于号   | `&lt;`   |
| >        | 大于号   | `&gt;`   |
| &        | 和号     | `&amp;`  |
| ￥       | 人民币   | `&yen;`  |
| ©        | 版权     | `&copy;` |
| ®        | 注册商标 | `&reg;`  |
