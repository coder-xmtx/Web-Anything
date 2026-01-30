<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([]);

// 将任务添加到任务列表
const addTask = () => {
  // 获取输入框中的任务,并去除前后空格
  const text = newTask.value.trim();

  // 如果任务为空,不做任何操作
  if (!text) {
    return;
  }

  // 将任务添加到任务列表
  tasks.value.push({
    id: Date.now(),
    text,
    completed: false,
    favorite: false,
  });

  // 清空输入框
  newTask.value = "";
};

// 删除任务
const removeTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

// 编辑任务
const editingId = ref(null);
const editingBuffer = ref("");

// 开始编辑任务
const startEdit = (task) => {
  editingId.value = task.id;
  editingBuffer.value = task.text;
};

// 取消编辑
const cancelEdit = () => {
  editingId.value = null;
  editingBuffer.value = "";
};

// 完成编辑
const finishEdit = (task) => {
  if (editingId.value !== task.id) {
    return
  }

  const trimmedText = editingBuffer.value.trim();

  if (!trimmedText) {
    removeTask(task.id);
  } else {
    task.text = trimmedText;
  }

  editingId.value = null;
  editingBuffer.value = "";

};

const toggleFav = (task) => {
  task.favorite = !task.favorite;
}
</script>

<template>
  <div class="container">
    <div class="wrapper">

      <h1>TODO APP</h1>

      <div class="input-row">
        <input type="text" placeholder="Add your task here..." v-model="newTask" />
        <button @click="addTask">Add</button>
      </div>

      <ul class="task-list">
        <li v-for="task in tasks" :key="task.id" :class="{ done: task.completed, editing: task.id === editingId }">
          <template v-if="editingId === task.id">
            <input type="text" v-model="editingBuffer" class="edit-input" @keyup.enter="finishEdit(task)"
              :ref="(el) => el && el.focus()" @keydown.esc="cancelEdit(task)" @blur="finishEdit(task)" />
          </template>
          <template v-else>
            <input type="checkbox" v-model="task.completed">
            <span @click="startEdit(task)">{{ task.text }}</span>
            <div class="lever">
              <div class="delete" @click="removeTask(task.id)">
                <svg t="1769681966632" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  p-id="4852" width="20" height="20">
                  <path
                    d="M781.28 851.36a58.56 58.56 0 0 1-58.56 58.56H301.28a58.72 58.72 0 0 1-58.56-58.56V230.4h538.56z m-421.6-725.92a11.84 11.84 0 0 1 12-12h281.28a11.84 11.84 0 0 1 12 12V160H359.68zM956.8 160H734.72v-34.56a81.76 81.76 0 0 0-81.76-81.76H371.68a82.08 82.08 0 0 0-81.76 81.76V160H67.2a35.36 35.36 0 0 0 0 70.56h105.12v620.8a128.96 128.96 0 0 0 128.96 128.96h421.44a128.96 128.96 0 0 0 128.96-128.96V230.4H956.8a35.2 35.2 0 0 0 35.2-35.2 34.56 34.56 0 0 0-35.2-35.2zM512 804.16a35.2 35.2 0 0 0 35.2-35.36V393.92a35.2 35.2 0 1 0-70.4 0V768.8a35.2 35.2 0 0 0 35.2 35.36m-164.32 0a35.36 35.36 0 0 0 35.36-35.36V393.92a35.36 35.36 0 1 0-70.56 0V768.8a36.32 36.32 0 0 0 35.2 35.36m328.64 0a35.36 35.36 0 0 0 35.2-35.36V393.92a35.36 35.36 0 1 0-70.56 0V768.8a35.36 35.36 0 0 0 35.36 35.36"
                    fill="#D81E06" p-id="4853"></path>
                </svg>
              </div>
              <button class="fav" @click="toggleFav(task)">{{ task.favorite ? "已收藏" : "未收藏" }}</button>
            </div>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f2f2f2;
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

li {
  list-style: none;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 32rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border: 0.05rem solid rgba(20, 66, 214, 0.1);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #001d93, #0072ff);
  background-clip: text;
  color: transparent;
}

.input-row {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
}

.input-row input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 1rem;
  outline: none;
}

.input-row button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.input-row button:hover {
  background-color: #0069d9;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: all 0.3s;
}

.task-list li:hover {
  background-color: #dceaff3f;
}

.task-list li.done span {
  text-decoration: line-through;
  color: #ccc;
}

.task-list li span {
  font-size: 1rem;
}

.task-list li .delete {
  cursor: pointer;
  transition: all 0.3s;
  border: transparent 1px solid;
  border-radius: 2rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
}

.task-list li .delete:hover {
  border: #bb0000 1px solid;
}

.task-list li .delete svg {
  width: 100%;
  height: 100%;
}

.task-list .edit-input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 1rem;
  outline: none;
}

.task-list .lever {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}

.task-list .lever .fav {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #ffae00;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s;
  font-weight: bold;
  font-family: 'HarmonyOS Sans SC', sans-serif;
}
</style>
