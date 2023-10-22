<template>
    <admin-layout>
        <template v-slot:body>
            <v-container class="accent">
                <h1>Hi {{ store.loggedInEmail }}, THIS IS HOME PAGE</h1>
                <h2>authToken: {{ store.authToken }}</h2>
            </v-container>
        </template>
    </admin-layout>
</template>

<script setup lang="ts">
import { dpStore } from '../../../store';
import adminLayout from '@/views/layout/AdminLayout.vue'


const store = dpStore();
</script>