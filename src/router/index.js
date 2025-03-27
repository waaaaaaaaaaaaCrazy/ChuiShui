import HomeView from "../views/HomeView.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/second',
        name: 'second',
        component: HomeView
    }

];

const router = createRouter({
    // 根据构建工具调整为 import.meta.env.BASE_URL
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;