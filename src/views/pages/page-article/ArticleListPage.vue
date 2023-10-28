<template>
    <admin-layout>
        <template v-slot:body>
            <v-container fluid class="article-container accent pt-10">
                <v-card class="elevation-2 mx-auto align-center pa-3 secondary" min-width="90%" max-width="90%">
                    <v-row align="top" justify="end">
                        <v-col class="text-right pr-10">
                            <router-link 
                                to="/article"
                                style="text-decoration: none; color: inherit;"
                            >
                                <v-btn 
                                    class="my-3 secondary pa-3" 
                                    size="normal"
                                    elevation="1"
                                >
                                    New Article
                                </v-btn>
                            </router-link>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-table
                                fixed-header
                                height="300px"
                            >
                                <thead>
                                    <tr>
                                        <th 
                                            class="text-center"
                                        >
                                            <strong>Title</strong>
                                        </th>
                                        <th 
                                            class="text-center"
                                        >
                                            <strong>Type</strong>
                                        </th>
                                        <th 
                                            class="text-center"
                                        >
                                            <strong>Last edited</strong>
                                        </th>
                                        <th 
                                            class="text-center"
                                        >
                                            <strong>Action</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="article in articleList"
                                        :key="article.id"
                                    >
                                        <td class="text-left">
                                            {{ article.title }}
                                        </td>
                                        <td class="text-center">
                                            {{ article.type }}
                                        </td>
                                        <td class="text-center">
                                            {{ article.lastEdited }}
                                        </td>
                                        <td class="text-center">
                                            <router-link 
                                                :to="`/article/${article.id}`"
                                                style="text-decoration: none; color: inherit;"
                                            >
                                                <v-btn 
                                                    class="my-3 secondary mr-5" 
                                                    size="small"
                                                    elevation="1"
                                                >
                                                    Edit
                                                </v-btn>
                                            </router-link>
                                            <v-btn
                                                :key="article.id"
                                                :id="`delete-${article.id}`"
                                                @click.prevent.stop="deleteArticleById(article.id)"
                                                class="my-3 danger"
                                                size="small"
                                                elevation="1"
                                            >
                                                Delete
                                            </v-btn>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </template>
    </admin-layout>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { dpStore } from '../../../store';
import adminLayout from '@/views/layout/AdminLayout.vue';
import { fetchArticles, deleteArticle } from '../../../connector/articleConnector';

const store = dpStore();
const articleList = ref(null);

onMounted(async () => {
    await getArticles();
});

const getArticles =  async () => {
    articleList.value = await fetchArticles();
}

const deleteArticleById = async (articleId) => {
    let response = await deleteArticle(articleId);
    alert(response);
    await getArticles();
}
</script>