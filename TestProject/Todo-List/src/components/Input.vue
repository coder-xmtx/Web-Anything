<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue', 'addTodo']);

const todo = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  todo.value = newValue;
});

const addTodo = () => {
    if (todo.value.trim()) {
        emit('addTodo', todo.value.trim());
        emit('update:modelValue', '');
    }
}

const handleKeyup = (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
}
</script>

<template>
    <input
        type="text"
        placeholder="Add your todo"
        class="input w-full rounded-box"
        :value="todo"
        @input="emit('update:modelValue', $event.target.value)"
        @keyup="handleKeyup"
    />
</template>