<template>
    <admin-layout>
        <template v-slot:body>
            <v-container fluid class="article-container accent pt-10">
                <v-form @submit.prevent="save">
                    <v-row align="top" justify="start">
                        <v-card class="elevation-2 mx-auto align-center pa-3 secondary" min-width="90%" max-width="90%">
                            <v-card-title class="text-center text-h5 my-5">
                                <h2>New Article</h2>
                            </v-card-title>
                            <v-card-text style="padding: 0px;">
                                <div class="text-h4 text-medium-emphasis">Title</div>
                                <v-text-field 
                                    v-model="title"
                                    density="compact"
                                    placeholder="Article Title"
                                    variant="underlined"
                                    required
                                ></v-text-field>
                                <QuillEditor 
                                    v-model:content="editorContent"
                                    contentType="html"
                                    theme="snow"
                                    toolbar="full"
                                />
                                <p>Content in Parent: {{ editorContent }}</p>
                                <v-col class="text-right pr-0">
                                    <v-btn 
                                        type="submit" 
                                        class="my-3 primary" 
                                        size="large"
                                        elevation="2"
                                        min-width="92"
                                        rounded="2"
                                        variant="flat"
                                    >
                                        Save
                                    </v-btn>
                                </v-col>
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-form>
            </v-container>
        </template>
    </admin-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { dpStore } from '../../../store';
import adminLayout from '@/views/layout/AdminLayout.vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const editorContent = ref(null);
const title = ref("");

const save = () => {
    console.log(editorContent.value);
}
</script>

<style>
.ql-editor {
    min-height: 500px;
}
</style>