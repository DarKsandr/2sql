<script setup>

</script>

<template>
    <p>Оператор SQL HAVING является указателем на результат выполнения агрегатных функций. Агрегатной функцией в языке
        SQL называется функция, возвращающая какое-либо одно значение по набору значений столбца. Такими функциями
        являются: <a title="Функция SQL COUNT() - примеры использования"
            href="https://web.archive.org/web/20150418151242/http://2sql.ru/functions/sql-count/" target="_blank">SQL
            COUNT()</a>, <a title="Функция SQL MIN() - примеры использования"
            href="https://web.archive.org/web/20150418151242/http://2sql.ru/functions/sql-min/" target="_blank">SQL
            MIN()</a>, <a title="Функция SQL MAX() - примеры использования"
            href="https://web.archive.org/web/20150418151242/http://2sql.ru/functions/sql-max/" target="_blank">SQL
            MAX()</a>, <a title="Функция SQL AVG() - примеры использования"
            href="https://web.archive.org/web/20150418151242/http://2sql.ru/functions/sql-avg/" target="_blank">SQL
            AVG()</a>, <a title="Функция SQL SUM() - примеры использования"
            href="https://web.archive.org/web/20150418151242/http://2sql.ru/functions/sql-sum/" target="_blank">SQL
            SUM()</a>.</p>
    <p>Оператор SQL HAVING имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
HAVING aggregate_function(column_name) operator value
</pre>
    <p>Оператор SQL HAVING аналогичен оператору <a title="Оператор SQL WHERE - примеры использования"
            href="https://web.archive.org/web/20150418151242/http://2sql.ru/basic/sql-where/" target="_blank">SQL
            WHERE</a> за тем исключением, что применяется не для всего набора столбцов таблицы, а для набора созданного
        оператором <a title="Оператор SQL GROUP BY - примеры использования"
            href="https://web.archive.org/web/20150418151242/http://2sql.ru/basic/sql-group-by/" target="_blank">SQL
            GROUP BY</a> и применяется всегда строго после него.</p>
    <hr />
    <p><strong>Примеры <strong>оператора SQL HAVING</strong>. </strong>Имеется следующая <abbr
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
    <p><strong>Пример 1. </strong>Используя оператор SQL HAVING вывести название исполнителей (Singer) число продаж
        альбомов (Sale) которого больше 2000000:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT Singer, SUM(Sale)
FROM Artists
GROUP BY Singer
HAVING SUM(Sale) &gt; 2000000
</pre>
    <p><em>Результат:</em></p>
    <table border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>Singer</strong></td>
                <td style="text-align: center;"><strong>Sum(Sale)</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">Massive Attack</td>
                <td style="text-align: center;">54000000</td>
            </tr>
            <tr>
                <td style="text-align: center;">The Prodigy</td>
                <td style="text-align: center;">33000000</td>
            </tr>
        </tbody>
    </table>
    <p>В результат не попала группа Drowning Pool, так как общее число проданных ею пластинок равняется 1700000</p>
    <p><strong>Пример 2. </strong>Используя оператор SQL HAVING вывести название исполнителя, который исполнялся еще до
        1995 года:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT Singer, MIN(Year)
FROM Artists
GROUP BY Singer
HAVING MIN(Year) &lt; 1995
</pre>
    <p><em>Результат:</em></p>
    <table border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong style="text-align: center;">Singer</strong></td>
                <td style="text-align: center;"><b>MIN(Year)</b></td>
            </tr>
            <tr>
                <td style="text-align: center;">The Prodigy</td>
                <td style="text-align: center;">1994</td>
            </tr>
        </tbody>
    </table>
</template>