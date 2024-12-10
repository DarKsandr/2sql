<script setup>

</script>

<template>
  <p>Оператор SQL FULL JOIN осуществляет формирование таблицы из записей двух или нескольких таблиц. В операторе SQL FULL JOIN не важен порядок следования таблиц, он никак не влияет на окончательный результат, так как оператор является симметричным.</p>
  <p>Оператор SQL FULL JOIN можно воспринимать как сочетание операторов <a title="Оператор SQL INNER JOIN - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/advanced/sql-inner-join/" target="_blank">SQL INNER JOIN</a> + <a title="Оператор SQL LEFT JOIN - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/advanced/sql-left-join/" target="_blank">SQL LEFT JOIN</a> + <a title="Оператор SQL RIGHT JOIN - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/advanced/sql-right-join/" target="_blank">SQL RIGHT JOIN</a>. Алгоритм его работы следующий:</p>
  <ol>
    <li>Сначала формируется таблица на основе внутреннего соединения (оператор <a title="Оператор SQL INNER JOIN - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/advanced/sql-inner-join/" target="_blank">SQL INNER JOIN</a>).</li>
    <li>Затем, в таблицу добавляются значения не вошедшие в результат формирования из правой таблицы (оператор <a title="Оператор SQL LEFT JOIN - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/advanced/sql-left-join/" target="_blank">SQL LEFT JOIN</a>). Для них, соответствующие записи из правой таблицы заполняются значениями NULL.</li>
    <li>Наконец, в таблицу добавляются значения не вошедшие в результат формирования из левой таблицы (оператор <a title="Оператор SQL RIGHT JOIN - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/advanced/sql-right-join/" target="_blank">SQL RIGHT JOIN</a>). Для них, соответствующие записи из левой таблицы заполняются значениями NULL.</li>
  </ol>
  <p>Оператор SQL FULL JOIN имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT
    column_names [,... n]
FROM
    Table_1 FULL JOIN Table_2
ON condition
</pre>
  <hr/>
  <p><strong>Примеры оператора SQL FULL JOIN. </strong>Имеются две таблицы:</p>
  <p><strong><abbr title="AuthorID - номер автора; AuthorName - имя автора">Authors</abbr></strong> &#8212; содержит в себе информацию об авторах книг:</p>
  <table border="1" cellspacing="0">
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
  </table>
  <p><strong><abbr title="BookID - номер книги; BookName - название книги">Books</abbr></strong> &#8212; содержит в себе информацию о названии книг:</p>
  <table border="1" cellspacing="0">
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
  </table>
  <p>В таблице Books поле BookID являются внешним ключом и ссылаются на таблицу Authors.</p>
  <p><strong>Пример 1. </strong>Используя оператор SQL FULL JOIN вывести авторов всех книг и книги всех авторов:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
SELECT *
FROM Authors FULL JOIN Books
ON Authors.AuthorID = Books.BookID
</pre>
  <p><em>Результирующая таблица будет выглядеть следующим образом:</em></p>
  <table border="1" cellspacing="0">
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
    <tr>
      <td style="text-align: center;">NULL</td>
      <td style="text-align: center;">NULL</td>
      <td style="text-align: center;">4</td>
      <td style="text-align: center;">Programming in Scala</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>