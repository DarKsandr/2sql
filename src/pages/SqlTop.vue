<script setup>

import SqlOrderByLink from "../components/Links/SqlOrderByLink.vue";
import SqlLimitLink from "../components/Links/SqlLimitLink.vue";
</script>

<template>
  <p>Оператор SQL TOP позволяет ограничить выборку числа записей до заданного числа. При использовании оператора SQL TOP совместно с оператором <SqlOrderByLink />, на вывод пойдет первые N записей отсортированного списка, в противном случае, выведутся первые N строк таблицы.</p>
  <p>Используется только в СУБД <strong>MS SQL Server</strong>! Аналогом в <strong>MySQL</strong> является оператор <SqlLimitLink />.</p>
  <p>Оператор SQL TOP имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">

TOP ( N [PERCENT] )

</pre>
  <p>Параметр PERCENT позволяет задать количество строк в процентах. Эта возможность появилась в MS SQL Server 2012.</p>
  <hr/>
  <p><strong>Примеры оператора SQL TOP. </strong>Имеется следующая <abbr title="Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж">таблица Artists:</abbr></p>
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
  <p><strong>Пример 1. </strong>Используя оператор SQL TOP вывести первые 4 строки таблицы:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT TOP(4) * FROM Artists
</pre>
  <p><em>Результат:</em><strong><br/>
  </strong></p>
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
    </tbody>
  </table>
  <p><strong>Пример 2. </strong>Используя оператор SQL TOP вывести 3 самых свежих альбома (название и год выпуска):</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT TOP(3) Album, Year FROM Artists ORDER BY Year
</pre>
  <p><em>Результат:</em></p>
  <table border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>Album</strong></td>
      <td style="text-align: center;"><strong>Year</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">Resilience</td>
      <td style="text-align: center;">2013</td>
    </tr>
    <tr>
      <td style="text-align: center;">Invaders Must Die</td>
      <td style="text-align: center;">2008</td>
    </tr>
    <tr>
      <td style="text-align: center;">Full Circle</td>
      <td style="text-align: center;">2007</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>