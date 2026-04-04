<script setup>
import Input from '@/components/Input.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import TodoList from '@/components/TodoList.vue';
import { ref } from 'vue';

const todoList = ref([]);
const todoInput = ref('');

const submitTodo = (todo) => {
    if (todo && todo.trim()) {
        todoList.value.push(todo.trim());
    }
}

const handleSubmit = () => {
    if (todoInput.value.trim()) {
        submitTodo(todoInput.value);
        todoInput.value = '';
    }
}

const handleAddTodo = (todo) => {
    submitTodo(todo);
}

const handleDeleteTodo = (index) => {
    todoList.value.splice(index, 1);
}

const handleToggleTodo = (index) => {
    // 暂时留空，后续实现
    console.log('Toggle todo at index:', index);
}

</script>

<template>
    <h1 class="text-center text-3xl font-bold mb-4">Todo List</h1>
    <div class="flex flex-col items-center gap-6 w-3/4">
        <div class="flex justify-between gap-4 w-full transition duration-500">
            <Input v-model="todoInput" @addTodo="handleAddTodo" />
            <SubmitButton @click="handleSubmit" />
        </div>
        <TodoList :todoList="todoList" @delete="handleDeleteTodo" @toggle="handleToggleTodo" />
    </div>
</template>

<style scoped></style>