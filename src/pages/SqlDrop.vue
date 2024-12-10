<script setup>

</script>

<template>
  <p>Оператор SQL DROP является универсальным оператором удаления объектов базы данных.</p>
  <p>Оператор SQL DROP имеет одинаковый синтаксис для удаления различных объектов:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
DROP [ INDEX | TABLE | DATABASE ] object
</pre>
  <p>Где <em>object</em> &#8212; название базы, таблицы, столбца в таблице, индекса.</p>
  <hr/>
  <p><strong>Примеры оператора SQL DROP.</strong></p>
  <p><strong>Пример 1. </strong>Удалить таблицу Artists используя оператор SQL DROP:</p>
  <pre class="brush: sql; title: ; notranslate" title="">

DROP TABLE Artists

</pre>
  <p><strong>Пример 2. </strong>Удалить базу данных Libraly используя оператор SQL DROP:</p>
  <pre class="brush: sql; title: ; notranslate" title="">

DROP DATABASE Libraly

</pre>
</template>

<style scoped>

</style>