<script setup>

</script>

<template>
    <div id="sidebar">
        <ul>
            <li id="search-2" class="widgetall widget_search">
                <h2 class="widgettitle">Поиск</h2>
                <form role="search" method="get" id="searchform" class="searchform"
                    action="https://web.archive.org/web/20240622214823/http://2sql.ru/">
                    <div>
                        <label class="screen-reader-text" for="s">Найти:</label>
                        <input type="text" value="" name="s" id="s" />
                        <input type="submit" id="searchsubmit" value="Поиск" />
                    </div>
                </form>
            </li>
            <li id="nav_menu-2" class="widgetall widget_nav_menu">
                <h2 class="widgettitle">Основы языка SQL</h2>
                <div class="menu-osnovy-yazy-ka-sql-container">
                    <ul id="menu-osnovy-yazy-ka-sql" class="menu">
                        <li id="menu-item-5"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-select/">SQL
                                SELECT</a>
                        </li>
                        <li id="menu-item-6"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-insert/">SQL
                                INSERT</a>
                        </li>
                        <li id="menu-item-7"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-update/">SQL
                                UPDATE</a>
                        </li>
                        <li id="menu-item-8"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-delete/">SQL
                                DELETE</a>
                        </li>
                        <li id="menu-item-9"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-where/">SQL
                                WHERE</a></li>
                        <li id="menu-item-12"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-order-by/">SQL
                                ORDER
                                BY</a></li>
                        <li id="menu-item-10"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-group-by/">SQL
                                GROUP
                                BY</a></li>
                        <li id="menu-item-11"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-having/">SQL
                                HAVING</a>
                        </li>
                        <li id="menu-item-485"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-485"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-distinct/">SQL
                                DISTINCT</a></li>
                        <li id="menu-item-13"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/basic/sql-and-or/">SQL
                                AND &#038;
                                OR</a></li>
                    </ul>
                </div>
            </li>
            <li id="nav_menu-3" class="widgetall widget_nav_menu">
                <h2 class="widgettitle">Дополнительные возможности SQL</h2>
                <div class="menu-dopolnitel-ny-e-vozmozhnosti-sql-container">
                    <ul id="menu-dopolnitel-ny-e-vozmozhnosti-sql" class="menu">
                        <li id="menu-item-17"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-inner-join/">SQL
                                INNER
                                JOIN</a></li>
                        <li id="menu-item-15"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-left-join/">SQL
                                LEFT
                                JOIN</a></li>
                        <li id="menu-item-16"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-right-join/">SQL
                                RIGHT
                                JOIN</a></li>
                        <li id="menu-item-19"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-19"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-full-join/">SQL
                                FULL
                                JOIN</a></li>
                        <li id="menu-item-487"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-487"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-cross-join/">SQL
                                CROSS
                                JOIN</a></li>
                        <li id="menu-item-41"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-41"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-create/">SQL
                                CREATE</a>
                        </li>
                        <li id="menu-item-46"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-46"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-default/">SQL
                                DEFAULT</a></li>
                        <li id="menu-item-483"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-483"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-drop/">SQL
                                DROP</a>
                        </li>
                        <li id="menu-item-40"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-40"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-alter-table/">SQL
                                ALTER
                                TABLE</a></li>
                        <li id="menu-item-37"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-37"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-view/">SQL
                                VIEW</a>
                        </li>
                        <li id="menu-item-38"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-primary-key/">SQL
                                PRIMARY KEY</a></li>
                        <li id="menu-item-39"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-39"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-foreign-key/">SQL
                                FOREIGN KEY</a></li>
                        <li id="menu-item-484"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-484"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-union/">SQL
                                UNION</a>
                        </li>
                        <li id="menu-item-20"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-top/">SQL
                                TOP</a></li>
                        <li id="menu-item-259"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-259"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-limit/">SQL
                                LIMIT</a>
                        </li>
                        <li id="menu-item-21"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-21"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-in/">SQL
                                IN</a></li>
                        <li id="menu-item-229"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-229"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-truncate/">SQL
                                TRUNCATE</a></li>
                        <li id="menu-item-47"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-47"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-not/">SQL
                                NOT</a></li>
                        <li id="menu-item-22"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-22"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-like/">SQL
                                LIKE</a>
                        </li>
                        <li id="menu-item-35"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-as/">SQL
                                AS</a></li>
                        <li id="menu-item-23"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-23"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/advanced/sql-between/">SQL
                                BETWEEN</a></li>
                    </ul>
                </div>
            </li>
            <li id="nav_menu-4" class="widgetall widget_nav_menu">
                <h2 class="widgettitle">Функции языка SQL</h2>
                <div class="menu-funktsii-yazy-ka-sql-container">
                    <ul id="menu-funktsii-yazy-ka-sql" class="menu">
                        <li id="menu-item-24"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-24"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-count/">SQL
                                COUNT()</a></li>
                        <li id="menu-item-26"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-avg/">SQL
                                AVG()</a>
                        </li>
                        <li id="menu-item-28"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-min/">SQL
                                MIN()</a>
                        </li>
                        <li id="menu-item-27"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-max/">SQL
                                MAX()</a>
                        </li>
                        <li id="menu-item-25"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-sum/">SQL
                                SUM()</a>
                        </li>
                        <li id="menu-item-45"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-45"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-round/">SQL
                                ROUND()</a></li>
                        <li id="menu-item-31"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-first/">SQL
                                FIRST()</a></li>
                        <li id="menu-item-32"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-last/">SQL
                                LAST()</a>
                        </li>
                        <li id="menu-item-33"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-33"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-ucase/">SQL
                                UCASE()</a></li>
                        <li id="menu-item-34"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-34"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-lcase/">SQL
                                LCASE()</a></li>
                        <li id="menu-item-42"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-42"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-len/">SQL
                                LEN()</a>
                        </li>
                        <li id="menu-item-43"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-43"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-mid/">SQL
                                MID()</a>
                        </li>
                        <li id="menu-item-44"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-44"><a
                                href="https://web.archive.org/web/20240622214823/http://2sql.ru/functions/sql-now/">SQL
                                NOW()</a>
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