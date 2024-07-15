import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import {createPinia} from 'pinia'

import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '/node_modules/flag-icons/css/flag-icons.min.css';
import '@assets/styles/style.scss'
import 'quasar/src/css/index.sass'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

const routes = [
  { path: '/', component: App },
  // Altre rotte...
];
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});
  
app.use(pinia)
app.use(Quasar, {plugins: {}})
app.use(router)
app.mount('#app')
