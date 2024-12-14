<script setup>

import SqlRightJoinLink from "../components/Links/SqlRightJoinLink.vue";
import SqlInnerJoinLink from "../components/Links/SqlInnerJoinLink.vue";
</script>

<template>
  <p>Оператор SQL LEFT JOIN осуществляет формирование таблицы из записей двух или нескольких таблиц. В операторе SQL LEFT JOIN, как и в операторе <SqlRightJoinLink />, важен порядок следования таблиц, так как от этого будет зависеть полученный результат. Алгоритм работы оператора следующий:</p>
  <ol>
    <li>Сначала происходит формирование таблицы внутренним соединением (оператор <SqlInnerJoinLink />) левой и правой таблиц</li>
    <li>Затем, в результат добавляются записи левой таблицы не вошедшие в результат формирования таблицы внутренним соединением. Для них, соответствующие записи из правой таблицы заполняются значениями NULL.</li>
  </ol>
  <p>Оператор SQL LEFT JOIN имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT
    column_names [,... n]
FROM
    Table_1 LEFT JOIN Table_2
ON condition
</pre>
  <hr/>
  <p><strong>Примеры<strong> оператора SQL LEFT JOIN</strong>. </strong>Имеются две таблицы:</p>
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
  <p><strong>Пример 1. </strong>Пользуясь оператором SQL LEFT JOIN вывести, какие книги написали все авторы:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT *
FROM Authors LEFT JOIN Books
ON Authors.AuthorID = Books.BookID
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
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Thinking in Java</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Robert Lafore</td>
      <td style="text-align: center;">NULL</td>
      <td style="text-align: center;">NULL</td>
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
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Computer Architecture</td>
    </tr>
    </tbody>
  </table-scroll>
  <p>Как можно заметить, записи о книгах автора Robert Lafore отсутствуют в базе и поля Books.BookID и Books.BookName дополняются значениями NULL.</p>
</template>

<style scoped>

</style>