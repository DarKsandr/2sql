<script setup>

</script>

<template>
  <p>Оператор SQL MID() &#8212; функция, выводящая определенное количество символов текстового поля таблицы.</p>
  <p>Функция SQL MID() имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
MID(colunm_name,start [,length])
</pre>
  <p>Параметр <strong>start</strong> задает позицию начального символа.</p>
  <p>Параметр <strong>length</strong> устанавливает количество символов для вывода начиная с позиции, указанной в параметре <strong>start</strong>.</p>
  <hr/>
  <p><strong>Примеры оператора SQL MID:</strong> Имеется следующая <abbr title="ID - Порядковый номер; UniversityName - Название университета; Students - Количество студентов; Faculties - Количество факультетов; Professores - Количество преподавателей; Location - Местоположение университета; Site - Сайт">таблица Universities</abbr>:</p>
  <table-scroll border="1" cellspacing="1" cellpadding="1">
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
  <p><strong>Пример 1. </strong>Вывести первые 3 символа названия города (Location) с помощью оператора SQL MID:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT MID(Location, 1, 3) FROM Universities
</pre>
  <p><em>Результат:</em></p>
  <table-scroll border="1" cellspacing="1" cellpadding="1">
    <thead>
    <tr>
      <td style="text-align: center;"><strong>Location</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td style="text-align: center;">Per</td>
    </tr>
    <tr>
      <td style="text-align: center;">Sai</td>
    </tr>
    <tr>
      <td style="text-align: center;">Nov</td>
    </tr>
    <tr>
      <td style="text-align: center;">Mos</td>
    </tr>
    <tr>
      <td style="text-align: center;">Mos</td>
    </tr>
    <tr>
      <td style="text-align: center;">Yek</td>
    </tr>
    <tr>
      <td style="text-align: center;">Mos</td>
    </tr>
    </tbody>
  </table-scroll>
</template>

<style scoped>

</style>