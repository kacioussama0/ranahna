import { createApp } from 'vue';
import App from './App.vue';
import routing from './routing.js';
import './fontawesome/css/all.min.css';
import './fontawesome/js/all.min.js';
import '/public/assets/css/bootstrap.rtl.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const app = createApp(App);
app.use(routing);
app.mount('#app');
