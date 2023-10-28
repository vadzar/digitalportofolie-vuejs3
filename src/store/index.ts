import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { vuetify } from '../plugins/vuetify';

export const dpStore = defineStore("dpStore1", () => {
    // state
    const themeDark = ref(false);
    const authToken = ref(localStorage.getItem('authToken') || null);
    const userData = ref({});

    //getters
    const isLoggedIn = computed(() => authToken.value != null);
    const getAuthToken = computed(() => authToken.value )
    const getUserData = computed(() => userData.value )

    // actions
    const setAuthToken = (token) => {
        authToken.value = token;
        localStorage.setItem('authToken', token);
    }
    const clearAuthToken = () => {
        authToken.value = null;
        localStorage.removeItem('authToken');
    }
    const setUserData = (data) => {
        userData.value = data;
    }
    const toggleTheme = () => {
        themeDark.value = !themeDark.value;
        vuetify.theme.global.name.value = themeDark.value ? "dark" : "light";
    }
    
    return { 
        themeDark,
        getAuthToken,
        setAuthToken,
        clearAuthToken,
        setUserData,
        getUserData,
        isLoggedIn,
        toggleTheme
    }
})