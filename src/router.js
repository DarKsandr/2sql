import { createWebHashHistory, createRouter } from 'vue-router';
import SyntaxHighlighterInit from './SyntaxHighlighter.js';
import { nextTick } from 'vue';
import { BASE_NAME, BASE_URL } from './config.js';
import { routes } from './routes.js'
 
const router = createRouter({
    history: createWebHashHistory(BASE_URL),
    scrollBehavior (to, from, savedPosition) {
        return {
            top: 0,
            behavior: 'smooth',
        };
    },
    routes,
});

const DEFAULT_TITLE = `${BASE_NAME} - Информационный ресурс о языке SQL`;
router.afterEach(async (to, from) => {
    await nextTick();
    document.title = to.meta.title || DEFAULT_TITLE;
    SyntaxHighlighterInit();
});

export default router;