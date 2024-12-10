<script setup>

</script>

<template>
  <p>Оператор SQL TRUNCATE служит для очистки таблицы от всех данных. Оператор SQL TRUNCATE аналогичен оператору <a title="Оператор SQL DELETE - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/basic/sql-delete/" target="_blank">SQL DELETE</a> применяемом без оператора <a title="Оператор SQL WHERE - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/basic/sql-where/" target="_blank">SQL WHERE</a>. Основные отличия:</p>
  <ul>
    <li>Оператор SQL TRUNCATE не ведет запись об удаленных данных в журнал событий.</li>
    <li>SQL DELETE осуществляет блокировку построчно, оператор SQL TRUNCATE по всей странице целиком. Вследствие этого, оператор SQL TRUNCATE не возвращает никакого значения, SQL DELETE же, возвращает количество удаленных строк.</li>
    <li>После применения оператора SQL DELETE возможно сделать откат операции и восстановить удаленные данные (команда ROLLBACK). При применении оператора SQL TRUNCATE этого сделать нельзя, однако в СУБД MS SQL Server, оператор может применяться в транзакциях.</li>
  </ul>
  <p>Реализация оператора SQL TRUNCATE различна для каждой СУБД, поэтому рекомендуется обращаться к документации используемой системы.</p>
  <p>Оператор SQL TRUNCATE имеет следующий синтаксис:</p>
  <pre class="brush: sql; title: ; notranslate" title="">
TRUNCATE TABLE Table_name
</pre>
  <hr/>
  <p><strong>Примеры оператора SQL TRUNCATE. </strong>Имеется следующая <abbr title="Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж">таблица Artists:</abbr></p>
  <table border="1" cellspacing="0">
    <tbody>
    <tr>
      <td style="text-align: center;"><strong>Singer</strong></td>
      <td style="text-align: center;"><strong>Album</strong></td>
      <td style="text-align: center;"><strong>Year</strong></td>
      <td style="text-align: center;"><strong>Sale</strong></td>
    </tr>
    <tr>
      <td style="text-align: center;">The Prodigy</td>
      <td style="text-align: center;">Invaders Must Die</td>
      <td style="text-align: center;">2008</td>
      <td style="text-align: center;">1200000</td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Sinner</td>
      <td style="text-align: center;">2001</td>
      <td style="text-align: center;">400000</td>
    </tr>
    <tr>
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">Mezzanine</td>
      <td style="text-align: center;">1998</td>
      <td style="text-align: center;">2300000</td>
    </tr>
    <tr>
      <td style="text-align: center;">The Prodigy</td>
      <td style="text-align: center;">Fat of the Land</td>
      <td style="text-align: center;">1997</td>
      <td style="text-align: center;">600000</td>
    </tr>
    <tr>
      <td style="text-align: center;">The Prodigy</td>
      <td style="text-align: center;">Music For The Jilted Generation</td>
      <td style="text-align: center;">1994</td>
      <td style="text-align: center;">1500000</td>
    </tr>
    <tr>
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">100th Window</td>
      <td style="text-align: center;">2003</td>
      <td style="text-align: center;">1200000</td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Full Circle</td>
      <td style="text-align: center;">2007</td>
      <td style="text-align: center;">800000</td>
    </tr>
    <tr>
      <td style="text-align: center;">Massive Attack</td>
      <td style="text-align: center;">Danny The Dog</td>
      <td style="text-align: center;">2004</td>
      <td style="text-align: center;">1900000</td>
    </tr>
    <tr>
      <td style="text-align: center;">Drowning Pool</td>
      <td style="text-align: center;">Resilience</td>
      <td style="text-align: center;">2013</td>
      <td style="text-align: center;">500000</td>
    </tr>
    </tbody>
  </table>
  <p><strong>Пример 1. </strong>Удалить все данные из таблицы используя оператор SQL TRUNCATE:</p>
  <pre class="brush: sql; title: ; notranslate" title="">

TRUNCATE TABLE Artists

</pre>
  <p>Как было сказано выше, аналогичную задачу можно решить оператором SQL DELETE без использования оператора <a title="Оператор SQL WHERE - примеры использования" href="https://web.archive.org/web/20231208195707/http://2sql.ru/basic/sql-where/" target="_blank">SQL WHERE</a>:</p>
  <pre class="brush: sql; title: ; notranslate" title="">

DELETE FROM Artists

</pre>
</template>

<style scoped>

</style>