<script setup>
import SqlSelectLink from '../components/Links/SqlSelectLink.vue';

</script>

<template>
    <p>Оператор SQL INSERT позволяет вносить изменения в структуру таблиц: добавлять записи (строки) и заполнять их
        значениями.</p>
    <p>Оператор SQL INSERT имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
INSERT INTO table_name ([column_name, ... ]) VALUES (expressions, ...)
</pre>
    <p>Так же, значения могут быть записаны и без указания столбцов:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
INSERT INTO table_name VALUES (expressions, ...)
</pre>
    <p>Запись значений может производиться и с помощью оператора
        <SqlSelectLink />:
    </p>
    <pre class="brush: sql; title: ; notranslate" title="">
INSERT INTO table_name SELECT column_name,... FROM table_name
</pre>
    <p>Используя оператор <SqlSelectLink />
        можно вставить более одной записи. В случае, если если для каких-либо полей таблицы не указаны
        значения, они будут заменены значением по умолчанию null.</p>
    <hr />
    <p><strong>Примеры оператора SQL INSERT. </strong>Имеется следующая <abbr
            title="ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель">таблица
            Planets</abbr>:</p>
    <table-scroll border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>ID</strong></td>
                <td style="text-align: center;"><strong>PlanetName</strong></td>
                <td style="text-align: center;"><strong>Radius</strong></td>
                <td style="text-align: center;"><strong>SunSeason</strong></td>
                <td style="text-align: center;"><strong>OpeningYear</strong></td>
                <td style="text-align: center;"><strong>HavingRings</strong></td>
                <td style="text-align: center;"><strong>Opener</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">1</td>
                <td style="text-align: center;">Mars</td>
                <td style="text-align: center;">3396</td>
                <td style="text-align: center;">687</td>
                <td style="text-align: center;">1659</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Christiaan Huygens</td>
            </tr>
            <tr>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">Saturn</td>
                <td style="text-align: center;">60268</td>
                <td style="text-align: center;">10759.22</td>
                <td style="text-align: center;">&#8212;</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">&#8212;</td>
            </tr>
            <tr>
                <td style="text-align: center;">3</td>
                <td style="text-align: center;">Neptune</td>
                <td style="text-align: center;">24764</td>
                <td style="text-align: center;">60190</td>
                <td style="text-align: center;">1846</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">John Couch Adams</td>
            </tr>
        </tbody>
    </table-scroll>
    <p><strong>Пример 1. </strong>С помощью оператора SQL INSERT добавить запись, присвоив полям таблицы следующие
        значения &#8212; ID: 4; PlanetName: Venus; Radius: 6051; SunSeason: 243; OpeningYear: 1610; HavingRings: No;
        Opener: Galileo Galilei;</p>
    <pre class="brush: sql; title: ; notranslate" title="">
INSERT INTO Planets (ID, PlanetName, Radius, SunSeason, OpeningYear, HavingRings, Opener)
VALUES (4, &quot;Venus&quot;, 6051, 243, 160, &quot;No&quot;, &quot;Galileo Galilei&quot;)
</pre>
    <p><em>Результат: </em>После выполнения команды вывода всей таблицы:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT * FROM Planets
