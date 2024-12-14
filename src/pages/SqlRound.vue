<script setup>

</script>

<template>
  <p>Оператор SQL ROUND() &#8212; функция для округления десятичных чисел. Работает только с числовыми столбцами или произвольными вещественными числами.</p>
  <p>Функция SQL ROUND() имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
ROUND(expression, length)
</pre>
  <p>expression &#8212; название столбца или столбцов, а так же вещественное число.</p>
  <p>length &#8212; указывает точность округления для числа.</p>
  <hr/>
  <p><strong>Примеры оператора SQL ROUND. </strong>Имеется следующая <abbr title="ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель">таблица Planets</abbr>:</p>
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
      <td style="text-align: center;">687.58</td>
      <td style="text-align: center;">1659</td>
      <td style="text-align: center;">No</td>
      <td style="text-align: center;">Christiaan Huygens</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Saturn</td>
      <td style="text-align: center;">60268</td>
      <td style="text-align: center;">10759.22</td>
      <td style="text-align: center;">&#8212;</td>
      <td style="text-align: center;">Yes</td>
      <td style="text-align: center;">&#8212;</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Neptune</td>
      <td style="text-align: center;">24764</td>
      <td style="text-align: center;">60190.91</td>
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
      <td style="text-align: center;">243.56</td>
      <td style="text-align: center;">1610</td>
      <td style="text-align: center;">No</td>
      <td style="text-align: center;">Galileo Galilei</td>
    </tr>
    </tbody>
  </table-scroll>
  <p><strong>Пример 1.</strong> Используя оператор SQL ROUND округлить столбец SunSeason с точностью до одного знака после запятой:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT ROUND(SunSeason, 1) FROM Planets
</pre>
  <p><em>Результат:</em></p>
  <table-scroll border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>SunSeason</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">687.5</td>
    </tr>
    <tr>
      <td style="text-align: center;">10759.2</td>
    </tr>
    <tr>
      <td style="text-align: center;">60190.9</td>
    </tr>
    <tr>
      <td style="text-align: center;">115.8</td>
    </tr>
    <tr>
      <td style="text-align: center;">243.5</td>
    </tr>
    </tbody>
  </table-scroll>
  <p><strong>Пример 2. </strong>Округлить значение числа с использованием оператора SQL ROUND.</p>
  <p>Функция SQL ROUND() может принимать в качестве первого аргумента любое вещественное число:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT ROUND(43532.8123, 3)
</pre>
  <p><em>Результат:</em></p>
  <p>43532.8</p>
</template>

<style scoped>

</style>