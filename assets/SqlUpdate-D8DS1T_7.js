import{S as s}from"./SqlSelectLink-Cno4Z2lO.js";import{o as r,c as a,a as l,b as t,d as n,e as i,F as g}from"./index-BoRpKmuU.js";const u={__name:"SqlUpdate",setup(d){return(y,e)=>(r(),a(g,null,[e[2]||(e[2]=l(`<p>Оператор SQL UPDATE используется для изменения значений в записях таблицы.</p><p>Оператор SQL UPDATE имеет следующий синтаксис:</p><pre class="brush: sql; title: ; notranslate" title="">UPDATE table_name SET expression [WHERE condition]
</pre><p>Напоминаю, что записи в квадратных скобках [] являются необязательными.</p><p>После ключевого слова SET должен идти список столбцов таблицы, которые следует изменить, и новые значения в формате Имя_столбца = значение.</p><p>Дополнительное условие, описываемое в операторе <a title="Оператор SQL WHERE - примеры использования" href="https://web.archive.org/web/20231208195704/http://2sql.ru/basic/sql-where/" target="_blank">SQL WHERE</a>, помогает более гибко совершать манипуляции данными.</p><hr><p><strong>Примеры<strong> оператора SQL UPDATE</strong>. </strong>Имеется следующая <abbr title="ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель">таблица Planets</abbr>:</p>`,8)),e[3]||(e[3]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Radius")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"SunSeason")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"OpeningYear")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"HavingRings")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Opener")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Mars"),t("td",{style:{"text-align":"center"}},"3396"),t("td",{style:{"text-align":"center"}},"687"),t("td",{style:{"text-align":"center"}},"1659"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Christiaan Huygens")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Saturn"),t("td",{style:{"text-align":"center"}},"60268"),t("td",{style:{"text-align":"center"}},"10759.22"),t("td",{style:{"text-align":"center"}},"—"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"—")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Neptune"),t("td",{style:{"text-align":"center"}},"24764"),t("td",{style:{"text-align":"center"}},"60190"),t("td",{style:{"text-align":"center"}},"1846"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"John Couch Adams")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Mercury"),t("td",{style:{"text-align":"center"}},"2439"),t("td",{style:{"text-align":"center"}},"115.88"),t("td",{style:{"text-align":"center"}},"1631"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Nicolaus Copernicus")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"Venus"),t("td",{style:{"text-align":"center"}},"6051"),t("td",{style:{"text-align":"center"}},"243"),t("td",{style:{"text-align":"center"}},"1610"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Galileo Galilei")])])],-1)),e[4]||(e[4]=t("p",null,[t("strong",null,"Пример 1."),n(" С помощью оператора SQL UPDATE изменить название планеты Neptune на Pluton:")],-1)),e[5]||(e[5]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`UPDATE Planets
SET PlanetName = 'Pluton'
WHERE ID = 3
`,-1)),e[6]||(e[6]=t("p",null,[n("В этом примере условие оператора "),t("a",{title:"Оператор SQL WHERE - примеры использования",href:"https://web.archive.org/web/20231208195704/http://2sql.ru/basic/sql-where/",target:"_blank"},"SQL WHERE"),n(" является обязательным, так как без него все поля столбца PlanetName во всей таблице изменились бы на Pluton. В данном случае, нам приходит на помощь столбец ID, ибо он является Первичным ключом, позволяющим однозначно идентифицировать запись.")],-1)),t("p",null,[e[0]||(e[0]=n("Выполним запрос оператором ")),i(s),e[1]||(e[1]=n(", чтобы посмотреть изменения в записи:"))]),e[7]||(e[7]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT *
FROM Planets
WHERE ID = 3
`,-1)),e[8]||(e[8]=t("p",null,[t("em",null,"Результат:")],-1)),e[9]||(e[9]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Radius")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"SunSeason")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"OpeningYear")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"HavingRings")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Opener")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Pluton"),t("td",{style:{"text-align":"center"}},"24764"),t("td",{style:{"text-align":"center"}},"60190"),t("td",{style:{"text-align":"center"}},"1846"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"John Couch Adams")])])],-1)),e[10]||(e[10]=l(`<p><strong>Пример 2.</strong> С помощью оператора SQL UPDATE у первых трех записей таблицы изменить значение наличия колец (HavingRings) на «No» и обнулить поле ID</p><p>Код примера для <strong>MS SQL Server</strong>:</p><pre class="brush: sql; title: ; notranslate" title="">UPDATE TOP(3) Planets
SET HavingRings = &#39;No&#39;, ID = NULL
</pre><p>Код примера для <strong>MySQL</strong>:</p><pre class="brush: sql; title: ; notranslate" title="">UPDATE Planets
SET HavingRings = &#39;No&#39;, ID = NULL
LIMIT 3
</pre><p>Выполним проверку:</p><pre class="brush: sql; title: ; notranslate" title="">SELECT TOP(3) *
FROM Planets
</pre><p><em>Результат:</em></p>`,8)),e[11]||(e[11]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Radius")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"SunSeason")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"OpeningYear")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"HavingRings")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Opener")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"NULL"),t("td",{style:{"text-align":"center"}},"Mars"),t("td",{style:{"text-align":"center"}},"3396"),t("td",{style:{"text-align":"center"}},"687"),t("td",{style:{"text-align":"center"}},"1659"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Christiaan Huygens")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"NULL"),t("td",{style:{"text-align":"center"}},"Saturn"),t("td",{style:{"text-align":"center"}},"60268"),t("td",{style:{"text-align":"center"}},"10759.22"),t("td",{style:{"text-align":"center"}},"—"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"—")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"NULL"),t("td",{style:{"text-align":"center"}},"Neptune"),t("td",{style:{"text-align":"center"}},"24764"),t("td",{style:{"text-align":"center"}},"60190"),t("td",{style:{"text-align":"center"}},"1846"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"John Couch Adams")])])],-1))],64))}};export{u as default};