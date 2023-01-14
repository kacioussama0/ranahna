import {createWebHistory,createRouter} from "vue-router";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
const routes = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/contact', component: Contact },
        { path: '/about', component: About },
        { path: '/services', component: Services },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
    ]

});

export default routes;