<script setup>

import SqlWhereLink from "../components/Links/SqlWhereLink.vue";
import SqlGroupByLink from "../components/Links/SqlGroupByLink.vue";
import SqlHavingLink from "../components/Links/SqlHavingLink.vue";
import SqlOrderByLink from "../components/Links/SqlOrderByLink.vue";
</script>

<template>
    <p>Оператор SQL SELECT является одним из основных операторов языка SQL.<span id="more-161"></span> Именно с его
        помощью происходит выборка значений, хранящихся в базе данных. В структуру запроса оператора SQL SELECT могут
        быть включены многие дополнительные операторы: уточняющие условие выборки, производящие группировку, сортировку
        выходных значений и т.д.</p>
    <p>Оператор SQL SELECT имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT column_list
FROM table_name
[WHERE сondition
GROUP BY expression
HAVING condition
ORDER BY expression]
</pre>
    <p>Необязательные операторы обрамлены квадратными скобками [].</p>
    <p>В параметре column_list указываются названия столбцов таблицы, которые необходимо вывести, либо символ “*”,
        позволяющий вывести все столбцы таблицы. Ключевым словом FROM задается название таблицы или таблиц, из которых
        следует брать столбцы. Оператор <SqlWhereLink /> задает дополнительные условия выборки. Оператор <SqlGroupByLink /> используют для группирования результата по столбцу или по нескольким столбцам. Оператор <SqlHavingLink /> включают в запрос для задания условия агрегатных функций. Наконец, оператор <SqlOrderByLink /> используется для сортировки значений.</p>
    <hr />
    <p><strong>Примеры оператора SQL SELECT. </strong>Имеется следующая <abbr
            title="ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель">таблица
            Planets</abbr>:</p>
    <table border="1" cellspacing="0">
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
                <td style="text-align: center;">Mercury</td>
                <td style="text-align: center;">2439</td>
                <td style="text-align: center;">115.88</td>
                <td style="text-align: center;">1631</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Nicolaus Copernicus</td>
            </tr>
            <tr>
                <td style="text-align: center;">5</td>
                <td style="text-align: center;">Venus</td>
                <td style="text-align: center;">6051</td>
                <td style="text-align: center;">243</td>
                <td style="text-align: center;">1610</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Galileo Galilei</td>
            </tr>
        </tbody>
    </table>
    <p><strong>Пример 1</strong>. С помощью оператора SQL SELECT вывести названия планет (Name):</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT PlanetName FROM Planets
</pre>
    <p><em>Результат:</em></p>
    <table border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>PlanetName</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">Mars</td>
            </tr>
            <tr>
                <td style="text-align: center;">Saturn</td>
            </tr>
            <tr>
                <td style="text-align: center;">Neptune</td>
            </tr>
            <tr>
                <td style="text-align: center;">Mercury</td>
            </tr>
            <tr>
                <td style="text-align: center;">Venus</td>
            </tr>
        </tbody>
    </table>
    <p><strong>Пример 2. </strong>С помощью оператора SQL SELECT вывести названия планет, у которых есть кольца
        (HavingRings):</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT PlanetName FROM Planet WHERE HavingRings = 'Yes'
</pre>
    <p><em>Результат:</em></p>
    <table border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>PlanetName</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">Saturn</td>
            </tr>
            <tr>
                <td style="text-align: center;">Neptune</td>
            </tr>
        </tbody>
    </table>
    <p><strong>Пример 3. </strong>С помощью оператора SQL SELECT вывести информацию о планете Нептун:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT * FROM Planets WHERE PlanetName = 'Neptune'
</pre>
    <p><em>Результат:</em></p>
    <table border="1" cellspacing="0">
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
                <td style="text-align: center;">3</td>
                <td style="text-align: center;">Neptune</td>
                <td style="text-align: center;">24764</td>
                <td style="text-align: center;">60190</td>
                <td style="text-align: center;">1846</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">John Couch Adams</td>
            </tr>
        </tbody>
    </table>
</template>