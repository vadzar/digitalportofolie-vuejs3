<template>
    <QuillEditor theme="snow" toolbar="full">
        <button @click="showContent()">show</button>
    </QuillEditor>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, onMounted } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const content = ref({});
const showContent = () => {
    console.log(content.value);
}
</script>

<style>
.ql-editor {
    min-height: 500px;
}
</style>