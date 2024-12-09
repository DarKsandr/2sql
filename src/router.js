import { createWebHashHistory, createRouter } from 'vue-router';
import SyntaxHighlighterInit from './SyntaxHighlighter.js';
import { nextTick } from 'vue';
import { BASE_NAME, BASE_URL } from './config.js';

const routes = [
    { path: '/', name: 'home', component: () => import('./pages/Main.vue') },
    { path: '/basic/sql-select', name: 'sql-select', meta: {title: 'Оператор SQL SELECT: примеры, синтаксис', h1: 'Оператор SQL SELECT'}, component: () => import('./pages/SqlSelect.vue') },
]

const router = createRouter({
    history: createWebHashHistory(BASE_URL),
    routes,
});

const DEFAULT_TITLE = `${BASE_NAME} - Информационный ресурс о языке SQL`;
router.afterEach(async (to, from) => {
    await nextTick();
    document.title = to.meta.title || DEFAULT_TITLE;
    SyntaxHighlighterInit();
});

export default router;