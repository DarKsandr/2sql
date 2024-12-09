<script setup>
import { basic, advanced, functions } from '../routes';

    const items = [
        {
            title: 'Основы языка SQL', 
            items: basic,
        },
        {
            title: 'Дополнительные возможности SQL', 
            items: advanced,
        },
        {
            title: 'Функции языка SQL', 
            items: functions,
        },
    ];
</script>

<template>
    <div id="sidebar">
        <ul>
            <li id="search-2" class="widgetall widget_search">
                <h2 class="widgettitle">Поиск</h2>
                <form role="search" method="get" id="searchform" class="searchform"
                    action="">
                    <div>
                        <label class="screen-reader-text" for="s">Найти:</label>
                        <input type="text" value="" name="s" id="s" />
                        <input type="submit" id="searchsubmit" value="Поиск" />
                    </div>
                </form>
            </li>
            <li v-for="{title, items: elements} in items" class="widgetall widget_nav_menu">
                <h2 class="widgettitle">{{ title }}</h2>
                <div class="menu-osnovy-yazy-ka-sql-container">
                    <ul id="menu-osnovy-yazy-ka-sql" class="menu">
                        <li v-for="{name, meta} in elements" class="menu-item menu-item-type-custom menu-item-object-custom">
                            <RouterLink :to="{name}">{{ meta.text }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#sidebar {
	border-right: 1px solid #FFFF00;
	width: 220px;
	padding: 10px;
	min-height: 600px;
	margin-bottom: 40px;
	grid-area: sidebar;
}

#sidebar>ul {
	color: #fff;
	width: 100%;
	list-style-type: none;
	display: block;
	margin: 0;
	padding: 0;
}

#sidebar>ul>li {
	width: 190px;
	margin: 10px;
}

#sidebar>ul>li>ul {
	list-style-type: none;
}
</style>