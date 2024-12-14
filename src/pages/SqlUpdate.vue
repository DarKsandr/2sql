<script setup>
import SqlSelectLink from '../components/Links/SqlSelectLink.vue';
import SqlWhereLink from "../components/Links/SqlWhereLink.vue";

</script>

<template>
    <p>Оператор SQL UPDATE используется для изменения значений в записях таблицы.</p>
    <p>Оператор SQL UPDATE имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
UPDATE table_name SET expression [WHERE condition]
</pre>
    <p>Напоминаю, что записи в квадратных скобках [] являются необязательными.</p>
    <p>После ключевого слова SET должен идти список столбцов таблицы, которые следует изменить, и новые значения в
        формате Имя_столбца = значение.</p>
    <p>Дополнительное условие, описываемое в операторе <SqlWhereLink />, помогает более гибко совершать манипуляции данными.</p>
    <hr />
    <p><strong>Примеры<strong> оператора SQL UPDATE</strong>. </strong>Имеется следующая <abbr
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
    </table-scroll>
    <p><strong>Пример 1.</strong> С помощью оператора SQL UPDATE изменить название планеты Neptune на Pluton:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
UPDATE Planets
SET PlanetName = 'Pluton'
WHERE ID = 3
</pre>
    <p>В этом примере условие оператора <SqlWhereLink /> является обязательным, так как без него все поля столбца PlanetName во всей таблице изменились бы
        на Pluton. В данном случае, нам приходит на помощь столбец ID, ибо он является Первичным ключом, позволяющим
        однозначно идентифицировать запись.</p>
    <p>Выполним запрос оператором <SqlSelectLink />, чтобы посмотреть изменения в записи:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT *
FROM Planets
WHERE ID = 3
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
                <td style="text-align: center;">3</td>
                <td style="text-align: center;">Pluton</td>
                <td style="text-align: center;">24764</td>
                <td style="text-align: center;">60190</td>
                <td style="text-align: center;">1846</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">John Couch Adams</td>
            </tr>
        </tbody>
    </table-scroll>
    <p><strong>Пример 2.</strong> С помощью оператора SQL UPDATE у первых трех записей таблицы изменить значение наличия
        колец (HavingRings) на &#171;No&#187; и обнулить поле ID</p>
    <p>Код примера для <strong>MS SQL Server</strong>:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
UPDATE TOP(3) Planets
SET HavingRings = 'No', ID = NULL
</pre>
    <p>Код примера для <strong>MySQL</strong>:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
UPDATE Planets
SET HavingRings = 'No', ID = NULL
LIMIT 3
</pre>
    <p>Выполним проверку:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT TOP(3) *
FROM Planets
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
                <td style="text-align: center;">NULL</td>
                <td style="text-align: center;">Mars</td>
                <td style="text-align: center;">3396</td>
                <td style="text-align: center;">687</td>
                <td style="text-align: center;">1659</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">Christiaan Huygens</td>
            </tr>
            <tr>
                <td style="text-align: center;">NULL</td>
                <td style="text-align: center;">Saturn</td>
                <td style="text-align: center;">60268</td>
                <td style="text-align: center;">10759.22</td>
                <td style="text-align: center;">&#8212;</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">&#8212;</td>
            </tr>
            <tr>
                <td style="text-align: center;">NULL</td>
                <td style="text-align: center;">Neptune</td>
                <td style="text-align: center;">24764</td>
                <td style="text-align: center;">60190</td>
                <td style="text-align: center;">1846</td>
                <td style="text-align: center;">No</td>
                <td style="text-align: center;">John Couch Adams</td>
            </tr>
        </tbody>
    </table-scroll>
</template>