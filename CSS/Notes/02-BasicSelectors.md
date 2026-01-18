# 1. 标签选择器

将某个标签设置为统一的样式

```CSS
p {
	color: red;
}
```

---

# 2. 类选择器（最常用）

在 CSS 里用 `.name`， 在 HTML 标签里用 `class="name"`

## 2.1 单类名

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	...
    <style>
        .red {
            width: 100px;
            height: 100px;
            background-color: red;
        }
        .green {
            width: 100px;
            height: 100px;
            background-color: green;
        }
    </style>
</head>
<body>
    <div class="red"></div>
    <div class="green"></div>
</body>
</html>
```

## 2.2 多类名

在标签的 `class` 属性里用空格隔开多个类，添加多种样式

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	...
    <style>
	    .box {
		    width: 100px;
		    height: 100px;
	    }
        .red {
            background-color: red;
        }
        .green {
            background-color: green;
        }
    </style>
</head>
<body>
    <div class="box red"></div>
    <div class="box green"></div>
    <div class="box red"></div>
</body>
</html>
```

---

# 3. id 选择器（和 JS 配合）

在 CSS 里用 `#name`， 在 HTML 标签里用 `id="name"`

> [!important]
> 一个 id 选择器只能调用 1 次

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<!-- 省略文档头... -->
    <style>
	    #red {
		  color: red;
	    }
    </style>
</head>
<body>
    <div id="red">That's OK.</div>
</body>
</html>
```

---

# 4. 通配符选择器

用 `*` 定义通配符选择器，表示选取所有标签，对全局生效，不需要在标签里调用

```CSS
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
```
