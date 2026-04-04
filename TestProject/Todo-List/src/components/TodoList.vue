<script setup>
const props = defineProps({
    todoList: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(['delete', 'toggle']);

const handleDelete = (index) => {
    emit('delete', index);
};

const handleToggle = (index) => {
    emit('toggle', index);
};
</script>

<template>
    <ul class="w-full">
        <li v-for="(todo, index) in todoList" :key="index" class="list bg-base-100 rounded-box shadow-md w-full mb-2">
            <div class="list-row flex items-center p-4">
                <div>
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary"
                        @change="handleToggle(index)"
                    />
                </div>
                <div class="flex-1 font-bold ml-4">{{ todo }}</div>
                <button class="btn btn-square btn-ghost" @click="handleDelete(index)">
                    <svg class="size-[1.5em] fill-primary" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"
                            p-id="1692"></path>
                        <path
                            d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"
                            p-id="1693"></path>
                    </svg>
                </button>
            </div>
        </li>
    </ul>
</template>