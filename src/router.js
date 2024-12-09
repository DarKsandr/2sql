import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./pages/Main.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})