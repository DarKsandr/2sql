<script setup>

import SqlCreateLink from "../components/Links/SqlCreateLink.vue";
</script>

<template>
  <p>Оператор SQL VIEW &#8212; объект базы данных, представляющий собой представление. Представление &#8212; это виртуальная таблица, внутреннее содержимое которой определяется исходя из параметров запроса. Представления широко используются когда необходимо представить структуру базы данных в удобном для восприятия человеком виде, а так же в соображениях безопасности, предоставляя пользователям возможность обращаться к данным, но не разрешая им доступ к исходным таблицам.</p>
  <p>Для создания представления используется оператор <SqlCreateLink /> и синтаксис выглядит следующим образом:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE VIEW view_name
AS SELECT column_name
FROM table_name
WHERE condition
</pre>
  <hr/>
  <p><strong>Примеры оператора SQL VIEW. </strong>Имеется следующая <abbr title="ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель">таблица Planets</abbr>:</p>
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
  <p><strong>Пример 1.</strong> Используя оператор SQL VIEW создать на основе таблицы Planets представление, содержащее в себе название планеты и год ее открытия:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE VIEW PlanetsView
AS SELECT PlanetName, OpeningYear
FROM Planets
</pre>
  <p>В результате будет создано представление с названием PlanetsView которая будет содержать в себе значения столбцов PlanetName и OpeningYear</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT * FROM PlanetsView
</pre>
  <p>Результат:</p>
  <table-scroll border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>PlanetName</strong></td>
      <td style="text-align: center;"><strong>OpeningYear</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">Mars</td>
      <td style="text-align: center;">1659</td>
    </tr>
    <tr>
      <td style="text-align: center;">Saturn</td>
      <td style="text-align: center;">&#8212;</td>
    </tr>
    <tr>
      <td style="text-align: center;">Neptune</td>
      <td style="text-align: center;">1846</td>
    </tr>
    <tr>
      <td style="text-align: center;">Mercury</td>
      <td style="text-align: center;">1631</td>
    </tr>
    <tr>
      <td style="text-align: center;">Venus</td>
      <td style="text-align: center;">1610</td>
    </tr>
    </tbody>
  </table-scroll>
</template>

<style scoped>

</style>