<script setup>

</script>

<template>
  <p>Оператор SQL AS используется для именования результирующих столбцов при выборке элементов.</p>
  <p>Оператор SQL AS имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT column_name AS new_column_name FROM table_name
</pre>
  <hr/>
  <p><strong>Примеры оператора SQL AS. </strong>Имеется следующая <abbr title="ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель">таблица Planets</abbr>:</p>
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
      <td style="text-align: center;">&#8212;</td>
      <td style="text-align: center;">Yes</td>
      <td style="text-align: center;">&#8212;</td>
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
  <p><strong>Пример 1. </strong>С помощью оператора SQL AS вывести среднее значение радиуса планет таблицы:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT AVG(Radius) AS AverageRadius FROM Planets
</pre>
  <p><em>Результат:</em></p>
  <table-scroll border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>AverageRadius</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">19383,6</td>
    </tr>
    </tbody>
  </table-scroll>
  <p>Столбец стал называться AverageRadius. Без использования оператора SQL AS, столбец имел бы название AVG(Radius), что могло бы быть не понятным тем, кто будет смотреть результаты выборки данных.</p>
</template>

<style scoped>

</style>