<script setup>

import SqlWhereLink from "../components/Links/SqlWhereLink.vue";
import SqlTruncateLink from "../components/Links/SqlTruncateLink.vue";
import SqlAndOrLink from "../components/Links/SqlAndOrLink.vue";
</script>

<template>
    <p>Оператор SQL DELETE используется для удаления записей из таблицы.</p>
    <p>Оператор SQL DELETE имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
DELETE FROM table_name WHERE condition
</pre>
    <p>Условием (<em>condition</em>) задается критерий для удаления той или иной строки. Следует очень внимательно
        относиться к условию оператора <SqlWhereLink /> в операторе SQL DELETE, так как если оно не будет задано вообще, то будут удалены все строки
        таблицы! Аналогом оператора является оператор <SqlTruncateLink />, который удаляет все записи в таблице.</p>
    <hr />
    <p><strong>Примеры<strong> оператора SQL DELETE</strong>. </strong>Имеется следующая <abbr
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
                <td style="text-align: center;">-</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">-</td>
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
    <p><strong>Пример 1. </strong>С помощью оператора SQL DELETE удалить из таблицы все планеты, у которых нет колец и
        их период обращения вокруг Солнца (SunSeason) больше 200:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
DELETE FROM Planets
WHERE HavingRings = 'No'
AND SunSeason &gt; 200
</pre>
  <p>В данном запросе присутствует оператор <SqlAndOrLink>SQL AND</SqlAndOrLink>. Он является логическим умножением и служит для объединения условий. Так, в случае не выполнения
        хотя бы одного из двух условий, все условие оператора <SqlWhereLink /> в операторе SQL DELETE будет считаться невыполненным.</p>
    <p>Выполним проверку:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT *
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
                <td style="text-align: center;">2</td>
                <td style="text-align: center;">Saturn</td>
                <td style="text-align: center;">60268</td>
                <td style="text-align: center;">10759.22</td>
                <td style="text-align: center;">-</td>
                <td style="text-align: center;">Yes</td>
                <td style="text-align: center;">-</td>
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
        </tbody>
    </table-scroll>
    <p>В таблице осталась запись под ID = 4, так как она не выполняет условия оператора <SqlWhereLink />: период обращения вокруг Солнца (SunSeason) в ней не больше 200.</p>
</template>