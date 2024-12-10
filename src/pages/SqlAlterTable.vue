<script setup>

</script>

<template>
  <p>Оператор SQL ALTER TABLE используется тогда, когда необходимо внести изменения в структуру уже существующей таблицы.</p>
  <p>Оператор SQL ALTER TABLE имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
ALTER TABLE table_name
ADD column_name datatype
</pre>
  <hr/>
  <p><strong>Примеры оператора SQL ALTER TABLE. </strong>Имеется следующая <abbr title="Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж">таблица Artists:</abbr></p>
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
  <p><strong>Пример 1. </strong>Добавить столбец Producer, используя оператор SQL ALTER TABLE:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
ATLER TABLE Artists ADD Producer varchar(20)
</pre>
  <p>В результате, в таблицу Artists будет добавлен столбец Producer:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT * FROM Artists
</pre>
  <p>Результат:</p>
  <table border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>Singer</strong></td>
      <td style="text-align: center;"><strong>Album</strong></td>
      <td style="text-align: center;"><strong>Year</strong></td>
      <td style="text-align: center;"><strong>Sale</strong></td>
      <td style="text-align: center;"><strong>Producer</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">The Prodigy</td>
      <td style="text-align: center;">Invaders Must Die</td>
      <td style="text-align: center;">2008</td>
      <td style="text-align: center;">1200000</td>
      <td style="text-align: center;"></td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Sinner</td>
      <td style="text-align: center;">2001</td>
      <td style="text-align: center;">400000</td>
      <td style="text-align: center;"></td>
    </tr>
    <tr>
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">Mezzanine</td>
      <td style="text-align: center;">1998</td>
      <td style="text-align: center;">2300000</td>
      <td style="text-align: center;"></td>
    </tr>
    <tr>
      <td style="text-align: center;">The Prodigy</td>
      <td style="text-align: center;">Fat of the Land</td>
      <td style="text-align: center;">1997</td>
      <td style="text-align: center;">600000</td>
      <td style="text-align: center;"></td>
    </tr>
    <tr>
      <td style="text-align: center;">The Prodigy</td>
      <td style="text-align: center;">Music For The Jilted Generation</td>
      <td style="text-align: center;">1994</td>
      <td style="text-align: center;">1500000</td>
      <td style="text-align: center;"></td>
    </tr>
    <tr>
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">100th Window</td>
      <td style="text-align: center;">2003</td>
      <td style="text-align: center;">1200000</td>
      <td style="text-align: center;"></td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Full Circle</td>
      <td style="text-align: center;">2007</td>
      <td style="text-align: center;">800000</td>
      <td style="text-align: center;"></td>
    </tr>
    <tr>
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">Danny The Dog</td>
      <td style="text-align: center;">2004</td>
      <td style="text-align: center;">1900000</td>
      <td style="text-align: center;"></td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Resilience</td>
      <td style="text-align: center;">2013</td>
      <td style="text-align: center;">500000</td>
      <td style="text-align: center;"></td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>