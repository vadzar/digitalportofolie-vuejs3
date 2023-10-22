import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { vuetify } from '../plugins/vuetify';

export const dpStore = defineStore("dpStore1", () => {
    // state\
    const test = ref("test");
    const themeDark = ref(false);
    const isLoggedIn = ref(true);
    const loggedInEmail = ref();
    const authToken = ref();
    //getters
    const testLength = computed(() => test.value.length )
    // actions
    function setTest(val:string) {
        test.value = val;
    }
    function toggleTheme() {
        themeDark.value = !themeDark.value;
        vuetify.theme.global.name.value = themeDark.value ? "dark" : "light";
    }
    
    return { 
        test, 
        themeDark,
        authToken,
        isLoggedIn,
        loggedInEmail,
        testLength, 
        setTest,
        toggleTheme
    }
})