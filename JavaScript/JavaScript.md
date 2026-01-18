# 记录一些 JavaScript 里的不易理解的点

`Promise` / `async/await`

## 🧩 专业场景：电商商品详情页加载

### 1️⃣ 先看 Promise 实现（基础版）

```javascript
// 模拟API请求 - 返回Promise
const fetchProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({
          id,
          name: `Product ${id}`,
          price: 100 + id * 10,
          categoryId: 1,
        });
      } else {
        reject(new Error(`Invalid product ID: ${id}`));
      }
    }, 500);
  });
};

const fetchReviews = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve([
          { id: 1, text: "Great product!", rating: 5 },
          { id: 2, text: "Good value for money", rating: 4 },
        ]);
      } else {
        reject(new Error(`Failed to fetch reviews for product ${id}`));
      }
    }, 800);
  });
};

const fetchRelatedProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId > 0) {
        resolve([
          { id: 101, name: "Related Product 1", price: 99 },
          { id: 102, name: "Related Product 2", price: 120 },
        ]);
      } else {
        reject(new Error(`Invalid category ID: ${categoryId}`));
      }
    }, 600);
  });
};

// 用Promise实现商品详情加载
function loadProductDetailsWithPromise(productId) {
  fetchProduct(productId)
    .then((product) => {
      return fetchReviews(product.id).then((reviews) => {
        return fetchRelatedProducts(product.categoryId).then(
          (relatedProducts) => {
            return { product, reviews, relatedProducts };
          }
        );
      });
    })
    .then((data) => {
      // 渲染页面
      console.log("Promise-based rendering:", data);
      renderProductPage(data);
    })
    .catch((error) => {
      console.error("Promise error:", error);
      handlePageError(error);
    });
}
```

### 2️⃣ 再看 async/await 实现（专业版）

```javascript
// 使用async/await实现相同逻辑
async function loadProductDetailsWithAsyncAwait(productId) {
  try {
    // 1. 获取产品详情
    const product = await fetchProduct(productId);

    // 2. 获取产品评论
    const reviews = await fetchReviews(product.id);

    // 3. 获取相关产品
    const relatedProducts = await fetchRelatedProducts(product.categoryId);

    // 渲染页面
    console.log("Async/Await rendering:", {
      product,
      reviews,
      relatedProducts,
    });
    renderProductPage({ product, reviews, relatedProducts });
  } catch (error) {
    console.error("Async/Await error:", error);
    handlePageError(error);
  }
}
```

---

## 🔍 专业关系解析

### ✅ 本质关系：**Promise 是基础，async/await 是语法糖**

| 项目         | Promise                    | async/await               |
| ------------ | -------------------------- | ------------------------- |
| **技术标准** | ES6 (2015)                 | ES2017 (2017)             |
| **本质**     | 异步操作的**基础对象**     | **基于 Promise 的语法糖** |
| **返回值**   | 返回 Promise 对象          | 隐式返回 Promise 对象     |
| **执行方式** | 链式调用 `.then().catch()` | 同步风格代码 `await`      |
| **错误处理** | `.catch()` 统一捕获        | `try/catch` 精确捕获      |

### 💡 关键点：**async/await 的底层实现是 Promise**

```javascript
// 你写的async/await代码：
async function foo() {
  const result = await bar();
  return result;
}

// 实际被转换为：
function foo() {
  return bar().then((result) => result);
}
```

### 🧪 专业场景对比

#### 情况 1：串行依赖请求（必须顺序执行）

**Promise 写法**（回调地狱式）：

```javascript
fetchA()
  .then((dataA) => fetchB(dataA))
  .then((dataB) => fetchC(dataB))
  .then((dataC) => process(dataC))
  .catch((error) => handleError(error));
```

**async/await 写法**（线性逻辑）：

```javascript
try {
  const dataA = await fetchA();
  const dataB = await fetchB(dataA);
  const dataC = await fetchC(dataB);
  process(dataC);
} catch (error) {
  handleError(error);
}
```

#### 情况 2：并行请求（同时获取多个数据）

**Promise 写法**：

```javascript
Promise.all([fetchA(), fetchB(), fetchC()])
  .then(([dataA, dataB, dataC]) => {
    // 处理数据
  })
  .catch((error) => handleError(error));
```

**async/await 写法**：

```javascript
try {
  const [dataA, dataB, dataC] = await Promise.all([
    fetchA(),
    fetchB(),
    fetchC(),
  ]);
  // 处理数据
} catch (error) {
  handleError(error);
}
```

> 💡 **注意**：async/await 本身没有并行能力，它依赖 Promise.all 实现并行

---

## 📊 专业对比表

| 维度           | Promise                | async/await        | 专业建议             |
| -------------- | ---------------------- | ------------------ | -------------------- |
| **代码可读性** | 低（链式调用）         | 高（线性逻辑）     | 优先使用 async/await |
| **错误处理**   | .catch()统一捕获       | try/catch 精确捕获 | async/await 更精准   |
| **调试体验**   | 难（断点难定位）       | 易（像同步代码）   | async/await 更友好   |
| **性能**       | 无差异                 | 无差异             | 无差异               |
| **兼容性**     | ES6+                   | ES2017+            | 旧浏览器用 Promise   |
| **适用场景**   | 并行请求、复杂链式处理 | 顺序依赖、简单流程 | 根据需求选择         |

---

## 💡 专业总结：关系与选择

1. **关系本质**：`async/await = 基于Promise的语法糖`，不是替代关系，而是**更高级的使用方式**

2. **为什么需要 async/await**：

   - 解决 Promise 链式调用的"回调地狱"问题
   - 使异步代码看起来像同步代码，提升可读性
   - 提供更自然的错误处理（try/catch）

3. **专业开发中的最佳实践**：

   - **简单流程**：优先使用 async/await（如商品详情页加载）
   - **并行请求**：使用 Promise.all + async/await（如首页数据预加载）
   - **复杂链式操作**：根据可读性选择（通常 async/await 更优）

4. **重要提示**：在 Node.js 14+和现代浏览器中，**async/await 是处理异步的首选方式**，Promise 只是它的底层实现。

---

## 🌟 一个关键洞察

在专业前端开发中，我经常看到团队在使用 async/await 时犯的错误：**误以为 async/await 可以"阻塞"主线程**。

```javascript
// 错误示范：以为await会阻塞
async function foo() {
  console.log("Start");
  await delay(1000); // 1秒后才继续
  console.log("End"); // 1秒后执行
}
// 实际上，这不会阻塞主线程，只是暂停了当前函数的执行
```

**正确理解**：`await`只是暂停当前 async 函数的执行，**不会阻塞主线程**，其他任务（如用户交互）仍可正常执行。
