<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar 
            class="primary"
            prominent
        >
            <v-app-bar-nav-icon class="primary" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Digital Portofolio</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="mr-2" variant="text" icon="mdi-weather-night" @click.stop="store.toggleTheme"></v-btn>
            <v-btn variant="text" prepend-icon="mdi-logout" @click.stop="logout">logout</v-btn>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            location="left"
            temporary
            :width="200"
        >
            <v-divider></v-divider>
            <Sidebar/>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn 
                        class="my-3 primary" 
                        block
                        @click.stop="logout"
                    >
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
            <slot name="body"></slot>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { dpStore } from '../../store'
import Sidebar from './components/Sidebar.vue'

const store = dpStore();
const router = useRouter();

const drawer = ref(false);
const rail = ref(false);

const logout = () => {
    store.clearAuthToken();
    router.push({ path: "/login" })
}
</script>