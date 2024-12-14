<script setup>

</script>

<template>
    <p>Оператор SQL ORDER BY выполняет сортировку выходных значений. Оператор SQL ORDER BY можно применять как к
        числовым столбцам, так и к строковым. В последнем случае, сортировка будет происходить по алфавиту.<span
            id="more-377"></span></p>
    <p>Оператор SQL ORDER BY имеет следующий синтаксис:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
ORDER BY column_name [ASC | DESC]
</pre>
    <p>Сортировка может производиться как по возрастанию, так и по убыванию значений.</p>
    <ul>
        <li>Параметр <strong>ASC</strong> (по умолчанию) устанавливает порядок сортирования во возрастанию, от меньших
            значений к большим.</li>
        <li>Параметр <strong>DECS</strong> устанавливает порядок сортирования по убыванию, от больших значений к
            меньшим.</li>
    </ul>
    <hr />
    <p><strong>Примеры<strong> оператора SQL ORDER BY</strong>. </strong>Имеется следующая <abbr
            title="Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж">таблица Artists:</abbr>
    </p>
    <table-scroll border="1" cellspacing="0">
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
    </table-scroll>
    <p><strong>Пример 1. </strong>Вывести все записи таблицы, упорядоченные по названию исполнителя с помощью оператора
        SQL ORDER BY:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT *
FROM Artists
ORDER BY Singer
</pre>
    <p><em>Результат:</em></p>
    <table-scroll border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>Singer</strong></td>
                <td style="text-align: center;"><strong>Album</strong></td>
                <td style="text-align: center;"><strong>Year</strong></td>
                <td style="text-align: center;"><strong>Sale</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">Sinner</td>
                <td style="text-align: center;">2001</td>
                <td style="text-align: center;">400000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">Full Circle</td>
                <td style="text-align: center;">2007</td>
                <td style="text-align: center;">800000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">Resilience</td>
                <td style="text-align: center;">2013</td>
                <td style="text-align: center;">500000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Massive Attack</td>
                <td style="text-align: center;">Mezzanine</td>
                <td style="text-align: center;">1998</td>
                <td style="text-align: center;">2300000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Massive Attack</td>
                <td style="text-align: center;">100th Window</td>
                <td style="text-align: center;">2003</td>
                <td style="text-align: center;">1200000</td>
            </tr>
            <tr>
                <td style="text-align: center;">Massive Attack</td>
                <td style="text-align: center;">Danny The Dog</td>
                <td style="text-align: center;">2004</td>
                <td style="text-align: center;">1900000</td>
            </tr>
            <tr>
                <td style="text-align: center;">The Prodigy</td>
                <td style="text-align: center;">Invaders Must Die</td>
                <td style="text-align: center;">2008</td>
                <td style="text-align: center;">1200000</td>
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
        </tbody>
    </table-scroll>
    <p><strong>Пример 2. </strong>С помощью оператора SQL ORDER BY вывести названия исполнителя, альбома, год выпуска
        тех альбомов, которые выпущены после 2005 года, упорядоченные по убыванию года:</p>
    <pre class="brush: sql; title: ; notranslate" title="">
SELECT Singer, Album, Year
FROM Artists
WHERE Year &gt; 2005
ORDER BY Year DESC
</pre>
    <p><em>Результат:</em></p>
    <table-scroll border="1" cellspacing="0">
        <tbody>
            <tr>
                <td style="text-align: center;"><strong>Singer</strong></td>
                <td style="text-align: center;"><strong>Album</strong></td>
                <td style="text-align: center;"><strong>Year</strong></td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">Resilience</td>
                <td style="text-align: center;">2013</td>
            </tr>
            <tr>
                <td style="text-align: center;">The Prodigy</td>
                <td style="text-align: center;">Invaders Must Die</td>
                <td style="text-align: center;">2008</td>
            </tr>
            <tr>
                <td style="text-align: center;">Drowning Pool</td>
                <td style="text-align: center;">Full Circle</td>
                <td style="text-align: center;">2007</td>
            </tr>
        </tbody>
    </table-scroll>
</template>