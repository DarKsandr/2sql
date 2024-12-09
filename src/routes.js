export const basic = [
    {
        path: '/basic/sql-select', name: 'sql-select', meta: {
            title: 'Оператор SQL SELECT: примеры, синтаксис',
            h1: 'Оператор SQL SELECT',
            text: 'SQL SELECT',
        }, component: () => import('./pages/SqlSelect.vue')
    },
    {
        path: '/basic/sql-insert', name: 'sql-insert', meta: {
            title: 'Оператор SQL INSERT',
            h1: 'Оператор SQL INSERT',
            text: 'SQL INSERT',
        }, component: () => import('./pages/SqlInsert.vue')
    },
];

export const advanced = [];
export const functions = [];

export const routes = [
    { path: '/', name: 'home', component: () => import('./pages/Main.vue') },
    ...basic,
    ...advanced,
    ...functions,
]