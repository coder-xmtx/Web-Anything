# 1. 盒子模型组成

| border | content | padding | margin | background |
| ------ | ------- | ------- | ------ | ---------- |
| 边框   | 内容    | 内边距  | 外边距 | 背景       |

---

# 2. 边框（`border`）

## 2.1 普通边框

`border: border-width  border-style  border-color;`

- `border-width`边框粗细，单位为 `px`
- `border-style`边框样式 ，`solid`（实线）/ `dashed`（虚线） /`dotted`（点线）
- `border-color`边框颜色

| `border-top` | `border-bottom` | `border-left` | `border-right` |
| :----------: | :-------------: | :-----------: | :------------: |
|    上边框    |     下边框      |    左边框     |     右边框     |

## 2.2 给边框加圆角

语法：`border-radius: xx px`
具体设置四个角： `border-radius: 左上 右上 右下 左下`

1. 设置圆形盒子：给正方形盒子设置`border-radius: 50%`
2. 设置胶囊矩形：`border-radius: height/2`

---

# 3. 内边距（`padding`）

- `padding:5px;` 上下左右都是 5 像素内边距
- `padding:5px 10px;` 上下 5 像素 左右 10 像素
- `padding:5px 10px 20px;` 上 5 像素 左右 10 像素 下 20 像素
- `padding:5px 10px 20px 30px;` 上 5 像素 右 10 像素 下 20 像素 左 30 像素（顺时针）

> [!Note]
> 默认情况下，内边距会撑大盒子原本的高度和宽度
> 不撑大盒子的做法：`div { box-sizing: border-box; }`

---

# 4. 外边距（`margin`）

样式写法和`padding`一样

> [!note] 让块级元素水平居中
>
> 1. 给盒子设定宽度
> 2. 只需盒子的左右外边距设置为 `auto`（`margin:0 auto;`）

^105706

> [!note] 让行内元素或者行内块元素水平居中
> 给父级元素添加 `text-align:center;`

## Problem：外边距合并

对于两个并列关系的块元素，两个上下外边距会合并为一个外边距，大小为最大的单个外边距

## Problem：外边距塌陷

对于父子关系的块元素，给子盒子设置上下外边距会让父盒子塌陷移动

## Resolve：解决方法

- 方法一： 给父元素添加上边框
- 方法二：给父元素添加上内边距
- 方法三：给父元素添加 `overflow:hidden`

---

# 5. 清除内外边距

网页元素很多都带有默认的内外边距，而且不同浏览器默认的也不一致
因此我们在布局前，首先要清除下网页元素的内外边距

```CSS
* {
	padding: 0;
	margin: 0;
}
```

---

# 6. 盒子背景（`background`）

`background: color image repeat attachment position/size `

## 1. 背景颜色

`background-color: #000000 / rgb(0,0,0) / rgba(0,0,0,0.5)`

## 2. 背景图片

`background-image: url();` 如果盒子尺寸比图片大，图片默认会进行平铺

## 3. 背景平铺

`background-repeat: repeat / no-repeat / repeat-x / repeat-y;`

> 页面元素既可以添加背景颜色也可以添加背景图片，背景图片位于背景颜色上层

## 4. 背景图片位置

`background-position: x y;`

> 如果写的是两个方位名词，词的顺序没有关系
> 如果只指定一个方位名词/一个 x 坐标数值，另一个默认居中对齐
> 混合单位：一个精确单位，一个方位名词

```CSS
div {
	width: 300px;
	height: 300px;
	background-image:url(image/logo.png);
	background-repeat: no-repeat;
	/*让盒子的背景图片 居中靠上对齐*/
	background-position: center top;
}
```

## 5. 背景图片尺寸

`auto`（默认）/`cover`（覆盖）/`contain`（包含）/ `..px` / `..%`

## 6. 背景图像固定

`background-attachment: scroll | fixed;` （默认 scroll）
设置背景图像是否固定或者随着页面其余部分滚动
注意：若设置`fixed`，是以当前视口来调整位置，并非根据盒子位置

---

# 7. 盒子阴影（`box-shadow`）

`box-shadow: h-shadow v-shadow blur spread color inset;`

| 值         | 描述                             |
| ---------- | -------------------------------- |
| `h-shadow` | 阴影水平位置 （必需）            |
| `v-shadow` | 阴影垂直位置 （必需）            |
| `blur`     | 模糊程度                         |
| `spread`   | 阴影尺寸                         |
| `color`    | 阴影颜色                         |
| `inset`    | 将外部阴影（outset）改为内部阴影 |

> [!example] 鼠标放在盒子上出现阴影
>
> ```CSS
> div:hover {
> 	box-shadow: 10px 10px 10px -4px rgba(0,0,0,0.3);
> }
> ```
