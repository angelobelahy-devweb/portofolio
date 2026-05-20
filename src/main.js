import { createApp } from 'vue'
import './style.css'
import './assets/css/all.min.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';
import { router } from './routes/router';
import { createPinia } from 'pinia';


const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'none'
        }
    }
}).use(ToastService).mount('#app')
