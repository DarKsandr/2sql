<script setup>

import SqlSelectLink from "../components/Links/SqlSelectLink.vue";
</script>

<template>
  <p>Оператор SQL UNION используется для объединения двух и более запросов оператора <SqlSelectLink />.</p>
  <p>Оператор SQL UNION имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">

SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2

</pre>
  <p>Важно отметить, что каждый из операторов <SqlSelectLink /> должен иметь в своем запросе одинаковое количество столбцов и типы возвращаемых данных, иначе произойдет ошибка при формировании результирующей таблицы.</p>
  <hr/>
  <p><strong>Примеры оператора SQL UNION. </strong>Имеется следующая <abbr title="Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж">таблица Artists:</abbr></p>
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
  <p><strong>Пример 1. </strong>С помощью оператора SQL UNION вывести название исполнителя и альбома с использованием оператора UNION:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT Singer FROM Artists
UNION
SELECT Album FROM Artists
</pre>
  <p><em>Результат:</em></p>
  <table border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>Singer</strong></td>
      <td style="text-align: center;"><strong>Album</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">The Prodigy</td>
      <td style="text-align: center;">Invaders Must Die</td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Sinner</td>
    </tr>
    <tr>
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">Mezzanine</td>
    </tr>
    <tr>
      <td style="text-align: center;">The Prodigy</td>
      <td style="text-align: center;">Fat of the Land</td>
    </tr>
    <tr>
      <td style="text-align: center;">The Prodigy</td>
      <td style="text-align: center;">Music For The Jilted Generation</td>
    </tr>
    <tr>
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">100th Window</td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Full Circle</td>
    </tr>
    <tr>
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">Danny The Dog</td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Resilience</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>