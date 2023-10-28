<template>
    <admin-layout>
        <template v-slot:body>
            <v-container fluid class="article-container accent pt-10">
                <v-form @submit.prevent="save">
                    <v-row align="top" justify="start">
                        <v-card class="elevation-2 mx-auto align-center pa-3 secondary" min-width="90%" max-width="90%">
                            <v-card-title class="text-center text-h5 my-5">
                                <h2>{{ editArticle ? "Edit Article" : "New Article" }}</h2>
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
                                <div class="text-h5 text-medium-emphasis">Type</div>
                                <v-select
                                    v-model="type"
                                    placeholder="Article Type"
                                    :items="['PROJECT','BLOG']"
                                    variant="outlined"
                                    class="mt-5 mb-5"
                                ></v-select>
                                <QuillEditor 
                                    v-model:content="editorContent"
                                    contentType="html"
                                    theme="snow"
                                    toolbar="full"
                                />
                                <v-col class="text-right pr-0">
                                    <router-link 
                                        to="/articles"
                                        style="text-decoration: none; color: inherit;"
                                    >
                                        <v-btn 
                                            class="my-3 primary mr-5" 
                                            size="large"
                                            elevation="2"
                                            min-width="92"
                                            rounded="2"
                                            variant="flat"
                                        >
                                            Back
                                        </v-btn>
                                    </router-link>
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
import { useRoute, useRouter } from 'vue-router';
import adminLayout from '@/views/layout/AdminLayout.vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { createArticle, fetchArticle, updateArticle } from '../../../connector/articleConnector';

const route = useRouter();
const editorContent = ref(null);
const title = ref("");
const type = ref("");
const articleId = ref(null);
const editArticle = ref(false);

onMounted(async() => {
    if(route.currentRoute.value.params.id != null) {
        articleId.value = route.currentRoute.value.params.id;
        editArticle.value = true;
        let article = await fetchArticle(articleId.value);
        if(article) {
            editorContent.value = article.content;
            title.value = article.title;
            type.value = article.type;
        }
    }
})

const save = async () => {
    let data = {
        title: title.value,
        content: editorContent.value,
        type: type.value
    };
    let response = null;
    if(editArticle.value) {
        data.id = articleId.value;
        response = await updateArticle(data);
    } else {
        response = await createArticle(data);
    }

    if(response) {
        route.push({ name: 'ArticleListPage' })
    }
}
</script>

<style>
.ql-editor {
    min-height: 500px;
}
</style>