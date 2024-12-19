import{_ as r,r as o,o as a,f as l,w as i,b as t,c as p,a as E,d as u,e as m,F as _}from"./index-DfPad6ww.js";const c={};function S(s,n){const e=o("RouterLink");return a(),l(e,{to:{name:"sql-view"},title:"Оператор SQL VIEW - примеры использования"},{default:i(()=>n[0]||(n[0]=[t("SQL CREATE VIEW")])),_:1})}const L=r(c,[["render",S]]),d={__name:"SqlCreate",setup(s){return(n,e)=>(a(),p(_,null,[E("p",null,[e[0]||(e[0]=t("Оператор SQL CREATE служит для создания объектов базы данных. Разные СУБД работают с разными объектами, но наиболее общими для большинства СУБД будут команды создания таблицы (оператор SQL CREATE TABLE) и создания представления (оператор ")),u(L),e[1]||(e[1]=t(")."))]),e[2]||(e[2]=m(`<p>Синтаксис оператора SQL CREATE TABLE выглядит следующим образом:</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE  table_name (
column_name1 data_type(size),
column_name2 data_type(size),
column_name3 data_type(size)
...
)
</pre><hr><p><strong>Пример оператора SQL CREATE. </strong>Используя оператор SQL CREATE создать таблицу Planets содержащую следующие поля: ID (числовой), PlanetName (символьный), Radius (вещественный), SunSeason (вещественный), OpeningYear (числовой), HavingRings (логический), Opener (символьный):</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE Planets (
ID int,
PlanetName varchar(10),
Radius float (10),
SunSeason float(10),
OpeningYear int,
HavingRings bit,
Opener varchar(30)
)
</pre><p>В данном коде использовались типы СУБД <strong>MS SQL Server</strong>. В других СУБД названия типов могут отличаться!</p><p>В результате выполнения запроса будет создана таблица с перечисленными полями и их типами.</p><p>Пояснение: Поле HavingRings имеет тип bit, принимающее 2 значения — 1 или 0 (TRUE, FALSE).</p>`,8))],64))}};export{d as default};
