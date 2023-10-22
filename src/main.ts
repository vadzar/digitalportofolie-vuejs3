import { createApp } from 'vue'
import { vuetify } from "./plugins/vuetify"
import router from "./router"
import App from './App.vue'
import { createPinia } from 'pinia'

import 'vuetify/dist/vuetify.min.css';
import 'vuetify/styles'

const app = createApp(App)


app.use(createPinia()).use(vuetify).use(router).mount('#app')
