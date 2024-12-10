<script setup>

</script>

<template>
  <p>Оператор SQL UCASE() &#8212; функция, возвращающая значения столбца или столбцов в верхнем регистре букв.</p>
  <p>Функция SQL UCASE() имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
UCASE(column_name)
</pre>
  <p>В СУБД <strong>MS SQL Server</strong> аналогом оператора SQL UCASE() является функция UPPER с тем же синтаксисом.</p>
  <hr/>
  <p><strong>Примеры оператора SQL UCASE. </strong>Имеется следующая <abbr title="ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель">таблица Planets</abbr>:</p>
  <table border="1" cellspacing="0">
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
  </table>
  <p><strong>Пример 1</strong>. Вывести названия планет в верхнем регистре, у которых нет колец, используя оператор SQL UCASE:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT UCASE(PlanetName)
FROM Planets
WHERE HavingRings = 'No'
</pre>
  <p><em>Результат:</em></p>
  <table border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>PlanetName</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">MARS</td>
    </tr>
    <tr>
      <td style="text-align: center;">MERCURY</td>
    </tr>
    <tr>
      <td style="text-align: center;">VENUS</td>
    </tr>
    </tbody>
  </table>
  <p><strong>Пример 2. </strong>Пример для <strong>MS SQL Server. </strong>Вывести названия планет в верхнем регистре, радиус которых больше 20000, используя оператор SQL UCASE:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT UPPER(PlanetName)
FROM Planets
WHERE Radius &gt; 20000
</pre>
  <p><em>Результат:</em></p>
  <table border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>PlanetName</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">SATURN</td>
    </tr>
    <tr>
      <td style="text-align: center;">NEPTUNE</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>