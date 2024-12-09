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
    {
        path: '/basic/sql-update', name: 'sql-update', meta: {
            title: 'Оператор SQL UPDATE: примеры, синтаксис',
            h1: 'Оператор SQL UPDATE',
            text: 'SQL UPDATE',
        }, component: () => import('./pages/SqlUpdate.vue')
    },
    {
        path: '/basic/sql-delete', name: 'sql-delete', meta: {
            title: 'Оператор SQL DELETE: синтаксис, примеры',
            h1: 'Оператор SQL DELETE',
            text: 'SQL DELETE',
        }, component: () => import('./pages/SqlDelete.vue')
    },
    {
        path: '/basic/sql-where', name: 'sql-where', meta: {
            title: 'Оператор SQL WHERE: примеры, синтаксис',
            h1: 'Оператор SQL WHERE',
            text: 'SQL WHERE',
        }, component: () => import('./pages/SqlWhere.vue')
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