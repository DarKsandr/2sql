<script setup>

import SqlTopLink from "../components/Links/SqlTopLink.vue";
</script>

<template>
  <p>Оператор SQL LIMIT позволяет вывести указанное число строк из таблицы. Оператор SQL LIMIT записывается всегда в конце запроса.</p>
  <p>Используется в СУБД <strong>MySQL</strong>. Аналогом в <strong>MS SQL Server</strong> является оператор <SqlTopLink />.</p>
  <p>Оператор LIMIT имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
LIMIT first_row [, last_row]
</pre>
  <p>Оператор SQL LIMIT выводит то количество записей, которое указано в параметре first_row. Если, через запятую указано значение параметра last_row, то будут выведены строки в диапазоне first_row &#8212; last_row включительно.</p>
  <hr/>
  <p><strong>Примеры оператора SQL LIMIT:</strong> Имеется следующая <abbr title="ID - Порядковый номер; UniversityName - Название университета; Students - Количество студентов; Faculties - Количество факультетов; Professores - Количество преподавателей; Location - Местоположение университета; Site - Сайт">таблица Universities</abbr>:</p>
  <table-scroll border="1" cellspacing="0" cellpadding="1">
    <thead>
    <tr>
      <td style="text-align: center;"><strong>ID</strong></td>
      <td style="text-align: center;"><strong>UniversityName</strong></td>
      <td style="text-align: center;"><strong>Students</strong></td>
      <td style="text-align: center;"><strong>Faculties</strong></td>
      <td style="text-align: center;"><strong>Professores</strong></td>
      <td style="text-align: center;"><strong>Location</strong></td>
      <td style="text-align: center;"><strong>Site</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Perm State National Research University</td>
      <td style="text-align: center;">12400</td>
      <td style="text-align: center;">12</td>
      <td style="text-align: center;">1229</td>
      <td style="text-align: center;">Perm</td>
      <td style="text-align: center;">psu.ru</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Saint Petersburg State University</td>
      <td style="text-align: center;">21300</td>
      <td style="text-align: center;">24</td>
      <td style="text-align: center;">13126</td>
      <td style="text-align: center;">Saint-Petersburg</td>
      <td style="text-align: center;"> spbu.ru</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Novosibirsk State University</td>
      <td style="text-align: center;">7200</td>
      <td style="text-align: center;">13</td>
      <td style="text-align: center;">1527</td>
      <td style="text-align: center;">Novosibirsk</td>
      <td style="text-align: center;">nsu.ru</td>
    </tr>
    <tr>
      <td style="text-align: center;">4</td>
      <td style="text-align: center;">Moscow State University</td>
      <td style="text-align: center;">35100</td>
      <td style="text-align: center;">39</td>
      <td style="text-align: center;">14358</td>
      <td style="text-align: center;">Moscow</td>
      <td style="text-align: center;">msu.ru</td>
    </tr>
    <tr>
      <td style="text-align: center;">5</td>
      <td style="text-align: center;">Higher School of Economics</td>
      <td style="text-align: center;">20335</td>
      <td style="text-align: center;">12</td>
      <td style="text-align: center;">1615</td>
      <td style="text-align: center;">Moscow</td>
      <td style="text-align: center;">hse.ru</td>
    </tr>
    <tr>
      <td style="text-align: center;">6</td>
      <td style="text-align: center;">Ural Federal University</td>
      <td style="text-align: center;">57000</td>
      <td style="text-align: center;">19</td>
      <td style="text-align: center;">5640</td>
      <td style="text-align: center;">Yekaterinburg</td>
      <td style="text-align: center;">urfu.ru</td>
    </tr>
    <tr>
      <td style="text-align: center;">7</td>
      <td style="text-align: center;">National Research Nuclear University</td>
      <td style="text-align: center;">8600</td>
      <td style="text-align: center;">10</td>
      <td style="text-align: center;">936</td>
      <td style="text-align: center;">Moscow</td>
      <td style="text-align: center;">mephi.ru</td>
    </tr>
    </tbody>
  </table-scroll>
  <p><strong>Пример 1. </strong>С использованием оператора SQL LIMIT вывести первые 2 записи таблицы:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT * FROM Universities LIMIT 2
</pre>
  <p><em>Результат:</em></p>
  <table-scroll border="1" cellspacing="0" cellpadding="1">
    <thead>
    <tr>
      <td style="text-align: center;"><strong>ID</strong></td>
      <td style="text-align: center;"><strong>UniversityName</strong></td>
      <td style="text-align: center;"><strong>Students</strong></td>
      <td style="text-align: center;"><strong>Faculties</strong></td>
      <td style="text-align: center;"><strong>Professores</strong></td>
      <td style="text-align: center;"><strong>Location</strong></td>
      <td style="text-align: center;"><strong>Site</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Perm State National Research University</td>
      <td style="text-align: center;">12400</td>
      <td style="text-align: center;">12</td>
      <td style="text-align: center;">1229</td>
      <td style="text-align: center;">Perm</td>
      <td style="text-align: center;">psu.ru</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Saint Petersburg State University</td>
      <td style="text-align: center;">21300</td>
      <td style="text-align: center;">24</td>
      <td style="text-align: center;">13126</td>
      <td style="text-align: center;">Saint-Petersburg</td>
      <td style="text-align: center;"> spbu.ru</td>
    </tr>
    </tbody>
  </table-scroll>
  <p><strong>Пример 2.</strong> С использованием оператора SQL LIMIT вывести названия университетов из таблицы с 4 по 6:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT UniversityName FROM Universities LIMIT 4, 6
</pre>
  <p><em>Результат:</em></p>
  <table-scroll border="1" cellspacing="0" cellpadding="1">
    <thead>
    <tr>
      <td style="text-align: center;"><strong>UniversityName</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td style="text-align: center;">Moscow State University</td>
    </tr>
    <tr>
      <td style="text-align: center;">Higher School of Economics</td>
    </tr>
    <tr>
      <td style="text-align: center;">Ural Federal University</td>
    </tr>
    </tbody>
  </table-scroll>
</template>

<style scoped>

</style>