<template>
    <admin-layout>
        <template v-slot:body>
            <v-container fluid class="article-container accent pt-10">
                <v-form @submit.prevent="save">
                    <v-row align="top" justify="start">
                        <v-card class="elevation-2 mx-auto align-center pa-3 secondary" min-height="100%" min-width="70%" max-width="70%">
                            <v-card-title class="text-center text-h5 my-5">
                                <h2>My Profile</h2>
                            </v-card-title>
                            <v-card-text style="padding: 0px;">
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            v-model="userProfile.firstName"
                                            label="First Name"
                                            variant="outlined"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            v-model="userProfile.lastName"
                                            label="Last Name"
                                            variant="outlined"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            v-model="userProfile.email"
                                            label="Email"
                                            variant="outlined"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-select
                                            v-model="userProfile.role"
                                            placeholder="Article Type"
                                            :items="['AUTHOR','EDITOR']"
                                            variant="outlined"
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            v-model="newPassword"
                                            :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="showNewPassword ? 'text' : 'password'"
                                            label="New Password"
                                            variant="outlined"
                                            @click:append="showNewPassword = !showNewPassword"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            v-model="confirmPassword"
                                            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="showConfirmPassword ? 'text' : 'password'"
                                            label="Confirm New Passwrod"
                                            variant="outlined"
                                            @click:append="showConfirmPassword = !showConfirmPassword"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <div class="text-h6 text-medium-emphasis">About me</div>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                    >
                                        <QuillEditor 
                                            v-model:content="userProfile.aboutMe"
                                            contentType="html"
                                            theme="snow"
                                            toolbar="minimal"
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col 
                                        class="text-left"
                                        cols="12"
                                        sm="6"
                                    >
                                        <router-link 
                                            to="/home"
                                            style="text-decoration: none; color: inherit;"
                                        >
                                            <v-btn 
                                                class="my-10 primary mr-5" 
                                                size="large"
                                                elevation="2"
                                                min-width="92"
                                                rounded="2"
                                                variant="flat"
                                            >
                                                Back
                                            </v-btn>
                                        </router-link>
                                    </v-col>
                                    <v-col 
                                        class="text-right pr-0"
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-btn
                                            @click.prevent.stop="updateUser()"
                                            class="my-10 primary mr-5" 
                                            size="large"
                                            elevation="2"
                                            min-width="92"
                                            rounded="2"
                                            variant="flat"
                                        >
                                            Save
                                        </v-btn>
                                    </v-col>
                                </v-row>
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
import { UserData, updateUserData } from '../../../connector/userConnector';

const store = dpStore();
const userProfile = ref<UserData>({});
const newPassword = ref('');
const showNewPassword = ref(false);
const confirmPassword = ref('');
const showConfirmPassword = ref(false);

onMounted(() => {
    let currentUser = store.getUserData;
    userProfile.value.id = currentUser.id;
    userProfile.value.firstName = currentUser.firstName;
    userProfile.value.lastName = currentUser.lastName;
    userProfile.value.email = currentUser.email;
    userProfile.value.password = currentUser.password;
    userProfile.value.aboutMe = currentUser.aboutMe;
    userProfile.value.role = currentUser.role;
})

const updateUser = async () => {
    userProfile.value.password = newPassword.value;
    let resp = await updateUserData(userProfile.value, store.getAuthToken);
    if(resp)
        alert("User data successfully updated!")
}
</script>

<style>
.ql-editor {
    min-height: 100px;
}
</style>