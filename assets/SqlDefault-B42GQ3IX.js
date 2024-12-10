import{_ as e,a}from"./index-DKY3BoG6.js";const n={};function r(s,t){return t[0]||(t[0]=a(`<p>Оператор SQL DEFAULT определяет значение, которым будет заполнен тот или иной столбец по умолчанию при создании таблицы. Данное значение будет вставляться в запись, если иное не указано.</p><p>Оператор SQL DEFAULT имеет следующий синтаксис:</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE table_name (
column_name1 data_type(size) DEFAULT &#39;default_name&#39;
)
</pre><hr><p><strong>Пример оператора SQL DEFAULT. </strong>По аналогии с примером 1 оператора <a title="Оператор SQL CREATE - примеры использования" href="https://web.archive.org/web/20231208195712/http://2sql.ru/advanced/sql-create/" target="_blank">SQL CREATE</a> создать таблицу Planets, где по умолчанию, с помощью оператора SQL DEFAULT в столбце HavingRings должно стоять значение ‘No&#39;:</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE Planets (
ID int,
PlanetName varchar(10),
Radius float (10),
SunSeason float(10),
OpeningYear int,
HavingRings bit DEFAULT &#39;No&#39;,
Opener varchar(30)
)
</pre><p>Теперь при заполнении таблицы оператором <a title="Оператор SQL INSERT - примеры использования" href="https://web.archive.org/web/20231208195712/http://2sql.ru/basic/sql-insert/" target="_blank">SQL INSERT</a>, если мы не станем указывать значение поля HavingRings, в него будет автоматически проставлено значение ‘No’.</p>`,7))}const i=e(n,[["render",r]]);export{i as default};