</pre>
    <p>Будет выведена таблица Planets с добавленной записью:</p>
    <table-scroll border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>ID</strong></td>
                <td style="text-align: center;"><strong>PlanetName</strong></td>
                <td style="text-align: center;"><strong>Radius</strong></td>
                <td style="text-align: center;"><strong>SunSeason</strong></td>
                <td style="text-align: center;"><strong>OpeningYear</strong></td>
                <td style="text-align: center;"><strong>HavingRings</strong></td>
                <td style="text-align: center;"><strong>Opener</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">1</td>
                <td style="text-align: center;">Mars</td>
                <td style="text-align: center;">3396</td>
                <td style="text-align: center;">687</td>
                <td style="text-align: center;">1659</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Christiaan Huygens</td>
            </tr>
            <tr>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">Saturn</td>
                <td style="text-align: center;">60268</td>
                <td style="text-align: center;">10759.22</td>
                <td style="text-align: center;">&#8212;</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">&#8212;</td>
            </tr>
            <tr>
                <td style="text-align: center;">3</td>
                <td style="text-align: center;">Neptune</td>
                <td style="text-align: center;">24764</td>
                <td style="text-align: center;">60190</td>
                <td style="text-align: center;">1846</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">John Couch Adams</td>
            </tr>
            <tr>
                <td style="text-align: center;">4</td>
                <td style="text-align: center;">Venus</td>
                <td style="text-align: center;">6051</td>
                <td style="text-align: center;">243</td>
                <td style="text-align: center;">1610</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Galileo Galilei</td>
            </tr>
        </tbody>
    </table-scroll>
    <p><strong>Пример 2. </strong>Имеется 2 таблицы &#8212; PlanetWithoutRings(Планеты без колец) и PlanetsWithRings
        (Планеты с кольцами). Как понятно из названия, они отличаются полем HavingRings. В первой таблице все значения в
        нем &#171;No&#187;, во второй &#171;Yes&#187;.</p>
    <p>PlanetWithoutRings:</p>
    <table-scroll border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>ID</strong></td>
                <td style="text-align: center;"><strong>PlanetName</strong></td>
                <td style="text-align: center;"><strong>Radius</strong></td>
                <td style="text-align: center;"><strong>SunSeason</strong></td>
                <td style="text-align: center;"><strong>OpeningYear</strong></td>
                <td style="text-align: center;"><strong>HavingRings</strong></td>
                <td style="text-align: center;"><strong>Opener</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">1</td>
                <td style="text-align: center;">Mars</td>
                <td style="text-align: center;">3396</td>
                <td style="text-align: center;">687</td>
                <td style="text-align: center;">1659</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Christiaan Huygens</td>
            </tr>
            <tr>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">Mercury</td>
                <td style="text-align: center;">2439</td>
                <td style="text-align: center;">115.88</td>
                <td style="text-align: center;">1631</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Nicolaus Copernicus</td>
            </tr>
            <tr>
                <td style="text-align: center;">3</td>
                <td style="text-align: center;">Venus</td>
                <td style="text-align: center;">6051</td>
                <td style="text-align: center;">243</td>
                <td style="text-align: center;">1610</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Galileo Galilei</td>
            </tr>
        </tbody>
    </table-scroll>
    <p>PlanetsWithRings:</p>
    <table-scroll border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>ID</strong></td>
                <td style="text-align: center;"><strong>PlanetName</strong></td>
                <td style="text-align: center;"><strong>Radius</strong></td>
                <td style="text-align: center;"><strong>SunSeason</strong></td>
                <td style="text-align: center;"><strong>OpeningYear</strong></td>
                <td style="text-align: center;"><strong>HavingRings</strong></td>
                <td style="text-align: center;"><strong>Opener</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">1</td>
                <td style="text-align: center;">Saturn</td>
                <td style="text-align: center;">60268</td>
                <td style="text-align: center;">10759.22</td>
                <td style="text-align: center;">&#8212;</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">&#8212;</td>
            </tr>
            <tr>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">Neptune</td>
                <td style="text-align: center;">24764</td>
                <td style="text-align: center;">60190</td>
                <td style="text-align: center;">1846</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">John Couch Adams</td>
            </tr>
        </tbody>
    </table-scroll>
    <p><strong>Задача:</strong> С помощью оператора SQL INSERT вставить записи из таблицы PlanetsWithRings в таблицу
        PlanetsWithoutRings.</p>
    <p>Данную задачу можно решить двумя запросами SQL INSERT, как было показано в Примере 1. Однако, мы воспользуемся
        вставкой строк с помощью оператора <SqlSelectLink />:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
INSERT INTO PlanetsWithoutRings
SELECT ID, PlanetName, Radius, SunSeason, OpeningYear, HavingRings, Opener
FROM PlanetsWithRings
</pre>
    <p>Так как названия столбцов в обоих таблицах совпадает, то указывать их в операторе SQL INSERT необязательно.
        Вышеописанный запрос возьмет все данные из указанных столбцов из одной таблицы и вставит в другую. Посмотреть
        результат можно запросом:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT * FROM PlanetsWithoutRings
</pre>
    <p><em>Результат:</em></p>
    <table-scroll border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>ID</strong></td>
                <td style="text-align: center;"><strong>PlanetName</strong></td>
                <td style="text-align: center;"><strong>Radius</strong></td>
                <td style="text-align: center;"><strong>SunSeason</strong></td>
                <td style="text-align: center;"><strong>OpeningYear</strong></td>
                <td style="text-align: center;"><strong>HavingRings</strong></td>
                <td style="text-align: center;"><strong>Opener</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">1</td>
                <td style="text-align: center;">Mars</td>
                <td style="text-align: center;">3396</td>
                <td style="text-align: center;">687</td>
                <td style="text-align: center;">1659</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Christiaan Huygens</td>
            </tr>
            <tr>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">Mercury</td>
                <td style="text-align: center;">2439</td>
                <td style="text-align: center;">115.88</td>
                <td style="text-align: center;">1631</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Nicolaus Copernicus</td>
            </tr>
            <tr>
                <td style="text-align: center;">3</td>
                <td style="text-align: center;">Venus</td>
                <td style="text-align: center;">6051</td>
                <td style="text-align: center;">243</td>
                <td style="text-align: center;">1610</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Galileo Galilei</td>
            </tr>
            <tr>
                <td style="text-align: center;">1</td>
                <td style="text-align: center;">Saturn</td>
                <td style="text-align: center;">60268</td>
                <td style="text-align: center;">10759.22</td>
                <td style="text-align: center;">&#8212;</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">&#8212;</td>
            </tr>
            <tr>
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">Neptune</td>
                <td style="text-align: center;">24764</td>
                <td style="text-align: center;">60190</td>
                <td style="text-align: center;">1846</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">John Couch Adams</td>
            </tr>
        </tbody>
    </table-scroll>
</template>