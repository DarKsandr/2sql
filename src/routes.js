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
    {
        path: '/basic/sql-order-by', name: 'sql-order-by', meta: {
            title: 'Оператор SQL ORDER BY: синтаксис, примеры',
            h1: 'Оператор SQL ORDER BY',
            text: 'SQL ORDER BY',
        }, component: () => import('./pages/SqlOrderBy.vue')
    },
    {
        path: '/basic/sql-group-by', name: 'sql-group-by', meta: {
            title: 'Оператор SQL GROUP BY: синтаксис, примеры',
            h1: 'Оператор SQL GROUP BY',
            text: 'SQL GROUP BY',
        }, component: () => import('./pages/SqlGroupBy.vue')
    },
    {
        path: '/basic/sql-having', name: 'sql-having', meta: {
            title: 'Оператор SQL HAVING: примеры, синтаксис',
            h1: 'Оператор SQL HAVING',
            text: 'SQL HAVING',
        }, component: () => import('./pages/SqlHaving.vue')
    },
    {
        path: '/basic/sql-distinct', name: 'sql-distinct', meta: {
            title: 'Оператор SQL DISTINCT: примеры, синтаксис',
            h1: 'Оператор SQL DISTINCT',
            text: 'SQL DISTINCT',
        }, component: () => import('./pages/SqlDistinct.vue')
    },
    {
        path: '/basic/sql-and-or', name: 'sql-and-or', meta: {
            title: 'Предикаты SQL AND и OR: примеры, синтаксис',
            h1: 'Операторы SQL AND и OR',
            text: 'SQL AND и OR',
        }, component: () => import('./pages/SqlAndOr.vue')
    },
];

export const advanced = [
    {
        path: '/advanced/sql-inner-join', name: 'sql-inner-join', meta: {
            title: 'Оператор SQL INNER JOIN: синтаксис, примеры',
            h1: 'Оператор SQL INNER JOIN',
            text: 'SQL INNER JOIN',
        }, component: () => import('./pages/SqlInnerJoin.vue')
    },
    {
        path: '/advanced/sql-left-join', name: 'sql-left-join', meta: {
            title: 'Оператор SQL LEFT JOIN: синтаксис, примеры',
            h1: 'Оператор SQL LEFT JOIN',
            text: 'SQL LEFT JOIN',
        }, component: () => import('./pages/SqlLeftJoin.vue')
    },
    {
        path: '/advanced/sql-right-join', name: 'sql-right-join', meta: {
            title: 'Оператор SQL RIGHT JOIN: примеры, синтаксис',
            h1: 'Оператор SQL RIGHT JOIN',
            text: 'SQL RIGHT JOIN',
        }, component: () => import('./pages/SqlRightJoin.vue')
    },
    {
        path: '/advanced/sql-full-join', name: 'sql-full-join', meta: {
            title: 'Оператор SQL FULL JOIN: синтаксис, примеры',
            h1: 'Оператор SQL FULL JOIN',
            text: 'SQL FULL JOIN',
        }, component: () => import('./pages/SqlFullJoin.vue')
    },
    {
        path: '/advanced/sql-cross-join', name: 'sql-cross-join', meta: {
            title: 'Оператор SQL CROSS JOIN: примеры, синтаксис',
            h1: 'Оператор SQL CROSS JOIN',
            text: 'SQL CROSS JOIN',
        }, component: () => import('./pages/SqlCrossJoin.vue')
    },
    {
        path: '/advanced/sql-create', name: 'sql-create', meta: {
            title: 'Оператор SQL CREATE: примеры, синтаксис',
            h1: 'Оператор SQL CREATE',
            text: 'SQL CREATE',
        }, component: () => import('./pages/SqlCreate.vue')
    },
    {
        path: '/advanced/sql-default', name: 'sql-default', meta: {
            title: 'Оператор SQL DEFAULT: примеры, синтаксис',
            h1: 'Оператор SQL DEFAULT',
            text: 'SQL DEFAULT',
        }, component: () => import('./pages/SqlDefault.vue')
    },
    {
        path: '/advanced/sql-drop', name: 'sql-drop', meta: {
            title: 'Оператор SQL DROP: примеры использования, синтаксис',
            h1: 'Оператор SQL DROP',
            text: 'SQL DROP',
        }, component: () => import('./pages/SqlDrop.vue')
    },
    {
        path: '/advanced/sql-alter-table', name: 'sql-alter-table', meta: {
            title: 'Оператор SQL ALTER TABLE: примеры, синтаксис',
            h1: 'Оператор SQL ALTER TABLE',
            text: 'SQL ALTER TABLE',
        }, component: () => import('./pages/SqlAlterTable.vue')
    },
    {
        path: '/advanced/sql-view', name: 'sql-view', meta: {
            title: 'Оператор SQL VIEW: синтаксис, примеры',
            h1: 'Оператор SQL VIEW',
            text: 'SQL VIEW',
        }, component: () => import('./pages/SqlView.vue')
    },
    {
        path: '/advanced/sql-primary-key', name: 'sql-primary-key', meta: {
            title: 'Оператор SQL PRIMARY KEY: примеры, синтаксис',
            h1: 'Оператор SQL PRIMARY KEY',
            text: 'SQL PRIMARY KEY',
        }, component: () => import('./pages/SqlPrimaryKey.vue')
    },
    {
        path: '/advanced/sql-foreign-key', name: 'sql-foreign-key', meta: {
            title: 'Оператор SQL FOREIGN KEY: синтаксис, примеры использования',
            h1: 'Оператор SQL FOREIGN KEY',
            text: 'SQL FOREIGN KEY',
        }, component: () => import('./pages/SqlForeignKey.vue')
    },
    {
        path: '/advanced/sql-union', name: 'sql-union', meta: {
            title: 'Оператор SQL UNION: синтаксис, примеры использования',
            h1: 'Оператор SQL UNION',
            text: 'SQL UNION',
        }, component: () => import('./pages/SqlUnion.vue')
    },
    {
        path: '/advanced/sql-top', name: 'sql-top', meta: {
            title: 'Оператор SQL TOP: примеры, синтаксис',
            h1: 'Оператор SQL TOP',
            text: 'SQL TOP',
        }, component: () => import('./pages/SqlTop.vue')
    },
];
export const functions = [];

export const routes = [
    { path: '/', name: 'home', component: () => import('./pages/Main.vue') },
    ...basic,
    ...advanced,
    ...functions,
]