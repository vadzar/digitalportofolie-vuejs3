
<template>
	<v-app>
		<v-main>
			<v-container fluid fill-height class="login-container accent">
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="6">
						<h1 class="text-center mb-12 uppercase-text">Digital Portofolio</h1>
						<v-card class="elevation-12 mx-auto align-center pa-8 secondary" max-width="500">
							<v-card-title class="text-center text-h5 my-5">
								<h2>Login</h2>
							</v-card-title>
							<v-card-text class="">
								<v-form @submit.prevent="login">
									<v-text-field v-model="email" label="Email" type="email" required></v-text-field>
									<v-text-field v-model="password" label="Password" type="password" required></v-text-field>
									<v-btn 
										type="submit" 
										class="my-3 primary" 
										size="large"
										elevation="4"
										block
									>
										Login
									</v-btn>
									<router-link to="/register">
											<span>don't have an account? signup here</span>
									</router-link>
								</v-form>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
			<Footer/>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { dpStore } from '../../../store'
import { useRoute, useRouter } from 'vue-router';
import { userLogin, fetchUserData } from '../../../connector/userConnector';
import Footer from '@/views/Footer.vue';


const store = dpStore();
const router = useRouter();

const email = ref("");
const password = ref("");

onMounted(() => {
	if(store.isLoggedIn)
		router.push({ name: 'HomePage' });
});

const login = async () => {
		let data = { 
			email: email.value,
			password: password.value
		}

		let response = await userLogin(data);
		if(response) {
			store.setAuthToken(response.token);
		  	store.userData = await fetchUserData(response.token);
		  	if(store.userData != null)
		  		router.push({ name: 'HomePage' });
		} 
}
</script>

<style scoped>
.login-container {
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