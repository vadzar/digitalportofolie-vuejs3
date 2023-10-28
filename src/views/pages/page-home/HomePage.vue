<template>
    <admin-layout>
        <template v-slot:body>
            <v-container class="accent">
                <h1>Hi {{ user.firstName }} {{ user.lastName }}, THIS IS HOME PAGE</h1>
                <h2>email: {{ user.email }}</h2>
                <h2>role: {{ user.role }}</h2>
            </v-container>
        </template>
    </admin-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { dpStore } from '../../../store';
import adminLayout from '@/views/layout/AdminLayout.vue'


const store = dpStore();
const user = store.getUserData;
</script>