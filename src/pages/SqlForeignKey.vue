<script setup>

</script>

<template>
  <p>Оператор SQL FOREIGN KEY (Внешний ключ) служит для указания в одной таблице на Первичный ключ (оператор <a title="Оператор SQL PRIMARY KEY - примеры использования" href="https://web.archive.org/web/20231208195706/http://2sql.ru/advanced/sql-primary-key/" target="_blank">SQL PRIMARY KEY</a>) в другой.</p>
  <p>Оператор SQL FOREIGN KEY имеет следующий синтаксис:</p>
  <p>Для MySQL:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE table_1 (
ID_1 int NOT NULL
ID_2 int
PRIMARY KEY (ID_1)
FOREIGN KEY (ID_2) REFERENCES table_2(ID_2)
)
</pre>
  <p>Для <strong>MS SQL Server, Oracle, MS Access</strong>:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE table_1 (
ID_1 int NOT NULL PRIMARY KEY
ID_2 int FOREIGN KEY REFERENCES table_2(ID_2)
)
</pre>
  <hr/>
  <p><strong>Примеры оператора SQL FOREIGN KEY. </strong>Имеются две таблицы:</p>
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
      <td style="text-align: center;">2</td>
      <td style="text-align: center;">Object-Oriented Programming in C++</td>
    </tr>
    <tr>
      <td style="text-align: center;">1</td>
      <td style="text-align: center;">Thinking in Java</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td style="text-align: center;">Computer Architecture</td>
    </tr>
    </tbody>
  </table>
  <p>В таблице Books поле BookID являются Внешним ключом и ссылаются на таблицу Authors. Для организации таблиц с подобной структурой используется следующий код (для <strong>MS SQL Server</strong>) с использованием оператора SQL FOREIGN KEY:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE Authors (
AuthorID int NOT NULL PRIMARY KEY,
AuthorName varchar(50)
)

CREATE TABLE Books (
BookID int FOREIGN KEY REFERENCES Authors(AuthorID),
BookName varchar(100)
)
</pre>

</template>

<style scoped>

</style>