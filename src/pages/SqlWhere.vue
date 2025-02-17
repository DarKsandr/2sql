<script setup>

import SqlAndOrLink from "../components/Links/SqlAndOrLink.vue";
import SqlNotLink from "../components/Links/SqlNotLink.vue";
import SqlLikeLink from "../components/Links/SqlLikeLink.vue";
import SqlBetweenLink from "../components/Links/SqlBetweenLink.vue";
import SqlInLink from "../components/Links/SqlInLink.vue";
</script>

<template>
    <p>Оператор SQL WHERE служит для задания дополнительного условия выборки, операций вставки, редактирования и
        удаления записей.</p>
    <p>Оператор SQL WHERE имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
WHERE condition
</pre>
    <p>Условие (<em>condition</em>) может включать в себя предикаты <SqlAndOrLink />, <SqlNotLink />,
        <SqlLikeLink />, <SqlBetweenLink />, <SqlInLink />,
        ключевое слово NULL, операторы сравнения и равенства (&lt;, &gt;, =).</p>
    <hr />
    <p><strong>Примеры<strong> оператора SQL WHERE</strong>. </strong>Имеется следующая <abbr
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
    <p><strong>Пример 1.</strong> Используя оператор SQL WHERE вывести записи, значение радиуса (Radius) которых
        находится в пределах от 3000 до 9000:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT * FROM Planets WHERE Radius BETWEEN 3000 AND 9000
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
    <p><strong>Пример 2. </strong>Используя оператор SQL WHERE вывести название планеты (PlanetName), год ее открытия
        (OpeningYear) и имя первооткрывателя (Opener), планет, чье название не начинается или не заканчивается на букву
        &#171;s&#187;:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT PlanetName, OpeningYear, Opener
FROM Planets
WHERE PlanetName NOT LIKE '%s'
AND PlanetName NOT LIKE 'S%'
</pre>
    <p><em>Результат:</em></p>
    <table-scroll border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>PlanetName</strong></td>
                <td style="text-align: center;"><strong>OpeningYear</strong></td>
                <td style="text-align: center;"><strong>Opener</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">Neptune</td>
                <td style="text-align: center;">1846</td>
                <td style="text-align: center;">John Couch Adams</td>
            </tr>
            <tr>
                <td style="text-align: center;">Mercury</td>
                <td style="text-align: center;">1631</td>
                <td style="text-align: center;">Nicolaus Copernicus</td>
            </tr>
        </tbody>
    </table-scroll>
</template>