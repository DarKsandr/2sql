<script setup>

import SqlLimitLink from "../components/Links/SqlLimitLink.vue";
import SqlTopLink from "../components/Links/SqlTopLink.vue";
</script>

<template>
  <p>Оператор SQL FIRST() &#8212; функция, возвращающая первое значение столбца или столбцов таблицы.</p>
  <p><strong>Используется только в СУБД MS Access!</strong></p>
  <p>Функция SQL FIRST() имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
FIRST(column_name)
</pre>
  <p>Аналогом функции SQL FIRST() для <strong>MySQL</strong> будет оператор <SqlLimitLink />. Для<strong> MS SQL Server</strong> оператор <SqlTopLink />. Для <strong>Oracle</strong> оператор ROWNUM.</p>
  <p>Примеры аналогов функции SQL FIRST() для различных СУБД описаны ниже.</p>
  <hr/>
  <p><strong>Примеры оператора SQL FIRST. </strong>Имеется следующая <abbr title="ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель">таблица Planets</abbr>:</p>
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
  <p><strong>Пример 1. </strong>Используя оператор SQL FIRST вывести первое значение столбца PlanetName:</p>
  <p>Решение для <strong>MS Access:</strong></p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT FIRST(PlanetName)
FROM Planets
</pre>
  <p>Решение для <strong>MySQL:</strong></p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT PlanetName
FROM Planets
ORDER BY PlanetName ASC
LIMIT 1
</pre>
  <p>Решение для <strong>MS SQL Server:</strong></p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT TOP 1 PlanetName
FROM Planets
ORDER BY PlanetName ASC
</pre>
  <p>Решение для <strong>Oracle:</strong></p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT PlanetName
FROM Planets
ORDER BY PlanetName ASC
WHERE ROWNUM &lt;=1
</pre>
  <p><em>Результат:</em></p>
  <table-scroll border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>PlanetName</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">Mars</td>
    </tr>
    </tbody>
  </table-scroll>

</template>

<style scoped>

</style>