<script setup>

</script>

<template>
  <p>Оператор SQL LCASE() &#8212; функция, возвращающая значения столбца или столбцов в нижнем регистре букв.</p>
  <p>Функция SQL LCASE() имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
LCASE(column_name)
</pre>
  <p>В СУБД <strong>MS SQL Server</strong> аналогом оператора SQL LCASE() является функция LOWER с тем же синтаксисом.</p>
  <hr/>
  <p><strong>Примеры оператора SQL LCASE. </strong>Имеется следующая <abbr title="ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель">таблица Planets</abbr>:</p>
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
  <p><strong>Пример 1. </strong>С помощью оператора SQL LCASE вывести в нижнем регистре названия планет, у которых есть кольца:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT LCASE(PlanetName)
FROM Planets
WHERE HavingRings = 'Yes'
</pre>
  <p><em>Результат:</em></p>
  <table-scroll border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>PlanetName</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">saturn</td>
    </tr>
    <tr>
      <td style="text-align: center;">neptune</td>
    </tr>
    </tbody>
  </table-scroll>
  <p><strong>Пример 2. </strong>Пример для <strong>MS SQL Server. </strong>С помощью оператора SQL LCASE вывести в нижнем регистре имена первооткрывателей планет, открытых до 1650 года:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT LOWER(Opener)
FROM Planets
WHERE OpeningYear &lt; 1650
</pre>
  <p><em>Результат:</em></p>
  <table-scroll border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>Opener</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">nicolaus copernicus</td>
    </tr>
    <tr>
      <td style="text-align: center;">galileo galilei</td>
    </tr>
    </tbody>
  </table-scroll>
</template>

<style scoped>

</style>