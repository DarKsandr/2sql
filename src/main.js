import { createApp } from 'vue'
import App from './App.vue'
import './css/main.css';
import router from './router.js';
import TableScroll from './components/TableScroll.vue';

createApp(App)
.use(router)
.component('TableScroll', TableScroll)
.mount('#app');
