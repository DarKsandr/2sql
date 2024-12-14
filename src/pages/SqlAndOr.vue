<script setup>

</script>

<template>
    <p>Операторы SQL AND и SQL OR &#8212; предикаты языка SQL, служащие для создания логических выражений. В SQL
        предикатами называются операторы, возвращающие значения TRUE или FALSE. Предикат SQL AND &#8212; эквивалент
        логического умножения (конъюнкции), предикат SQL OR &#8212; эквивалент логического сложения (дизъюнкции).</p>
    <p>Таблица истинности для предикатов следующая:</p>
    <table-scroll border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>first_expression</strong></td>
                <td style="text-align: center;"><strong>last_expression</strong></td>
                <td style="text-align: center;"><strong>AND</strong></td>
                <td style="text-align: center;"><strong>OR</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;"><span style="color: #ffffff;">TRUE</span></td>
                <td style="text-align: center;"><span style="color: #ffffff;">TRUE</span></td>
                <td style="text-align: center;"><span style="color: #ffffff;">TRUE</span></td>
                <td style="text-align: center;"><span style="color: #ffffff;">TRUE</span></td>
            </tr>
            <tr>
                <td style="text-align: center;"><span style="color: #ffffff;">TRUE</span></td>
                <td style="text-align: center;"><span style="color: #888888;">FALSE</span></td>
                <td style="text-align: center;"><span style="color: #888888;">FALSE</span></td>
                <td style="text-align: center;"><span style="color: #ffffff;">TRUE</span></td>
            </tr>
            <tr>
                <td style="text-align: center;"><span style="color: #888888;">FALSE</span></td>
                <td style="text-align: center;"><span style="color: #ffffff;">TRUE</span></td>
                <td style="text-align: center;"><span style="color: #888888;">FALSE</span></td>
                <td style="text-align: center;"><span style="color: #ffffff;">TRUE</span></td>
            </tr>
            <tr>
                <td style="text-align: center;"><span style="color: #888888;">FALSE</span></td>
                <td style="text-align: center;"><span style="color: #888888;">FALSE</span></td>
                <td style="text-align: center;"><span style="color: #888888;">FALSE</span></td>
                <td style="text-align: center;"><span style="color: #888888;">FALSE</span></td>
            </tr>
        </tbody>
    </table-scroll>
    <p>Это значит, что, для выполнения условия предиката SQL AND должны быть выполнены оба условия. Для выполнения
        предиката SQL OR должно быть выполнено хотя бы одно условие.</p>
    <p>Предикат SQL AND имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
boolean_expression AND boolean_expression
</pre>
    <p>Предикат SQL OR имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
boolean_expression OR boolean_expression
</pre>
    <hr />
    <p><strong>Примеры<strong> оператора SQL AND &amp; OR</strong>. </strong>Имеется следующая <abbr
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
    <p><strong>Пример 1. </strong>Используя операторы SQL AND и SQL OR вывести записи планет, у которых радиус планеты
        меньше 10000 и открытых (OpeningYear) после 1620:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT *
FROM Planets
WHERE Radius &lt; 10000 AND OpeningYear &gt; 1620
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
    <p><strong>Пример 2. </strong>Используя операторы SQL AND и SQL OR вывести записи планет, названия которых
        начинаются с буквы &#171;N&#187; или заканчиваются на букву &#171;s&#187; и не имеющие колец:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT *
FROM Planets
WHERE (PlanetName LIKE 'N%'
OR PlanetName LIKE '%s')
AND HavingRings = 'No'
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
    <p>В этом примере используются как предикат SQL AND так и SQL OR. Конечно же, в запросах их можно использовать
        сколько угодно раз (так же как и скобки, которые их ограничивают), для задания более точного условия выборки.
    </p>
</template>