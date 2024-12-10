<script setup>

</script>

<template>
  <p>Оператор SQL COUNT() &#8212; функция возвращающая количество записей (строк) таблицы. Запись функции с указанием столбца (синтаксис ниже) вернет количество записей конкретного столбца за исключением NULL записей.</p>
  <p>Функция SQL COUNT() имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">COUNT(column_name)</pre>
  <p>Запись функции с указанием маски &#171;*&#187; вернет количество всех записей в таблице.</p>
  <p>Синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">COUNT(*)</pre>
  <hr/>
  <p><strong>Примеры оператора SQL COUNT:</strong> Имеется следующая <abbr title="ID - Порядковый номер; UniversityName - Название университета; Students - Количество студентов; Faculties - Количество факультетов; Professores - Количество преподавателей; Location - Местоположение университета; Site - Сайт">таблица Universities</abbr>:</p>
  <table border="1" cellspacing="1" cellpadding="1">
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
  </table>
  <p><strong>Пример 1.</strong> Вывести число записей таблицы, используя оператор SQL COUNT:</p>
  <pre class="brush: sql; title: ; notranslate" title="">SELECT COUNT(*)&lt;br /&gt;FROM Universities</pre>
  <p><em>Ответ: 7</em></p>
  <p><strong>Пример 2.</strong> Найти количество университетов расположенных в Москве, используя оператор SQL COUNT:</p>
  <pre class="brush: sql; title: ; notranslate" title="">SELECT COUNT(*) FROM Universities WHERE Location = 'Moscow'</pre>
  <p><em>Ответ: 3</em></p>
  <p><strong>Пример 3.</strong> Найти количество университетов с больше чем 20 факультетами, используя оператор SQL COUNT:</p>
  <pre class="brush: sql; title: ; notranslate" title="">SELECT COUNT(*) FROM Universities WHERE Faculties &gt; 20</pre>
  <p><em>Ответ: 2</em></p>

</template>

<style scoped>

</style>