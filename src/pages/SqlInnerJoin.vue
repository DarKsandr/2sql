<script setup>

import SqlForeignKeyLink from "../components/Links/SqlForeignKeyLink.vue";
</script>

<template>
  <p>Оператор SQL INNER JOIN формирует таблицу из записей двух или нескольких таблиц. Каждая строка из первой (левой)
    таблицы, сопоставляется с каждой строкой из второй (правой) таблицы, после чего происходит проверка условия. Если
    условие истинно, то строки попадают в результирующую таблицу. В результирующей таблице строки формируются
    конкатенацией строк первой и второй таблиц.</p>
  <p>Оператор SQL INNER JOIN имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT
    column_names [,... n]
FROM
    Table_1 INNER JOIN Table_2
ON condition
</pre>
  <p>Условие для сравнения задается в операторе ON.</p>
  <hr/>
  <p><strong>Примеры<strong> оператора SQL INNER JOIN</strong>. </strong>Имеются две таблицы:</p>
  <p><strong><abbr title="AuthorID - номер автора; AuthorName - имя автора">Authors</abbr></strong> &#8212; содержит в
    себе информацию об авторах книг:</p>
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
  <p><strong><abbr title="BookID - номер книги; BookName - название книги">Books</abbr></strong> &#8212; содержит в себе
    информацию о названии книг:</p>
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
  <p>В таблице Books поле BookID являются <SqlForeignKeyLink>внешним ключом</SqlForeignKeyLink> и ссылаются на таблицу Authors.</p>
  <p><strong>Пример 1. </strong>Используя оператор SQL INNER JOIN вывести на экран, какими авторами были написаны какие
    из книг:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT *
FROM Authors INNER JOIN Books
ON Authors.AuthorID = Books.BookID
</pre>
  <p>В данном запросе оператора SQL INNER JOIN условие сравнения &#8212; это равенство полей AuthorID и BookID. В
    результирующую таблицу не попадет книга под названием Programming in Scala, так как значение ее BookID не найдет
    равенства ни с одной строкой AuthorID.</p>
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
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Andrew Tanenbaum</td>
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
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Andrew Tanenbaum</td>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Computer Architecture</td>
    </tr>
    </tbody>
  </table-scroll>
</template>

<style scoped>

</style>