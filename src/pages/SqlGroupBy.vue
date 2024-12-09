<script setup>

</script>

<template>
    <p>Оператор SQL GROUP BY используется для объединения результатов выборки по одному или нескольким столбцам.</p>
    <p>Оператор SQL GROUP BY имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
GROUP BY column_name
</pre>
    <p>С использованием оператора SQL GROUP BY тесно связано использование <abbr
            title="Функция, возвращающая одно значение от набора значений столбца. Пример: SUM(), MAX(), MIN().">агрегатных
            функций</abbr> и оператор <a title="Оператор SQL HAVING - примеры использования"
            href="https://web.archive.org/web/20150418151237/http://2sql.ru/basic/sql-having/" target="_blank">SQL
            HAVING</a><a href="https://web.archive.org/web/20150418151237/http://2sql.ru/basic/sql-having/"
            target="_blank"> </a></p>
    <hr />
    <p><strong>Примеры<strong> оператора SQL GROUP BY</strong>. </strong>Имеется следующая <abbr
            title="Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж">таблица Artists:</abbr>
    </p>
    <table border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>Singer</strong></td>
                <td style="text-align: center;"><strong>Album</strong></td>
                <td style="text-align: center;"><strong>Year</strong></td>
                <td style="text-align: center;"><strong>Sale</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">The Prodigy</td>
                <td style="text-align: center;">Invaders Must Die</td>
                <td style="text-align: center;">2008</td>
                <td style="text-align: center;">1200000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">Sinner</td>
                <td style="text-align: center;">2001</td>
                <td style="text-align: center;">400000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Massive Attack</td>
                <td style="text-align: center;">Mezzanine</td>
                <td style="text-align: center;">1998</td>
                <td style="text-align: center;">2300000</td>
            </tr>
            <tr>
                <td style="text-align: center;">The Prodigy</td>
                <td style="text-align: center;">Fat of the Land</td>
                <td style="text-align: center;">1997</td>
                <td style="text-align: center;">600000</td>
            </tr>
            <tr>
                <td style="text-align: center;">The Prodigy</td>
                <td style="text-align: center;">Music For The Jilted Generation</td>
                <td style="text-align: center;">1994</td>
                <td style="text-align: center;">1500000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Massive Attack</td>
                <td style="text-align: center;">100th Window</td>
                <td style="text-align: center;">2003</td>
                <td style="text-align: center;">1200000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">Full Circle</td>
                <td style="text-align: center;">2007</td>
                <td style="text-align: center;">800000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Massive Attack</td>
                <td style="text-align: center;">Danny The Dog</td>
                <td style="text-align: center;">2004</td>
                <td style="text-align: center;">1900000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">Resilience</td>
                <td style="text-align: center;">2013</td>
                <td style="text-align: center;">500000</td>
            </tr>
        </tbody>
    </table>
    <p><strong>Пример 1.</strong> Используя оператор SQL GROUP BY найти сумму продаж альбомов (Sale) всех исполнителей
        (Singer):</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT Singer, SUM(Sale) AS AllSales
FROM Artists
GROUP BY Singer
</pre>
    <p><em>Результат:</em></p>
    <table border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>Singer</strong></td>
                <td style="text-align: center;"><strong>AllSales</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">1700000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Massive Attack</td>
                <td style="text-align: center;">5400000</td>
            </tr>
            <tr>
                <td style="text-align: center;">The Prodigy</td>
                <td style="text-align: center;">3300000</td>
            </tr>
        </tbody>
    </table>
    <p>В данном запросе используется оператор <a title="Оператор SQL AS - примеры использования"
            href="https://web.archive.org/web/20150418151237/http://2sql.ru/advanced/sql-as/" target="_blank">SQL
            AS</a>, позволяющий задать новое имя столбца AllSales на выходе. В нашем случае это сделано для наглядности.
    </p>
    <p><strong>Пример 2. </strong>Узнать в каком году был выпущен последний альбом каждой из групп используя оператор
        SQL GROUP BY:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT Singer, MAX(Year) AS LastAlbumYear
FROM Artists
GROUP BY Singer
</pre>
    <p><em>Результат:</em></p>
    <table border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>Singer</strong></td>
                <td style="text-align: center;"><strong>LastAlbumYear</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">2013</td>
            </tr>
            <tr>
                <td style="text-align: center;">Massive Attack</td>
                <td style="text-align: center;">2004</td>
            </tr>
            <tr>
                <td style="text-align: center;">The Prodigy</td>
                <td style="text-align: center;">2008</td>
            </tr>
        </tbody>
    </table>
</template>