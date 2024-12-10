<script setup>

</script>

<template>
  <p>Оператор SQL PRIMARY KEY (Первичный ключ) &#8212; это параметр, который устанавливается для однозначной идентификации той или иной записи в таблице. Значения SQL PRIMARY KEY должны быть всегда уникальны, а так же не содержать значений NULL.</p>
  <p>Любая таблица <em>обязана</em> иметь Первичный ключ, по которому можно однозначно идентифицировать записи в ней.</p>
  <p>Оператор SQL PRIMARY KEY имеет следующий синтаксис:</p>
  <p>Для <strong>MySQL</strong>:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE table_name (
Id int NOT NULL,
PRIMARY KEY (Id)
)
</pre>
  <p>Для <strong>MS SQL Server, Oracle, MS Access</strong>:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE table_name (
Id int NOT NULL PRIMARY KEY
)
</pre>
  <hr/>
  <p><strong>Примеры оператора SQL PRIMARY KEY. </strong>Используя оператор SQL PRIMARY KEY, по аналогии с примером 1 оператора <a title="Оператор SQL CREATE - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/advanced/sql-create/" target="_blank">SQL CREATE</a> создать таблицу Planets с Первичным ключом ID:</p>
  <p>Решение для <strong>MySQL</strong>:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE Planets (
ID int NOT NULL,
PlanetName varchar(10),
Radius float (10),
SunSeason float(10),
OpeningYear int,
HavingRings bit,
Opener varchar(30)
PRIMARY KEY (ID)
)
</pre>
  <p>Решение для <strong>MS SQL Server, Oracle, MS Access</strong>:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE Planets (
ID int NOT NULL PRIMARY KEY,
PlanetName varchar(10),
Radius float (10),
SunSeason float(10),
OpeningYear int,
HavingRings bit,
Opener varchar(30)
)
</pre>
</template>

<style scoped>

</style>