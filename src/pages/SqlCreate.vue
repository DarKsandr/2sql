<script setup>

</script>

<template>
  <p>Оператор SQL CREATE служит для создания объектов базы данных. Разные СУБД работают с разными объектами, но наиболее общими для большинства СУБД будут команды создания таблицы (оператор SQL CREATE TABLE) и создания представления (оператор <a title="Оператор SQL VIEW - примеры использования" href="https://web.archive.org/web/20231208195712/http://2sql.ru/advanced/sql-view/" target="_blank">SQL CREATE VIEW</a>).</p>
  <p>Синтаксис оператора SQL CREATE TABLE выглядит следующим образом:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE  table_name (
column_name1 data_type(size),
column_name2 data_type(size),
column_name3 data_type(size)
...
)
</pre>
  <hr/>
  <p><strong>Пример оператора SQL CREATE. </strong>Используя оператор SQL CREATE создать таблицу Planets содержащую следующие поля: ID (числовой), PlanetName (символьный), Radius (вещественный), SunSeason (вещественный), OpeningYear (числовой), HavingRings (логический), Opener (символьный):</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE Planets (
ID int,
PlanetName varchar(10),
Radius float (10),
SunSeason float(10),
OpeningYear int,
HavingRings bit,
Opener varchar(30)
)
</pre>
  <p>В данном коде использовались типы СУБД <strong>MS SQL Server</strong>. В других СУБД названия типов могут отличаться!</p>
  <p>В результате выполнения запроса будет создана таблица с перечисленными полями и их типами.</p>
  <p>Пояснение: Поле HavingRings имеет тип bit, принимающее 2 значения &#8212; 1 или 0 (TRUE, FALSE).</p>
</template>

<style scoped>

</style>