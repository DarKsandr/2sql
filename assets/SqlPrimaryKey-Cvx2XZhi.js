import{S as r}from"./SqlCreateLink-D0Pkmstd.js";import{o as s,c as a,e as l,a as t,b as e,d as o,F as i}from"./index-CGdcHSF2.js";const E={__name:"SqlPrimaryKey",setup(p){return(R,n)=>(s(),a(i,null,[n[3]||(n[3]=l(`<p>Оператор SQL PRIMARY KEY (Первичный ключ) — это параметр, который устанавливается для однозначной идентификации той или иной записи в таблице. Значения SQL PRIMARY KEY должны быть всегда уникальны, а так же не содержать значений NULL.</p><p>Любая таблица <em>обязана</em> иметь Первичный ключ, по которому можно однозначно идентифицировать записи в ней.</p><p>Оператор SQL PRIMARY KEY имеет следующий синтаксис:</p><p>Для <strong>MySQL</strong>:</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE table_name (
Id int NOT NULL,
PRIMARY KEY (Id)
)
</pre><p>Для <strong>MS SQL Server, Oracle, MS Access</strong>:</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE table_name (
Id int NOT NULL PRIMARY KEY
)
</pre><hr>`,8)),t("p",null,[n[0]||(n[0]=t("strong",null,"Примеры оператора SQL PRIMARY KEY. ",-1)),n[1]||(n[1]=e("Используя оператор SQL PRIMARY KEY, по аналогии с примером 1 оператора ")),o(r),n[2]||(n[2]=e(" создать таблицу Planets с Первичным ключом ID:"))]),n[4]||(n[4]=t("p",null,[e("Решение для "),t("strong",null,"MySQL"),e(":")],-1)),n[5]||(n[5]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`CREATE TABLE Planets (
ID int NOT NULL,
PlanetName varchar(10),
Radius float (10),
SunSeason float(10),
OpeningYear int,
HavingRings bit,
Opener varchar(30)
PRIMARY KEY (ID)
)
`,-1)),n[6]||(n[6]=t("p",null,[e("Решение для "),t("strong",null,"MS SQL Server, Oracle, MS Access"),e(":")],-1)),n[7]||(n[7]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`CREATE TABLE Planets (
ID int NOT NULL PRIMARY KEY,
PlanetName varchar(10),
Radius float (10),
SunSeason float(10),
OpeningYear int,
HavingRings bit,
Opener varchar(30)
)
`,-1))],64))}};export{E as default};
