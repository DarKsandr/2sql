<script setup>
import { basic, advanced, functions } from '../routes';
import CircleMenu from './CircleMenu.vue';
import {ref, watch, computed} from 'vue';

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
    const menu = ref();

    const isOpen = ref(false);

    const toggleMenu = () => {
        const style = window.getComputedStyle(menu.value.$el);
        if(!(style.display === 'none')){
            isOpen.value = !isOpen.value;
            if(isOpen.value){
                window.scrollTo(0, 0);
            }
        }
    }

    watch(isOpen, (value) => {
        document.body.style['overflow-y'] = value ? 'hidden' : 'auto';
    });

    window.addEventListener("resize", (event) => {
        isOpen.value = false;
    });
</script>

<template>
    <div id="sidebar" :class="{'-open': isOpen}">
        <ul>
<!--            <li id="search-2" class="widgetall widget_search">-->
<!--                <h2 class="widgettitle">Поиск</h2>-->
<!--                <form role="search" method="get" id="searchform" class="searchform"-->
<!--                    action="">-->
<!--                    <div>-->
<!--                        <label class="screen-reader-text" for="s">Найти:</label>-->
<!--                        <input type="text" value="" name="s" id="s" />-->
<!--                        <input type="submit" id="searchsubmit" value="Поиск" />-->
<!--                    </div>-->
<!--                </form>-->
<!--            </li>-->
            <li v-for="{title, items: elements} in items">
                <h2 class="widgettitle">{{ title }}</h2>
                <div>
                    <ul class="menu">
                        <li v-for="{name, meta} in elements" class="menu-item menu-item-type-custom menu-item-object-custom">
                            <RouterLink :to="{name}" @click="toggleMenu">{{ meta.text }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <CircleMenu @click="toggleMenu" ref="menu" />
</template>

<style scoped lang="scss">
#sidebar {
	border-right: 1px solid #FFFF00;
	width: 220px;
	min-height: 600px;
	margin-bottom: 40px;
	grid-area: sidebar;
    @include respond-to(mobile) { 
        display: none;

        &.-open{
            display: block;
            position: absolute;
            border: none;
            background-color: black;
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            z-index: 2;
        }
    }
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