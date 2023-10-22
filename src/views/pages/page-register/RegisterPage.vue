<template>
    <v-app>
        <v-main>
            <v-container fluid fill-height class="register-container accent">
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="6">
                        <h1 class="text-center mb-12 uppercase-text">Digital Portofolio</h1>    
                        <v-card class="elevation-12 mx-auto align-center pa-8 secondary" max-width="500">
                            <v-card-title class="text-center text-h5 my-5">
                                <h2>Sign Up</h2>
                            </v-card-title>
                            <v-card-text>
                                <v-form @submit.prevent="signUp">
                                    <v-text-field
                                        v-model="user.email"
                                        label="Email"
                                        type="email"
                                        required
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="user.firstName"
                                        label="First Name"
                                        required
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="user.lastName"
                                        label="Last Name"
                                        required
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="user.password"
                                        label="Password"
                                        type="password"
                                        required
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="user.confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        required
                                    ></v-text-field>

                                    <v-btn 
                                        class="my-3 primary" 
                                        type="submit" 
                                        size="large"
                                        elevation="4"
                                        block
                                    >
                                        Sign Up
                                    </v-btn>
                                    <router-link 
                                        to="/login"
                                        style="text-decoration: none; color: inherit;"
                                    >
                                        <v-btn 
                                            class="my-3 secondary" 
                                            size="large"
                                            elevation="4"
                                            block
                                        >
                                            Login
                                        </v-btn>
                                    </router-link>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <Footer />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Footer from '@/views/Footer.vue';


const user = ref({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
})

const signUp = () => {
    // Add your sign-up logic here
    // You can use user.value.username, user.value.email, user.value.password, etc.
    // After successful sign-up, navigate to a different page
    router.push('/dashboard'); // Change to your desired route
};

</script>

<style scoped>
.register-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.max-width-600 {
  max-width: 600px;
}

.uppercase-text {
  text-transform: uppercase;
}

.card {
  background-color: #f5f5f5;
  border-radius: 10px;
}

.text-h5 {
  font-size: 24px;
  font-weight: bold;
}
/* You can customize further using Vuetify's classes or your own CSS */
</style>