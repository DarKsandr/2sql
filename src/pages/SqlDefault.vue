<script setup>

import SqlCreateLink from "../components/Links/SqlCreateLink.vue";
import SqlInsertLink from "../components/Links/SqlInsertLink.vue";
</script>

<template>
  <p>Оператор SQL DEFAULT определяет значение, которым будет заполнен тот или иной столбец по умолчанию при создании таблицы. Данное значение будет вставляться в запись, если иное не указано.</p>
  <p>Оператор SQL DEFAULT имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE table_name (
column_name1 data_type(size) DEFAULT 'default_name'
)
</pre>
  <hr/>
  <p><strong>Пример оператора SQL DEFAULT. </strong>По аналогии с примером 1 оператора <SqlCreateLink /> создать таблицу Planets, где по умолчанию, с помощью оператора SQL DEFAULT в столбце HavingRings должно стоять значение &#8216;No':</p>
  <pre class="brush: sql; title: ; notranslate" title="">
CREATE TABLE Planets (
ID int,
PlanetName varchar(10),
Radius float (10),
SunSeason float(10),
OpeningYear int,
HavingRings bit DEFAULT 'No',
Opener varchar(30)
)
</pre>
  <p>Теперь при заполнении таблицы оператором <SqlInsertLink />, если мы не станем указывать значение поля HavingRings, в него будет автоматически проставлено значение &#8216;No&#8217;.</p>
</template>

<style scoped>

</style>