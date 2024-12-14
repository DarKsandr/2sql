<script setup>

</script>

<template>

  <p>Оператор SQL NOT служит для задания противоположно заданного условия. Является эквивалентом операции инверсии в математической логике и может применяется только для <abbr title="Принимающих только два параметра: TRUE или FALSE">булевых значений</abbr>.</p>
  <p>Оператор SQL NOT имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
[ NOT ] boolean_expression
</pre>
  <hr/>
  <p><strong>Примеры оператора SQL NOT. </strong>Имеется следующая <abbr title="Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж">таблица Artists:</abbr></p>
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
  <p><strong>Пример 1. </strong>Используя оператор SQL NOT вывести записи таблицы, без исполнителя Drowning Pool и Massive Attack:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT * FROM Artists WHERE Singer NOT IN ('Drowning Pool', 'Massive Attack')
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
  <p>Очевидно, что в нашем случае, с такой небольшой таблицей удобней было бы использовать запрос:</p>
  <pre class="brush: sql; title: ; notranslate" title="">

SELECT * FROM Artists WHERE Singer = &quot;The Prodigy&quot;

</pre>
  <p>Однако, в случае огромных таблиц с тысячами записей где надо получить выборку исключающего множества, оператор SQL NOT подходит как нельзя лучше.</p>
  <p><strong>Пример 2. </strong>Вывести записи таблицы, в которых название альбома содержит одно слово:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT * FROM Artists WHERE Album NOT LIKE &quot;% %&quot;
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
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">Mezzanine</td>
      <td style="text-align: center;">1998</td>
      <td style="text-align: center;">2300000</td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Resilience</td>
      <td style="text-align: center;">2013</td>
      <td style="text-align: center;">500000</td>
    </tr>
    </tbody>
  </table-scroll>
</template>

<style scoped>

</style>