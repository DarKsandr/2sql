<script setup>

</script>

<template>
  <p>Оператор SQL CROSS JOIN формирует таблицу перекрестным соединением (декартовым произведением) двух таблиц. При использовании оператора SQL CROSS JOIN каждая строка левой таблицы сцепляется с каждой строкой правой таблицы. В результате получается таблица со всеми возможными сочетаниями строк обеих таблиц.</p>
  <p>Оператор SQL CROSS JOIN имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT
    column_names [,... n]
FROM
    Table_1 CROSS JOIN Table_2
</pre>
  <p>Обратите внимание, что в операторе за ненадобностью отсутствует условие (ON).</p>
  <hr/>
  <p><strong>Примеры оператора SQL CROSS JOIN. </strong>Имеются две таблицы:</p>
  <p><strong><abbr title="AuthorID - номер автора; AuthorName - имя автора">Authors</abbr></strong> &#8212; содержит в себе информацию об авторах книг:</p>
  <table-scroll border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>AuthorID</strong></td>
      <td style="text-align: center;"><strong>AuthorName</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Bruce Eckel</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Robert Lafore</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Andrew Tanenbaum</td>
    </tr>
    </tbody>
  </table-scroll>
  <p><strong><abbr title="BookID - номер книги; BookName - название книги">Books</abbr></strong> &#8212; содержит в себе информацию о названии книг:</p>
  <table-scroll border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>BookID</strong></td>
      <td style="text-align: center;"><strong>BookName</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Modern Operating System</td>
    </tr>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Thinking in Java</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Computer Architecture</td>
    </tr>
    <tr>
      <td style="text-align: center;">4</td>
      <td style="text-align: center;">Programming in Scala</td>
    </tr>
    </tbody>
  </table-scroll>
  <p>В таблице Books поле BookID являются внешним ключом и ссылаются на таблицу Authors.</p>
  <p><strong>Пример 1. </strong>Произвести декартово произведение обеих таблиц с помощью оператора SQL CROSS JOIN:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT *
FROM Authors CROSS JOIN Books
</pre>
  <p><em>Результирующая таблица будет выглядеть следующим образом:</em></p>
  <table-scroll border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>Authors.AuthorID</strong></td>
      <td style="text-align: center;"><strong>Authors.<strong>AuthorName</strong></strong></td>
      <td style="text-align: center;"><strong>Books.BookID</strong></td>
      <td style="text-align: center;"><strong>Books.BookName</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Bruce Eckel</td>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Modern Operating System</td>
    </tr>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Bruce Eckel</td>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Thinking in Java</td>
    </tr>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Bruce Eckel</td>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Computer Architecture</td>
    </tr>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Bruce Eckel</td>
      <td style="text-align: center;">4</td>
      <td style="text-align: center;">Programming in Scala</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Robert Lafore</td>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Modern Operating System</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Robert Lafore</td>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Thinking in Java</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Robert Lafore</td>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Computer Architecture</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Robert Lafore</td>
      <td style="text-align: center;">4</td>
      <td style="text-align: center;">Programming in Scala</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Andrew Tanenbaum</td>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Modern Operating System</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Andrew Tanenbaum</td>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Thinking in Java</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Andrew Tanenbaum</td>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Computer Architecture</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Andrew Tanenbaum</td>
      <td style="text-align: center;">4</td>
      <td style="text-align: center;">Programming in Scala</td>
    </tr>
    </tbody>
  </table-scroll>
</template>

<style scoped>

</style>